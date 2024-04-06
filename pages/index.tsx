import HeadTag from "@/components/head";
import LeftSection from "@/modules/left-section";
import RightSection from "@/modules/right-section";

export default function Home() {
  return (
    <>
      <HeadTag />
      <main className="block">
        <div className="flex h-screen overflow-hidden">
          <LeftSection />
          <RightSection />
        </div>
      </main>
    </>
  );
}
