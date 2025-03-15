import Image from "next/image";
import Link from "next/link";
import { Links } from "../data/navLinks";

export function Navbar() {
  return (
    <nav > 
    <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mb-10 pt-5">
    <div className="flex justify-center items-center gap-2 px-5 py-2 rounded-2xl"
  >
    <Image src="/logo1.png" alt="logo" width={50} height={50} />
        <span className="text-2xl font-semibold">BaseCore</span>
        </div>
        <ul className="flex gap-x-4 uppercase bg-[#838AA0]/10 backdrop-blur-md rounded-2xl py-3 px-4">
        {Links.map((link, index) => (
            <li key={index} className="px-3 py-2 border-1  border-transparent hover:border-[#2E7A] transform-border transition-colors duration-500 rounded-2xl"> 
              <Link href="#">{link}</Link>
            </li>
          ))}
        </ul>
        <Link href="#" className=" bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-2xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
          BUY BCE
        </Link>
        </div>
    </nav>
  );
}