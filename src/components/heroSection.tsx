import growth from "@/app/assets/growth.svg";
import underline from "@/app/assets/underline.svg";
import troffy from "@/app/assets/troffy.svg";
import review from "@/app/assets/review.svg";
import phoneCall from "@/app/assets/phoneCall.svg";
import rating from "@/app/assets/rating.svg";
import youtube from "@/app/assets/youtube.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <div className="gap-5 flex justify-between items-center  pl-16 pr-6 h-[620px] bg-gradient-to-r from-[#0bc1c111] via-white/20 to-[#0bc1c111]">
      <div className="w-[771px]">
        <h1 className="text-[60px] font-semibold text-[#818181] relative leading-tight">
          <span className="text-black">Revolutionizing</span> Businesses with
          Tailored Software{" "}
          <Image
            src={underline}
            alt="underline"
            className="absolute -bottom-4"
          />
          <Image src={growth} alt="growth" className="inline" />
          <span className="text-[#0BC1C0]"> Solutions</span>
        </h1>
        <p className="text-lg text-[#818181] mt-7">
          <span className="text-black">
            Innovation is at the heart of what we do.{" "}
          </span>
          From startups to enterprises, we deliver digital products that
          transform
          <span className="text-black">
            {" "}
            operate and engage with their customers.
          </span>
        </p>
        <div className="flex items-center  gap-7">
          <div className="flex gap-1 mt-8">
            <Button className="bg-[#020202] text-[20px] rounded-full border-2 border-[#19BCFE] font-semibold w-[56px] h-[56px]">
              <Image src={phoneCall} alt="phoneCall" />
            </Button>
            <Button className="bg-[#020202] text-[20px] rounded-full border-2 border-[#19BCFE]  font-semibold  px-8 py-6">
              Schedule a call
            </Button>
          </div>
          <div className="flex items-center gap-3 mt-8 ">
            <Button className="bg-white rounded-xl w-[56px] h-[56px] border border-gray-400 p-0">
              <Image src={youtube} alt="youtube" className="w-8" />
            </Button>
            <div className="text-sm text-[#818181] w-[137px] ">
              Watch{" "}
              <span className="text-black">
                How <br /> We Deliver
              </span>{" "}
              Success!
            </div>
          </div>
        </div>
      </div>
      <div className="w-[397px] relative h-[296px] font-semibold text-xl text-[#818181]">
        <div className="bg-[#0202020D] z-40   px-4 py-5 w-[244px] h-[160px]  rounded-xl">
          <div className="text-[#0BC1C0] text-[40px] flex items-center gap-4 mb-4">
            <Image src={troffy} alt="troffy" /> 100+
          </div>
          <div>
            Satisfied <span className="text-black">Clients</span> Worldwide.
          </div>
        </div>
        <div className="bg-[#0202020D] z-30 border absolute top-32 left-36  p-4  w-[256px] h-[172px] rounded-xl">
          <div className=" space-y-4">
            Explore Our{" "}
            <span className="text-black">Certified Achievements</span> in
            Software Excellence.
            <div className="flex items-center gap-3  ">
              <Image src={review} alt="review" />
              <Image src={rating} alt="rating" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
