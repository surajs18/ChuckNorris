import Displayer from "../components/Displayer";

export default function RandomFact() {
  function clicked() {
    console.log("next");
  }

  var data = {
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "AvlUuhigTt2HrsL5wAEdEA",
    url: "",
    value: "Chuck Norris dick is so hard that it can drill through steel.",
  };
  return <Displayer value={data?.value} clicked={clicked} />;
}
