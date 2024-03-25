import { useSelector } from "react-redux";
import Displayer from "../components/Displayer";
import { selectCategory } from "../store/CategorySlice";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getCategoryViewer } from "../services/CategoryViewer";

export default function CategoryViewer() {
  const nav = useNavigate();
  const selectedCategory = useSelector(selectCategory);
  const [joke, setJoke] = useState("Sample Joke!");

  const fetchData = useCallback(async () => {
    // console.log(selectedCategory);
    try {
      const res = await getCategoryViewer(selectedCategory);
      setJoke(res.data.payload.joke);
    } catch (err) {
      console.error(err);
    }
  }, [selectedCategory]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function clicked() {
    fetchData();
    // console.log("next", selectedCategory);
  }

  if (!selectedCategory) {
    return (
      <div className="flex flex-col justify-center items-center h-[80dvh]">
        <p className="text-center">Please set the category.</p>{" "}
        <button
          className=" text-blue-600 underline"
          onClick={() => nav("/categories")}
        >
          Click here to go back.
        </button>
      </div>
    );
  }

  return (
    <div>
      {selectedCategory && (
        <p className="font-semibold text-lg text-center capitalize">
          Category: {selectedCategory}
        </p>
      )}
      <Displayer value={joke} clicked={clicked} />
    </div>
  );
}
