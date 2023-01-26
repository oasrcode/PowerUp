
import { FaSpinner } from "react-icons/fa";

export function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner size="6em" className="animate-spin  text-red-700" />
    </div>
  );
}
