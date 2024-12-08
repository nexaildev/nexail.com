"use client";
import stripe from "@/app/assets/stripe.svg";
import reddit from "@/app/assets/reddit.svg";
import spotify from "@/app/assets/spotify.svg";
import google from "@/app/assets/google.svg";
import pinterest from "@/app/assets/pinterest.svg";
import Image from "next/image";

const socials = [
  { name: "stripe", src: stripe },
  { name: "reddit", src: reddit },
  { name: "spotify", src: spotify },
  { name: "google", src: google },
  { name: "pinterest", src: pinterest },
  { name: "stripe", src: stripe },
];

const ClientSection = () => {
  return (
    <div className="flex items-center gap-24 h-[147px] overflow-x-hidden px-14 ">
      {socials.map((item) => (
        <Image src={item.src} alt={item.name}></Image>
      ))}
    </div>
  );
};

export default ClientSection;
