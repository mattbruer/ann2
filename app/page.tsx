import Image from "next/image";
import styles from "./home.module.css";
import { Playfair_Display } from "next/font/google";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
