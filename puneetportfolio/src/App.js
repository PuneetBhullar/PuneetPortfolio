import React from 'react';
import './App.css';



export default function App() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
  <div className="flex flex-wrap py-2 place-content-center">
  <div className="w-full px-4">
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-500 rounded">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
            Puneet Bhullar
          </a>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
              <a
                className={
                  "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-sky-50 bg-blueGray-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-white bg-blueGray-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-sky-50 bg-blueGray-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
<div className="relative flex flex-col min-w-0 break-words">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex flex-wrap justify-center">
                  <div className="mt-8">
                    <img src="profile.png" alt="Puneet Bhullar" className="shadow-lg rounded-full w-60 h-60 align-middle border-none" />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                    <a className='text-white font-semibold text-3xl'>Hi, my name is Puneet Bhullar.</a>
                </div>
                <div className="flex flex-wrap justify-center mt-6 ">
                    <a className='text-white text-center text-lg max-w-5xl'>I am a University of Waterloo Computer Engineering student passionate about leveraging software to improve society. 
                    I have a keen interest in disruptive technologies, notably blockchain and its power to revolutionize industries. 
                    My interest in this subject has led me to write articles about disruptive technologies. I’m currently learning new software languages and frameworks. Over the years of pursuing curiosity, I have developed skills in C++, C, Java, Python, Javascript, React and the Angular framework. 
                    If you have any questions or would like to learn more about me, please reach out.</a>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                <a href="www.linkedin.com/in/puneetbhullar">
                  <img src="icons8-linkedin-48.png"/>
                </a>
                </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="flex flex-wrap justify-center mt-4">
                    <img src="resume.png"></img>
                </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}