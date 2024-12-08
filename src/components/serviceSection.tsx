"use client";
import web from "@/app/assets/web.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ServicesProps {
  id: number;
  name: string;
}
[];

const services: ServicesProps[] = [
  {
    id: 0o1,
    name: "Software Development",
  },
  {
    id: 0o2,
    name: "Mobile App Development",
  },
  {
    id: 0o3,
    name: "UI/UX Design",
  },

  {
    id: 0o4,
    name: "Website Development",
  },
];

const ServiceSection = () => {
  const selected = usePathname();
  return (
    <div className="h-screen">
      <div
        className="flex flex-col items-center gap-5
      "
      >
        <div className="flex items-center justify-center">
          <div className="h-6 w-1 rounded bg-[#0BC1C0] mr-3"></div>
          <Image src={web} alt="web"></Image>
          <h3 className="ml-5 text-xl font-light">Services</h3>
        </div>
        <p className="w-[880px] text-xl font-light text-[#818181]">
          Our expert Software solutions are designed to improve your online
          presence, enhance user experience, and help your business grow.
        </p>
      </div>

      <div className="flex items-center gap-6 ">
        <div className="h-[288px] w-[12px] bg-[#D9D9D9] rounded-full ml-10">
          {" "}
          <div className="h-[72px] w-[12px] bg-[#0BC1C0] rounded-full"></div>
        </div>
        <div className="flex flex-col gap-7 items-center">
          {services.map((service, index) => (
            <h1 key={index} className="text-2xl text-[#0BC1C0]">
              <span className="bg-[#0BC1C0] rounded-xl mr-6 px-4 py-2 text-xl text-white">
                {service.id}
              </span>
              {service.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
