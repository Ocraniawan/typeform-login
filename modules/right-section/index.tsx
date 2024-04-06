import React from "react";
import Languages from "./languages";
import SignUp from "./sign-up";
import Header from "./header";

export default function RightSection() {
  return (
    <section className="lg:ml-[-16px] grid overflow-auto h-full p-0 rounded-t-2xl rounded-l-2xl flex-1-1-10 relative min-h-[90vh] w-full">
      <div className="bg-white grid grid-cols-custom grid-rows-custom h-full w-full relative">
        <Languages />
        <Header />
        <SignUp />
      </div>
    </section>
  );
}
