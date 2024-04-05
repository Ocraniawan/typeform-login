import { Inter } from "next/font/google";
import HeadTag from "@/components/head";
import Header from "@/components/header";
import SignUp from "@/modules/sign-up";
import Languages from "@/modules/languages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadTag />
      <main className="block">
        <div className="flex h-screen overflow-hidden">
          <section className=" hidden lg:block bg-[#191919] flex-1 overflow-hidden relative flex-col m-h-[90vh] w-full p-0">
            <div className="flex flex-col items-center h-full w-full justify-center">
              <h1 className="text-white text-4xl mb-[35px] w-[366px] font-normal leading-[44px] text-center">
                Sign up <br /> and come on in
              </h1>
              <div>
                <picture>
                  <img
                    alt="Typeform product sample"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    role="presentation"
                    src="/images/product-sample.webp"
                    className="w-full max-w-[366px]"
                  />
                </picture>
              </div>
              <p className="text-white text-sm leading-5 absolute bottom-6 mb-5">
                © Typeform
              </p>
            </div>
          </section>
          <section className="lg:ml-[-16px] grid overflow-auto h-full p-0 rounded-t-2xl rounded-l-2xl flex-1-1-10 relative min-h-[90vh] w-full">
            <div className="bg-white grid grid-cols-custom grid-rows-custom h-full w-full relative">
              <Languages />
              <Header />
              <SignUp />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
