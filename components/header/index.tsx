import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-end px-2 py-6 grid-col-2 text-[rgb(61, 61, 60)]">
      <p className="mr-2 text-sm text-[#3d3d3c]">Already have an account?</p>
      <div className="border rounded-md border-[#191919] inline-flex flex-col items-stretch gap-4 bg-transparent min-w-16 max-w-full">
        <a
          href="https://admin.typeform.com/login"
          className="py-[3px] px-2.5 text-xs text-center"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
