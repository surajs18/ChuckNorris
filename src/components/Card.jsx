export default function Card(props) {
  return (
    <div
      onClick={() => props?.setter(props?.title)}
      className="cursor-pointer flex items-center justify-center w-[20rem] h-[6rem] duration-200 bg-opacity-25 hover:bg-opacity-50 bg-[#ee9a9a] backdrop-blur-md shadow-lg hover:shadow-xl rounded-lg border border-opacity-25 border-[#e2b1b1]"
    >
      <p className="font-bold text-xl select-none">{props?.title}</p>
    </div>
  );
}
