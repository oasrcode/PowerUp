export function Card({ button, data, img, gradient }) {
  return (
    <div
      className={`flex flex-row justify-between w-full h-48 rounded-md space-y-3 shadow-md shadow-neutral-500 ${gradient}`}
    >
      <div className="flex flex-row w-full justify-center items-center gap-4">
        <div className="w-28 md:w-28">
          <img src={img} className="object-contain"></img>
        </div>
        <p className="text-black font-bold font-sans text-4xl">
          {data ? data : ""}
        </p>
      </div>
      <div className="">{button}</div>
    </div>
  );
}
