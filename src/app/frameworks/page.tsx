
import React from "react"
import { TiHtml5 } from "react-icons/ti"
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { SiMicrosoftword } from "react-icons/si";

export default function Portfolio (){
    return (
        <>
       <section className="text-gray-400 body-font bg-sky-950">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">MY Framework</h1>
      <p className="lg:w-1/2 w-full leading-relaxed  text-justify mt-5">A framework is a foundational structure provided to simplify the development of software applications by supplying a standardized way to build and deploy them. It offers pre-written code, tools, libraries, and APIs to facilitate common tasks and promotes best practices and code reuse to accelerate the software development process.</p>
    </div>
    {/* first */}
    <div className="flex justify-center">
      {/* first */}
      <div className=" flex space-x-10  p-4">
        {/* HTML */}
        <div className="border border-yellow-500 border-opacity-100 w-full p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <TiHtml5 className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">HTML</h2>
          <p className="leading-relaxed text-base">HTML (Hypertext Markup Language)</p>
        </div>
        {/* CSS  */}
        <div className="border border-yellow-500 border-opacity-75 w-full  p-6 rounded-lg mb-4 ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <FaCss3Alt  className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">CSS</h2>
          <p className="leading-relaxed text-base">CSS (Cascade Style Sheet)</p>
        </div>
        {/*JavaScript */}
        <div className="border border-yellow-500 border-opacity-75 w-full  p-6 rounded-lg mb-4 ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <BiLogoTypescript  className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">JavaScript / Typescript</h2>
          <p className="leading-relaxed text-base">Typescript (Typescript Superset of JavaScript)</p>
        </div>
      </div>
    </div>
    {/* second */}
   <div className=" flex space-x-10  p-4" >
        
{/* Next.js */}
<div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <FaReact className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">Next.js / React</h2>
          <p className="leading-relaxed text-base">React & Next.js (Next.js is Facebook Library )</p>
        </div>
        {/* Tailwind Css */}
        <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <BiLogoTailwindCss  className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">Tailwind CSS</h2>
          <p className="leading-relaxed text-base">Tailwind  (Online Styline Framework)</p>
        </div>
        {/* Graphics */}
        <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <SiAdobeillustrator  className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">Adobe Illustrator</h2>
          <p className="leading-relaxed text-base">Adobe Illustrator (Graphics Designing one the best Framwork site)</p>
        </div>
          {/* Graphics */}
          <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <SiAdobephotoshop className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">Adobe Photoshop</h2>
          <p className="leading-relaxed text-base">Adobe Photoshop (For Portrait designing one of the best framework application )</p>
        </div>
        {/* Microsoft */}
        <div className="border border-yellow-500 border-opacity-75 p-6 rounded-lg  mb-4">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
          <SiMicrosoftword  className="text-4xl" />
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">Microsoft Office </h2>
          <p className="leading-relaxed text-base">Microsoft Office (Digital Literacy Framework)</p>
        </div>
        </div>
   </div>
</section>
        </>
        
    )
}