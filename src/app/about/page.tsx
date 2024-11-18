import React from "react";

const About = () => {
  return (
    <>
      <main className="pt-24 px-4">
        <div className="absolute top-[90px] right-4 sm:right-20 bg-yellow-500 hover:bg-cyan-800 w-[140px] h-[50px] rounded-md flex justify-center items-center">
          <a
            href="https://milestone-1-static-resume-with-html-css-and-typescript.vercel.app/"
            className="text-sm sm:text-lg font-bold text-teal-900 hover:text-green-400"
          >
            View Resume
          </a>
        </div>

        
        <section id="edu-sec" className="flex justify-center">
          <div className="flex flex-col justify-center h-auto sm:h-[500px] w-full sm:w-3/5">
            <h1 className="text-2xl sm:text-3xl text-teal-800 mb-4 font-bold">
              Education
            </h1>
            <hr className="mb-5 bg-black h-[2px]" />
            <div className="mb-5">
              <h4 className="mb-2 font-bold">
                Diploma In Information Technology (SBTE)
              </h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <hr className="mb-5 bg-black h-[2px]" />
            <div className="mb-5">
              <h4 className="mb-2 font-bold">
                CBT Computer Operator (Information Technology)
              </h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                dolor sit amet consectetur adipisicing elit elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <hr className="mb-5 bg-black h-[2px]" />
            <div>
              <h4 className="mb-2 font-bold">
                Certified Cloud and Applied Generative AI Engineering (GIAIC)
              </h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
                sit amet consectetur adipisicing elit elit...
              </p>
            </div>
          </div>
        </section>

        <hr className="mx-4 sm:mx-16 bg-teal-800 h-[2px] my-12" />

       
        <section id="exp-sec" className="flex justify-center">
          <div className="flex flex-col justify-center h-auto sm:h-[500px] w-full sm:w-3/5">
            <h1 className="text-2xl sm:text-3xl text-teal-800 mb-4 font-bold">
              Experience
            </h1>
            <hr className="mb-5 bg-black h-[2px]" />
            <div className="mb-5">
              <h4 className="mb-2 font-bold">MS-Office (Word, Excel, PowerPoint)</h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <hr className="mb-5 bg-black h-[2px]" />
            <div className="mb-5">
              <h4 className="mb-2 font-bold">Web Designing/Development</h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
                consectetur adipisicing elit adipisicing elit...
              </p>
            </div>
            <hr className="mb-5 bg-black h-[2px]" />
            <div className="mb-5">
              <h4 className="mb-2 font-bold">Application Development</h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <hr className="mb-5 bg-black h-[2px]" />
            <div>
              <h4 className="mb-2 font-bold">DBMS (MySQL)</h4>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
                adipisicing elit consectetur adipisicing elit...
              </p>
            </div>
          </div>
        </section>

        <hr className="mx-4 sm:mx-16 bg-teal-800 h-[2px] my-12" />

        
        <section className="flex flex-col items-center mt-12">
          <h2 className="text-2xl sm:text-3xl text-teal-800 mb-6 font-bold">
            Programming Skills
          </h2>
          <hr className="mb-6 w-4/5 sm:w-3/5" />
          {[
            { skill: "HTML", width: "98%" },
            { skill: "CSS", width: "95%" },
            { skill: "JavaScript", width: "85%" },
            { skill: "TypeScript", width: "85%" },
            { skill: "Node.js", width: "80%" },
            { skill: "Next.js", width: "80%" },
            { skill: "Python", width: "75%" },
          ].map(({ skill, width }) => (
            <div key={skill} className="w-4/5 sm:w-3/5 mb-6">
              <div className="flex items-center">
                <h4 className="uppercase font-medium w-[80px] sm:w-[100px] text-sm sm:text-base">
                  {skill}
                </h4>
                <div className="w-full h-[10px] bg-sky-700">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: width }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <hr className="mx-4 sm:mx-16 bg-teal-800 h-[2px] my-12" />

        
        <section className="flex justify-center mt-12">
          <div className="flex flex-col items-center h-auto w-full sm:w-3/5 mb-12">
            <h2 className="text-2xl sm:text-4xl text-teal-800 mb-12 font-bold">
              CLI Based Projects
            </h2>
            <hr className="mb-6 w-4/5 sm:w-3/5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array(12)
                .fill("Calculator")
                .map((title, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 h-[150px] sm:h-[200px] hover:bg-cyan-800 hover:text-yellow-400 p-4 rounded-lg flex flex-col items-center text-center"
                  >
                    <p className="text-sm sm:text-xl font-bold">{title}</p>
                    <a
                      href="https://github.com/codeofkamlesh/First-CLI-calculator.git"
                      className="text-xs sm:text-lg text-black hover:text-green-400"
                    >
                      https://github.com/codeofkamlesh/First-CLI-calculator.git
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
