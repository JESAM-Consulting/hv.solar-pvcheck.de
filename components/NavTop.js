import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { useRouter } from "next/router";
import loog from "../public/images/logo.png"
const UpadateLogo ='/public/images/logo.png'


export default function NavTop() {
  const { step, setStep } = useContext(AppContext);

  const router = useRouter();
  const [progress, setProgress] = useState("w-0");
  useEffect(() => {
    if (step < 7) {
      setProgress("w-[33%]");
    } else if (step == 8) {
      setProgress("w-[66%]");
    } else {
      setProgress("w-[100%]");
    }
  }, [step]);

  return (
    <div>
      <div className="flex lg:px-10 md:px-6 px-6 lg:py-1 bg-white items-center md:min-h-[8vh]">
        
          <div className="hover:cursor-pointer lg:ml-10  py-3 flex items-center">
              <img className="lg:w-52 md:w-72 w-24" style={{width:"60px",}}  src="/images/logo.png"  />
              
              <h5 className="font-bold text-base  relative " style={{whiteSpace:"nowrap" ,  paddingLeft:"15px"}}>Tim Testverkäufer</h5>
         
      </div>
        <div
          className={`hover:cursor-pointer lg:ml-10  py-3 ${
            router.asPath != "/" ? " flex" : " hidden"
          }`}
          onClick={() => {
            router.push("/");
          }}>
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512">
            <path
              fill="#FF9B3C"
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
        </div>
        <div className="md:flex items-center w-full justify-evenly hidden">
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step <= 10 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                1
              </div>
            </div>
            <span className="font-roboto font-bold ">Bedarf</span>
          </div>
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step >= 9 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                2
              </div>
            </div>
            <span className="font-roboto font-bold ">Anfrage</span>
          </div>
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step == 10 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                3
              </div>
            </div>
            <span className="font-roboto font-bold "> Prüfung</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.35rem] bg-gradient-to-b from-[#c4c4c4] to-[#E5E5E5]">
        <div
          className={`bg-green-1 h-[0.35rem] ${progress} md:block hidden`}></div>
      </div>
    </div>
  );
}
