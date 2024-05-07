import Link from "next/link"
export default function(){
    return(
        <>
        <div className="  bg-sky-950 text-white px-16 pt-3  ">
        <div className="flex justify-end">
        <ul className="flex  space-x-7   font-semibold py-3 ">
          <li><button className="hover:underline underline-offset-4 "><Link href="/"> Home </Link></button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/About">About </Link> </button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/projects">Projects </Link></button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/frameworks">Frameworks </Link> </button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/skillset">Skillset </Link></button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/Education">Education </Link></button></li>
          <li><button className="hover:underline underline-offset-4 "><Link href="/Contact">Contact </Link></button></li>
        </ul>
        
        <Link rel="Github" href="https://www.linkedin.com/in/muhammad-muhsin-863184202"><button className="font-semibold py-2 px-2 rounded-lg ml-7 text-blue-400 text-1xl cursor-pointer hover:border-yellow-400 border-x-2  hover:underline underline-offset-4  ">
          LinkedIn</button></Link>
        </div>
        
      </div>
        </>
    )
}