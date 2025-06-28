import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Syazwani Naqibah",
  description:
    "Read articles by Syazwani Naqibah about quality assurance, ethical AI, community building, and technology that empowers people.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology and community</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I started my career</Highlight>, I&apos;ve been
        passionate about ethical technology and community building.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}