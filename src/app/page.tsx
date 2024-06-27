import Link from "next/link";
import "./globals.css";
import { ButtonsCard } from "./ui/components/contact-button";
import { FlipWordsDemo } from "./ui/components/flip-words";
import { LampDemo } from "./ui/components/lamp";
import { TextRevealCardPreview } from "./ui/components/text-reveal-card";
import { FloatingNav } from "./ui/components/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AnimatedPinDemo } from "./ui/components/3d-pin";

export default function Home() {
  const navItems = [
    {
      name: "CaseStudy",
      link: "/case-study",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },

    {
      name: "Services",
      link: "/services",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 text-white">
        <div className="text-left">
          <span className="block text-2xl font-bold">You & I</span>
          <span className="block text-2xl font-bold">Studio</span>
        </div>
        <FloatingNav navItems={navItems} />
        {/* <div className="absolute left-1/2 transform -translate-x-1/2">
          <ButtonsCard />
        </div> */}
      </header>
      <main className="flex-grow pt-20">
        <section className="flex flex-col justify-center items-center min-h-screen">
          <FlipWordsDemo />
          <div className="mt-4 flex space-x-4 text-white">
            <Link href="./case-studies" className="hover:underline">
              Case Studies
            </Link>
            <Link href="#services" className="hover:underline">
              Services
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <LampDemo />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 w-full max-w-5xl">
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center min-h-screen">
          <TextRevealCardPreview />
        </section>
        <footer className="flex justify-center items-center h-20 text-white">
          Contact Us
        </footer>
      </main>
    </div>
  );
}
