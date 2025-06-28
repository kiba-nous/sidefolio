"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Syazwani Naqibah - an innovation-driven professional passionate about quality assurance, data analysis, and ethical technology. Welcome to my corner of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          With over 4 years of experience at ByteDance (TikTok), I&apos;ve specialized in quality control processes for content moderation, ensuring alignment with community guidelines and policy standards. My journey has been about blending technical rigor with creative problem-solving and a deep understanding of human behavior.
        </Paragraph>

        <Paragraph className=" mt-4">
          My passion extends beyond traditional QA work. I&apos;m deeply interested in ethical AI, smart cities, and building technology that empowers communities. Currently, I&apos;m expanding my skills through AI Full-stack Development at Gamuda AI Academy, exploring how artificial intelligence can be used responsibly to solve real-world problems.
        </Paragraph>
        <Paragraph className=" mt-4">
          What drives me is the intersection of technology and humanity. Whether it&apos;s through my work in content moderation, my community building efforts with Persatuan Belia Harmoni, or founding the social movement Sawala focused on human rights and religion, I believe technology should serve people and communities.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my journey in quality assurance, my explorations in AI and ethical technology, and my passion for community building. Whether you&apos;re interested in discussing quality processes, exploring AI applications, or collaborating on community initiatives, there&apos;s something here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          I&apos;m always excited to connect with like-minded individuals who share a passion for using technology to make a positive impact. Let&apos;s explore how we can build a more ethical and inclusive digital future together.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this journey with you.
        </Paragraph>
      </div>
    </div>
  );
}