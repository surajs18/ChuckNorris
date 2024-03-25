import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/CategorySlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Categories() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("");

  var categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  function setter(data) {
    setSelected(data);
    console.log(selected);
    dispatch(setCategory(data));
    setTimeout(() => nav("/categoryviewer"), 100);
  }

  return (
    <div className="flex gap-5 flex-wrap justify-center capitalize">
      {categories.map((category, i) => (
        <Card title={category} key={i} setter={setter} />
      ))}
    </div>
  );
}
