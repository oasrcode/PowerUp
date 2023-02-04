import { BsGithub } from "react-icons/bs";
export function Footer() {
  return (
    <div className="flex  w-full h-12 justify-center  space-x-2 bg-neutral-900">
      <a
        className="flex flex-row items-center gap-4 font-mono font-semibold text-gray-50"
        href="https://github.com/oasrcode/PowerUp"
        target="_blank"
      >
        <BsGithub className="text-gray-50" size={30} />
        oasrcode
      </a>
    </div>
  );
}
