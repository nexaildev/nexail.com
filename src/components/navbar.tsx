import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import { Button } from "./ui/button";
import rocket from "@/app/assets/rocket.svg";
interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Why us",
    href: "/why us",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
const Navbar = () => {
  return (
    <div className="bg-[#0BC1C01A] flex  justify-between items-center px-16   h-[104px]">
      <div className="flex w-[60%]  justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={170} height={40} />{" "}
          </Link>
        </div>
        <ul className="flex gap-10">
          {links.map((link, index) => (
            <div key={index}>
              <li>
                <Link
                  href={link.href}
                  className="text-black text-lg font-normal "
                >
                  {link.name}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <Button className="bg-[#020202] rounded-full w-[56px] h-[56px] border-2 border-[#19BCFE]">
          <Image src={rocket} alt="rocket" />
        </Button>
        <Button className="bg-[#020202] text-[20px] rounded-full border-2 border-[#19BCFE] font-semibold px-8 py-7">
          Start a Work
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
