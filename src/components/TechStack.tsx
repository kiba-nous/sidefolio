import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "AI & Machine Learning",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Data Analysis",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
    },
    {
      title: "Quality Assurance",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    {
      title: "Content Moderation",
      src: "/images/logos/framer.webp",
      className: "h-10 w-10",
    },
    {
      title: "Community Building",
      src: "/images/logos/node.png",
      className: "h-10 w-12",
    },
    {
      title: "Prompt Engineering",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Ethical Tech",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Skills & Expertise
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <div key={item.src} className="mr-4 mb-4 flex flex-col items-center">
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain", item.className)}
            />
            <span className="text-xs text-secondary mt-2 text-center">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}