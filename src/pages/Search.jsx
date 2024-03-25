import { useCallback, useEffect, useState } from "react";
import Displayer from "../components/Displayer";
import { getSearch } from "../services/Search";

export default function Search() {
  const [search, setSearch] = useState("");
  const [joke, setJoke] = useState("Sample Joke!");

  const fetchData = useCallback(async () => {
    // console.log(search);
    try {
      const res = await getSearch(search);
      setJoke(res.data.payload.joke);
    } catch (err) {
      console.error(err);
    }
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function clicked() {
    fetchData();
    // console.log("next", search);
  }

  useEffect(() => {
    function searchWord() {
      //   console.log(search);
    }

    searchWord();
  }, [search]);

  //   var data = {
  //     icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  //     id: "AvlUuhigTt2HrsL5wAEdEA",
  //     url: "",
  //     value: "Chuck Norris dick is so hard that it can drill through steel.",
  //   };
  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        value={search}
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        className="bg-slate-200 h-[2rem] w-[18rem] focus:outline-slate-500 p-2"
      />
      <Displayer value={joke} clicked={clicked} />
    </div>
  );
}
