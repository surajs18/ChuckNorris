import { useCallback, useEffect, useState } from "react";
import Displayer from "../components/Displayer";
import { getRandom } from "../services/Random";

export default function RandomFact() {
  const [joke, setJoke] = useState("Loading...");

  function clicked() {
    fetchData();
    console.log("api call");
  }

  const fetchData = useCallback(async () => {
    try {
      console.log("calling");
      const res = await getRandom();
      setJoke(res.data.payload.joke);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    console.log("call");
  }, [fetchData]);

  return <Displayer value={joke} clicked={clicked} />;
}
