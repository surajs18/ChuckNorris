import { useSelector } from "react-redux";
import Displayer from "../components/Displayer";
import { selectCategory } from "../store/CategorySlice";
import { useNavigate } from "react-router-dom";

export default function CategoryViewer() {
  const nav = useNavigate();
  const selectedCategory = useSelector(selectCategory);
  var data = {
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "AvlUuhigTt2HrsL5wAEdEA",
    url: "",
    value: "Chuck Norris dick is so hard that it can drill through steel.",
  };

  function clicked() {
    console.log("next", selectCategory);
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
      <Displayer value={data?.value} clicked={clicked} />
    </div>
  );
}
