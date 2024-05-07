import Image from "next/image";
import "./globals.css"
import About from "./About/page"
import Project from "./projects/page"
import Framework from "./frameworks/page"
import Skillset from "./skillset/page"
import Hero from "./Hero/page"
import Contact from "./Contact/page"
import Education from "./Education/page"
export default function Home() {
  return (
    <> 
    <div className=" text-white">
    <Hero/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300">About Myself </button>
    </div>
    <About/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300">Projects </button>
    </div>
    <Project/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300">Framework </button>
    </div>
    <Framework/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300">Skillset</button>
    </div>
    <Skillset/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300">Education</button>
    </div>
    <Education/>
    <div className="flex justify-center w-full">
    <button className="text-center font-mono text-5xl font-semibold pt-16 text-yellow-300"></button>
    </div>
    <Contact/>
    </div>

    </>
  );
}
