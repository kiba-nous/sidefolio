import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Syazwani</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an innovation-driven professional with{" "}
        <Highlight>4+ years of experience</Highlight> in quality assurance, data analysis, and ethical tech
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I blend technical rigor with creative problem-solving and a deep understanding of human behavior. I&apos;m looking for opportunities in{" "}
        <Highlight>product design, ethical AI, smart cities</Highlight>, and building tech that empowers communities.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}