import Image from "next/image";
import Link from "next/link";
import { Links } from "../data/navLinks";

export function Navbar() {
  return (
    <nav > 
    <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto mb-10 pt-10 ">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <ul className="flex gap-x-4"> 
          {Links.map((link, index) => (
            <li key={index} className="px-3 py-2 border-1  border-transparent hover:border-[#2E727A] transform-border transition-colors duration-300 rounded-2xl"> 
              <Link href="#">{link}</Link>
            </li>
          ))}
        </ul>
        <Link href="#" className=" bg-linear-30 from-[#2E727A] to-[#2E7A] py-3 px-5 rounded-xl transform hover:bg-linear-30 hover:from-[#2E7A] hover:to-[#2E727A] duration-300 transition-colors"> 
          Get Started
        </Link>
        </div>
    </nav>
  );
}