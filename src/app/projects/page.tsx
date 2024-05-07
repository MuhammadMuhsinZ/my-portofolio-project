import Link from "next/link"
export default function Profile(){
    return(
        <>
       <section className="text-gray-400 body-font bg-sky-950">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Node & CLi Projects J.s / Typescript</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90 text-justify ">Node.js projects with TypeScript, especially those featuring CLI functionality, offer numerous benefits including type safety, enhanced developer experience, code maintainability, support for modern JavaScript features, cross-platform compatibility, and scalability. These advantages make them indispensable tools in modern software development workflows.
      </p>
    </div>
    
    {/* Calculator */}
    <div className="flex flex-wrap -m-4 justify-center">
      <div className=" bg-gray-800 bg-opacity-40 xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Calculator App</h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Console Base Calculator</h2>
          <p className="leading-relaxed text-base">Node Project-01 Console Base Calculator. Inqurier Labirery & Modules. Input prompt asking digits to digits & simple Math sums methods.</p>
        </div>
        <br />
        <br />
        <br />
        <Link rel="Github" href="https://github.com/MuhammadMuhsinZ/Calculator-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3">GitHub</button>
        </div></Link>
      </div>
      {/* Todo App */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Todo App </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Todo App </h2>
          <p className="leading-relaxed text-base">Todo app CLI project, you can create a versatile and user-friendly tool for managing tasks from the command line. 
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div>
      </div>
      {/* Number Guessing Game */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Number Guessing Game </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Number Guessing Game </h2>
          <p className="leading-relaxed text-base">CLI Number Guessing Game built entirely in TypeScript! This engaging command-line application not only serves as a fun and interactive game but also as a showcase of modern software development techniques using TypeScript. 
          
          </p>
        </div>
        <Link rel="Github" href="https://github.com/MuhammadMuhsinZ/Number-Guessing-Game">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* ATM  */}
      <div className=" bg-gray-800 bg-opacity-40  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">ATM</h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">ATM</h2>
          <p className="leading-relaxed text-base text-justify"> This simulator will emulate the basic functions of an ATM (Automated Teller Machine), providing an interactive platform for users to check their balance, deposit funds, withdraw money, and view previous transactions. The project serves as an excellent example of object-oriented programming in TypeScript
           and demonstrates handling user inputs and managing state in a CLI application.
          </p>
        </div>
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/ATM">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Todo List */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Todo list </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Todo list </h2>
          <p className="leading-relaxed text-justify text-base">This project is perfect for those looking to understand the basics of TypeScript while also getting a hands-on experience in building and managing a command-line interface (CLI) application. Our Todo List will allow users to add, remove, and list tasks directly from the terminal,
           providing a fast and efficient way to manage daily tasks. 
          </p>
        </div>
        <br />
        <br />
        
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Todo-list-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Currency Converter */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Currency Converter </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Currency Converter</h2>
          <p className="leading-relaxed text-base text-justify "> CLI-based currency converter using TypeScript. This application will offer a quick and efficient way to convert amounts between various currencies directly from the command line. 
          <br></br>
          <br></br>
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Currency-Converter">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Word Counter */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Word Counter </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Word Counter</h2>
          <p className="leading-relaxed text-base text-justify">CLI-based word counter using TypeScript. This simple but useful tool will allow users to input text either through the command line or by loading text files, and it will then calculate 
          and display the number of words contained within. 
          <br></br>
          <br></br>
          </p>
        </div>
        <br />
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Word-Counter-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div>
        </Link>
      </div>
      {/* School Management System */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">School Management System</h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">School Management System</h2>
          <p className="leading-relaxed text-base text-justify ">CLI-based school management system using TypeScript. This application will serve as an educational tool to demonstrate complex data handling, user interactions, and the management of relationships between different data entities such as students, teachers, and courses within a school setting. 
          </p>
        </div>
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Student-Managment-System">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Adventure Game */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Adventure Game </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Adventure Game</h2>
          <p className="leading-relaxed text-base text-justify"> an interactive command-line adventure game using TypeScript. This tutorial will guide you through developing a text-based game that allows players to explore different scenarios, make decisions, and interact with a dynamic story-driven environment.
          </p>
        </div>
        <br />
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Adventure-Game-Console-Based-Game-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Quiz */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Quiz</h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Quiz</h2>
          <p className="leading-relaxed text-base text-justify">CLI-based quiz application using TypeScript in today’s tutorial. This project is perfect for those who wish to learn how to manage user input, process data, and maintain application state in a dynamic command-line interface environment.
          </p>
        </div>
        <br />
        <br />
        
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/Quiz-Node-Project-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* Countdown Timer */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Countdown Timer</h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">Countdown Timer</h2>
          <p className="leading-relaxed text-base text-justify">CLI countdown timer using TypeScript. This project is designed to introduce the basics of real-time event handling in a command-line interface using Node.js and TypeScript. The timer will allow users to set a specific duration, and it will then count down to zero, notifying the user when the time has elapsed.
          </p>
        </div>
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/CountDown-Watch-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* OOP */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">OOP Chat App </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">OOP Chat App</h2>
          <p className="leading-relaxed text-base text-justify"> (OOP) driven CLI chat application using TypeScript in this informative tutorial. This project is an excellent opportunity to understand how to apply OOP principles in TypeScript to build a scalable and maintainable real-time chat application that runs in the command-line interface. 
          </p>
        </div>
        <br />
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/OOP_Console_Application">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* OOP My Bank */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">OOP My Bank App </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">OOP My Bank App</h2>
          <p className="leading-relaxed text-base text-justify">CLI-based bank application using TypeScript with a focus on Object-Oriented Programming (OOP) principles. The project, "My Bank App," offers an opportunity to practice encapsulating business logic, managing application state, and handling user input in a structured and maintainable manner. Users will be able to perform typical banking operations such as checking balances, depositing funds, withdrawing money, and viewing transaction histories. 
          </p>
        </div>
        <br />
        <br />
        <br />
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/My-Bank-App-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* 45 Exerises */}
      <div className=" bg-gray-800 bg-opacity-40 ml-4  mt-4  xl:w-1/4 md:w-1/2 p-4">
        <div className=" p-6 rounded-lg">
          <img className="h-50 rounded w-full object-cover object-center mb-6" src="/mylogo.png" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">45-Exercises </h3>
          <h2 className="text-lg text-white font-medium title-font mb-1">45-Exercises of Typescript</h2>
          <p className="leading-relaxed text-base text-justify">Dive into the world of TypeScript with this comprehensive set of 45 exercises designed to enhance your skills through practical, CLI-based projects. Each exercise focuses on a different aspect of TypeScript, challenging you to apply your knowledge in various scenarios ranging from basic syntax and operations to advanced concepts like generics, decorators, and asynchronous programming. Whether you're a beginner aiming to grasp the fundamentals or an experienced developer seeking to polish your TypeScript proficiency, this guide offers valuable hands-on experience. 
          </p>
        </div>
        <Link rel="" href="https://github.com/MuhammadMuhsinZ/45-Typescript-Assignments-Exercises-">
        <div className="flex border justify-center mx-10 rounded-lg hover:cursor-pointer ">
        <img src="/github.png" alt="github" height={50} width={50} />
        <button className="font-serif font-bold text-white pl-3 ">GitHub</button>
        </div></Link>
      </div>
      {/* End div */}
       </div>
       </div>
</section>
        </>
    )
}