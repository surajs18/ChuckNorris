import { useCallback, useEffect, useState } from "react";
import Displayer from "../components/Displayer";
import { getRandom } from "../services/Random";

export default function RandomFact() {
  const [joke, setJoke] = useState("Sample Joke!");

  function clicked() {
    fetchData();
    console.log("api call");
  }

  const fetchData = useCallback(async () => {
    try {
      const res = await getRandom();
      setJoke(res.data.payload.joke);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Displayer value={joke} clicked={clicked} />;
}
