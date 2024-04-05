import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const initOptions = [
  {
    label: "Get useful tips, inspiration, and offers via e-communication.",
    name: "marketing",
    link: false,
    yes: false,
    no: false,
  },
  {
    label: "Tailor Typeform to my needs based on my activity.",
    name: "taylor-typeform",
    link: true,
    yes: false,
    no: false,
  },
  {
    label:
      "Enrich my data with select third parties for more relevant content.",
    name: "third-party",
    link: true,
    yes: false,
    no: false,
  },
];

export default function SignUp() {
  const [inputTypePassword, setInputTypePassword] = useState("password");
  const [email, setEmail] = useState({
    value: "",
    valid: true,
  });
  const [password, setPassword] = useState({
    value: "",
    valid: true,
  });
  const [agreeTnC, setAgreeTnC] = useState({
    value: false,
    valid: true,
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const [listOptions, setListOptions] = useState(initOptions);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateEmail(email.value);
    validatePassword(password.value);
    validateTnC(agreeTnC.value);
    setIsSubmit(true);
  };

  const validateEmail = (values: string) => {
    const emailRule = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRule.test(values);
    setEmail({ ...email, value: values, valid: isValid });
  };

  const validatePassword = (values: string) => {
    const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/;
    const isValid = passwordRule.test(values);
    setPassword({ ...password, value: values, valid: isValid });
  };

  const validateTnC = (values: boolean) => {
    setAgreeTnC({ ...agreeTnC, valid: values, value: values });

    if (values) {
      setListOptions((prevOptions) =>
        prevOptions.map((element) => ({ ...element, yes: true, no: false }))
      );
    }
  };

  const handleOptions = (name: string, type: string) => {
    setListOptions((prevOptions) =>
      prevOptions.map((element) =>
        element.name === name
          ? { ...element, yes: type === "yes", no: type !== "yes" }
          : element
      )
    );
  };

  return (
    <div className="md:max-w-[542px] max-w-[256px] flex flex-col justify-center justify-self-center items-center grid-area-2">
      <div className="flex items-center justify-center h-[80px]">
        <a className="bg-transparent" href="#">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="22"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-[10.21px] overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="24"
                fill="none"
                className="sc-da9128ae-1 bOQHzD"
              >
                <path
                  fill="currentColor"
                  d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                ></path>
              </svg>
            </span>
          </div>
        </a>
      </div>
      <h2 className="text-center text-2xl font-[200] text-[#5e5e5e] mb-6 leading-9">
        Get better data with conversational forms, surveys, quizzes & more.
      </h2>
      <div className="md:max-w-[256px] w-full">
        <main className="block">
          <form onSubmit={handleSubmit}>
            {/* input */}
            <div>
              <div className="mb-[15px]">
                <span className="w-full h-10 inline-block border rounded-[3px] border-[#c2c2c1]">
                  <input
                    value={email.value}
                    onChange={(e) => validateEmail(e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)}
                    className=" w-full h-full m-0 py-[6px] px-2 rounded-[3px] text-base leading-4 border-none"
                    placeholder="Email"
                    type="text"
                  />
                </span>
                <p
                  className={`text-[#c13b2f] text-sm leading-[1.5] margin-0 pt-2 pb-[6px] pl-5 relative ${
                    email.valid ? "hidden" : "block"
                  }`}
                >
                  <span className="w-[14px] h-[14px] absolute left-0 top-2 bg-err-warning bg-center bg-repeat" />
                  {email.value.length === 0
                    ? "This field cannot be left blank"
                    : "Enter a valid email address"}
                </p>
              </div>
              <div className="mb-[15px]">
                <div className="flex w-full h-10 border rounded-[3px] border-[#c2c2c1]">
                  <input
                    value={password.value}
                    onChange={(e) => validatePassword(e.target.value)}
                    onBlur={(e) => validatePassword(e.target.value)}
                    className="w-full h-full m-0 py-[6px] px-2 rounded-[3px] text-base leading-4 border-none"
                    placeholder="Password"
                    type={inputTypePassword}
                  />
                  <button
                    className="px-2 text-[#D2D5C4]"
                    onClick={() =>
                      setInputTypePassword(
                        inputTypePassword === "password" ? "text" : "password"
                      )
                    }
                  >
                    {inputTypePassword === "password" ? (
                      <IoIosEye />
                    ) : (
                      <IoIosEyeOff />
                    )}
                  </button>
                </div>
                <p
                  className={`text-[#c13b2f] text-sm leading-[1.5] margin-0 pt-2 pb-[6px] pl-5 relative ${
                    password.valid ? "hidden" : "block"
                  }`}
                >
                  <span className="w-[14px] h-[14px] absolute left-0 top-2 bg-err-warning bg-center bg-repeat" />
                  {password.value.length === 0
                    ? "This field cannot be left blank"
                    : "Use 8 or more characters with a mix of letters, numbers and symbols"}
                </p>
              </div>
            </div>
            <div>
              {/* check */}
              <div className="flex text-sm mb-[15px] relative text-[#191919]">
                <input
                  type="checkbox"
                  checked={agreeTnC.value}
                  onChange={(e) => validateTnC(e.target.checked)}
                  className="border h-[20px] w-[20px] absolute appearance-none rounded-[3px]
                    shadow-[#1b1b1a]
                   checked:bg-black bg-check-white-svg
                    focus:ring-1 focus:ring-offset-2 focus:ring-white
                    transition-colors duration-150 ease-in-out"
                />
                <span className=" pl-[30px]">
                  {"I agree to Typeform’s "}
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.typeform.com/terms-service/"
                    className="underline"
                  >
                    Terms of Service
                  </a>
                  {", "}
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.typeform.com/privacy-policy/"
                    className="underline"
                  >
                    Privacy Policy
                  </a>
                  {" and "}
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.typeform.com/privacy-policy/"
                    className="underline"
                  >
                    Data Processing Agreement
                  </a>
                  .
                </span>
              </div>
              <p
                className={`text-[#c13b2f] text-sm leading-[1.5] margin-0 pt-2 pb-[6px] pl-5 relative ${
                  agreeTnC.valid ? "hidden" : "block"
                }`}
              >
                <span className="w-[14px] h-[14px] absolute left-0 top-2 bg-err-warning bg-center bg-repeat" />
                {"Please accept the terms and conditions to finish the signup"}
              </p>
              {/* option list */}
              <div className="pt-2 pb-[15px] pl-[30px]">
                {/* options */}
                <div
                  className="flex items-center cursor-pointer justify-between h-8"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  <p className="text-sm">See Options</p>
                  <span
                    className={`transition-all delay-200 ease-out ${
                      !openOptions ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"
                      ></path>
                    </svg>
                  </span>
                </div>
                {/* list */}
                <div
                  className={`overflow-hidden transition-[max-height] delay-200 ease-in ${
                    !openOptions ? "max-h-0" : "max-h-[360px]"
                  } `}
                >
                  <div className="overflow-auto">
                    {listOptions.map(
                      (
                        list: {
                          label: string;
                          name: string;
                          link: boolean;
                          yes: boolean;
                          no: boolean;
                        },
                        index: any
                      ) => (
                        <div key={index} className="">
                          <div className="text-sm mb-2">
                            <label className="leading-5 text-[#191919]">
                              {list.label}
                              {list.link && (
                                <a href="#" className=" text-[#5e5e5e] text-sm">
                                  {" "}
                                  See Privacy Policy
                                </a>
                              )}
                            </label>
                          </div>
                          <div className="flex items-center mb-3">
                            <div>
                              <label className="items-center cursor-pointer inline-flex">
                                <input
                                  id="marketing-yes"
                                  name={list.name}
                                  checked={list.yes}
                                  onClick={() =>
                                    handleOptions(list.name, "yes")
                                  }
                                  type="radio"
                                  className="bg-white border border-[#c2c2c1] checked:border-[#191919] checked:border-[6px] w-5 h-5 cursor-pointer rounded-[50%] outline-0 appearance-none"
                                />
                                <div className="ml-3">
                                  <p className="text-sm mr-4 pt-[2px]">Yes</p>
                                </div>
                              </label>
                            </div>
                            <div>
                              <label className="items-center cursor-pointer inline-flex">
                                <input
                                  id="marketing-no"
                                  name={list.name}
                                  checked={list.no}
                                  onClick={() => handleOptions(list.name, "no")}
                                  type="radio"
                                  className="bg-white border border-[#c2c2c1] checked:border-[#191919] checked:border-[6px] w-5 h-5 cursor-pointer rounded-[50%] outline-0 appearance-none"
                                />
                                <div className="ml-3">
                                  <p className="text-sm mr-4 pt-[2px]">No</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    <p className="text-[#7f7f7f] text-sm ">
                      You can update your preferences in your Profile at any
                      time
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Create my free account"
                className="bg-[#191919] rounded-[3px] border-none text-white cursor-pointer text-[16px] h-10 p-0 w-full appearance-none"
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
