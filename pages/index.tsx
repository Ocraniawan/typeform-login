import { Inter } from "next/font/google";
import HeadTag from "@/components/head";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadTag />
      <main>
        <Header />
      </main>
    </>
  );
}
