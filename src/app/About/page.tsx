import Image from "next/image"
import Link from "next/link"
import { IoMdDownload } from "react-icons/io";

export default function About(){
  return(
    <>
    
    <section className="text-gray-400 body-font">
<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
<img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/0000.jpg"/>
<div className="text-center lg:w-2/3 w-full">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Muhammad Muhsin Channa</h1>
  <p className="leading-relaxed mb-8">Extremely motivated to focused on new technologies Generative Ai Fullstuck Developing Graphic Designing in my passion fields of my career. I work on my framework constantly developing day by day my skillset. 
  Iam confident in my abilities & capablities well responsible on my fields, comeup with new visions milestones creativities ideas unstoppable hardworks become make my smoth  career on my passions.</p>
  <div className="flex justify-center">
  <Link rel="Linkedin" href="https://www.linkedin.com/in/muhammad-muhsin-863184202" > <button className="inline-flex font-semibold  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">LinkedIn</button></Link>
    <Link rel="PDF" href="/myresume.pdf"> <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"> <IoMdDownload className="text-2xl "/>My Resume </button></Link>
    
  </div>
</div>
</div>
</section>

    </>
  )
};
