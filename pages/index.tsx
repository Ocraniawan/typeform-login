import { Inter } from "next/font/google";
import HeadTag from "@/components/head";
import Header from "@/components/header";
import SignUp from "@/modules/sign-up";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadTag />
      <main className="block">
        <div className="flex">
          <section className="grid overflow-auto h-full p-0 rounded-[16px 0px 0px 16px] flex-1-1-10 relative min-h-[90vh] w-full">
            <div className="bg-white grid grid-cols-custom grid-rows-custom h-screen w-full relative">
              <div className="grid-row-1 p-[16px 0 0 24px] grid-area-3-1"></div>
              <Header />
              <SignUp />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
