import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Syazwani Naqibah",
  description:
    "Get in touch with Syazwani Naqibah for collaborations on AI projects, quality assurance consulting, or community building initiatives.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Whether you&apos;re interested in collaborating on AI projects, discussing ethical technology, or exploring community-building initiatives, I&apos;d love to connect! Reach out to me over email or fill up this contact form.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}