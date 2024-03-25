import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/CategorySlice";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getCategories } from "../services/Categories";

export default function Categories() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  var initial = [
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

  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState(initial);

  const fetchData = useCallback(async () => {
    try {
      const res = await getCategories();
      setCategories(res.data.payload);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
