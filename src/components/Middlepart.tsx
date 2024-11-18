import React from "react";

const Middlepart = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section>
          <div
            className="bg-cover bg-center h-[500px] sm:h-[400px] flex items-center text-white"
            style={{
              backgroundImage: "url('/pic1.jpg')",
            }}
          >
            <div className="ml-6 sm:ml-12 lg:ml-20 mt-4 sm:mt-8 max-w-xs text-center sm:text-left">
              <p className="text-md sm:text-lg underline">it&apos;s me</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                KAMLESH <br />
                KUMAR
              </h1>
              <p className="text-md sm:text-xl mt-2 bg-white text-teal-900 font-bold rounded px-2 py-1 inline-block">
                FullStack Developer
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col md:flex-row justify-between items-center bg-gray-200 py-8 md:py-10 px-4 sm:px-8">
          <div className="w-full md:w-1/3 bg-transparent p-4 border-t-8 border-b-8 rounded-lg border-cyan-800 flex justify-center items-center mb-6 md:mb-0">
            <div
              className="w-40 sm:w-48 h-[280px] sm:h-[370px] rounded-lg border-b-4 border-black bg-cover"
              style={{
                backgroundImage: "url('/pic2.jpg')",
              }}
            ></div>
          </div>
          <div className="w-full md:max-w-lg text-black hover:border-t-8 border-b-8 hover:border-cyan-800 rounded-lg p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl underline text-teal-800 font-bold">
              About Myself
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              &quot;Welcome to my portfolio! I&apos;m a passionate and skilled
              full-stack developer with a deep understanding of both front-end
              and back-end technologies. My goal is to build seamless,
              responsive, and efficient applications that provide a great user
              experience while meeting business goals. I thrive on transforming
              ideas into functional, polished web solutions, leveraging my
              expertise in HTML, CSS, JavaScript, and various front-end &amp;
              back-end frameworks. Let&apos;s create something amazing
              together!&quot;
            </p>
          </div>
        </section>

        {/* Service Offers Section */}
        <section className="flex flex-col items-center py-8 sm:py-12 border-t border-b border-black">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 underline">
            Service Offers
          </h2>
          <p className="text-center mt-4 text-sm sm:text-base max-w-md lg:max-w-lg">
            &quot;I offer end-to-end web development services, from crafting
            intuitive front-end designs to building robust back-end solutions,
            to bring your vision to life will ok.&quot;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full px-4">
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <i className="fa fa-television text-3xl sm:text-5xl mb-4"></i>
              <p className="font-bold text-md sm:text-lg">Web Design</p>
              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                alias optio quae doloremque.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <i className="fa fa-mobile text-5xl mb-4"></i>
              <p className="font-bold text-md sm:text-lg">
                Application <br /> Development
              </p>
              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                alias optio quae doloremque.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <i className="fa fa-desktop text-3xl sm:text-5xl mb-4"></i>
              <p className="font-bold text-md sm:text-lg">Web Development</p>
              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                alias optio quae doloremque.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <i className="fa fa-database text-3xl sm:text-5xl mb-4"></i>
              <p className="font-bold text-md sm:text-lg">DBMS</p>
              <p className="mt-4 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                alias optio quae doloremque.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Middlepart;
