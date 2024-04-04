import { Inter } from "next/font/google";
import HeadTag from "@/components/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadTag />
      <main></main>
    </>
  );
}
