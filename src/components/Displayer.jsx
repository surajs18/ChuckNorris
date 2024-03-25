export default function Displayer({ value, clicked }) {
  return (
    <div className="mx-auto my-auto w-full h-[80dvh] flex flex-col items-center justify-center">
      <div className="cursor-default flex items-center p-3 justify-center w-[20rem] md:w-[50rem] h-[10rem] duration-200 bg-opacity-25 hover:bg-opacity-50 bg-[#ee9a9a] backdrop-blur-md shadow-lg hover:shadow-xl rounded-lg border border-opacity-25 border-[#e2b1b1]">
        <p> {value} </p>
      </div>
      <br />
      <button
        className="underline underline-offset-4 hover:bg-blue-400 p-3 rounded-xl"
        onClick={() => clicked()}
      >
        Next &gt;&gt;&gt;
      </button>
    </div>
  );
}
