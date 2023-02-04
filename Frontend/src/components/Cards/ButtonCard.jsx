import { Link } from "react-router-dom";

export function ButtonCard({path,label}) {
  return (
    <div className="flex items-center justify-center bg-neutral-900 text-white rounded-lg m-2 hover:opacity-60 hover:translate-y-[1px]">
      <Link to={path}>
        <p className="px-6 py-2">{label}</p>
      </Link>
    </div>
  );
}
