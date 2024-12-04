import { Search } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-7xl mx-auto px-4 items-center py-6">
      <a href="">
        <Image
          src="/logo.png"
          width={436}
          height={212}
          alt="logo"
          className="max-w-28 w-full"
        />
      </a>
      <ul className="flex gap-12 font-semibold tracking-widest items-center">
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">RETAIL</a>
        </li>
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">SME</a>
        </li>
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">CARPORATE</a>
        </li>
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">ABOUT US</a>
        </li>
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">COVID 19</a>
        </li>
        <li className="hover:text-primary_pink transition-all duration-300 hover:text-lg">
          <a href="">CAMPGAINS</a>
        </li>
      </ul>
      <div className="flex gap-10 items-center justify-center">
        <Search className="text-primary_pink cursor-pointer" />
        <Button
          text="iSERVICE"
          className="bg-primary_pink text-white hover:bg-white hover:text-primary_pink"
        />
      </div>
    </nav>
  );
};
export default Navbar;
