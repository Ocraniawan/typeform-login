import React, { useState } from "react";

export default function Languages() {
  const [languages, setLanguages] = useState("English");
  const [displayList, setDisplayList] = useState(false);

  return (
    <div className="grid-row-1 pt-4 pl-6">
      <div className="relative">
        <div
          role="menu"
          className={`bg-white rounded-lg shadow-[rgba(25,25,25,0.12)_0px_2px_5px_0.5px] 
          py-2 absolute z-10 transform-origin-bottom-left will-change-transform will-change-opacity
          transition-all ease-in delay-150
          top-8 pointer-events-auto opacity-[1] scale-1
          ${displayList ? "visible" : "hidden"}`}
        >
          <a
            href="#"
            onClick={() => (
              setLanguages("English"), setDisplayList(!displayList)
            )}
            className={`flex appearance-none m-0 border-none w-full text-left cursor-pointer 
            min-h-8 outline-none text-decoration-none bg-white hover:bg-gray-200`}
          >
            <span className="text-[#191919] text-base font-extralight py-[6px] px-[23px] leading-[2.4]">
              English
            </span>
          </a>
          <a
            href="#"
            onClick={() => (
              setLanguages("Español"), setDisplayList(!displayList)
            )}
            className={`flex appearance-none m-0 border-none w-full text-left cursor-pointer 
            min-h-8 outline-none text-decoration-none bg-white hover:bg-gray-200`}
          >
            <span className="text-[#191919] text-base font-extralight py-[6px] px-[23px] leading-[2.4]">
              Español
            </span>
          </a>
        </div>

        {/* button */}
        <button
          className="bg-none border-none p-0 cursor-pointer outline-none flex items-center"
          onClick={() => setDisplayList(!displayList)}
        >
          <div className="mr-2">
            <svg
              height="17"
              viewBox="0 0 20 20"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                fill="#5E5E5E"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="text-sm leading-[1.5] font-normal text-[#5e5e5e]">
            {languages}
          </span>
          <div className="ml-1">
            <svg
              fill="none"
              height="5"
              viewBox="0 0 9 5"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                fill="#5E5E5E"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
