import { useEffect, useState } from "react";
import Displayer from "../components/Displayer";

export default function Search() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    function searchWord() {
      console.log(search);
    }

    searchWord();
  }, [search]);

  function clicked() {
    console.log("next", search);
  }

  var data = {
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "AvlUuhigTt2HrsL5wAEdEA",
    url: "",
    value: "Chuck Norris dick is so hard that it can drill through steel.",
  };
  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="text"
        value={search}
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        className="bg-slate-200 h-[2rem] w-[18rem] focus:outline-slate-500 p-2"
      />
      <Displayer value={data?.value} clicked={clicked} />
    </div>
  );
}
