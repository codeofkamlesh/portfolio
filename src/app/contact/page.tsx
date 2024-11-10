import React from 'react'

const contact = () => {
  return (
    <>
    <main className="pt-10">

        
<section className="bg-gray-200 opacity-90 py-16">
    <div className="max-w-3xl mx-auto text-left">
        <h1 className="text-5xl text-teal-800 text-center font-bold">Get In Touch</h1>
        <form action="" className="space-y-6">
            <h4 className="text-3xl font-medium "><u className="font-bold">Drop a Line</u></h4>
            <div>
                <label  className="block text-lg font-semibold">Your Name</label>
                <input type="text" id="name" className="w-[70%] py-2 px-4 bg-gray-200 opacity-90 border-b-2 border-black focus:outline-none focus:border-teal-500" required></input>
            </div>
            <div>
                <label  className="block text-lg font-semibold">Email</label>
                <input type="email" id="email" className="w-[70%] py-2 px-4 bg-gray-200 opacity-90 border-b-2 border-black focus:outline-none focus:border-teal-500" required></input>
            </div>
            <div>
                <label  className="block text-lg font-semibold">Subject</label>
                <input type="text" id="subject" className="w-[70%] py-2 px-4 bg-gray-200 opacity-90 border-b-2 border-black focus:outline-none focus:border-teal-500" required></input>
            </div>
            <div>
                <label  className="block text-lg font-semibold">Message</label>
                <textarea id="message" className="w-[70%] h-[50px] px-4 bg-gray-200 opacity-90 resize-none py-2 border-b-2 border-black focus:outline-none focus:border-teal-500" required></textarea>
            </div>
            <button type="submit" className="bg-yellow-500 text-teal-800 py-2 px-8 rounded-lg font-semibold hover:bg-teal-800 hover:text-green-400">Send Message</button>
        </form>
    </div>
</section>


<hr className=" mx-8 bg-teal-800 h-0.5"></hr>


<section className="bg-gray-200 opacity-90 py-16">
    <div className="max-w-3xl mx-auto text-center">
        <h4 className="text-4xl font-semibold text-teal-800">Contact Me</h4>
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center space-x-4">
                <i className="fa fa-phone text-2xl text-teal-800"></i>
                <span className="text-lg font-medium">+921234567890</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <i className="fa fa-envelope-o text-2xl text-teal-800"></i>
                <span className="text-lg font-medium">Kamlesh_Kumar174@yahoo.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <i className="fa fa-linkedin text-2xl text-teal-800"></i>
                <a href="https://pk.linkedin.com/in/kamlesh-kumar-a24894ba?trk=public_post_feed-actor-name" className="text-lg font-medium text-teal-800 hover:text-green-400">https://www.linkedin/kamlesh-kumar</a>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <i className="fa fa-github text-2xl text-teal-800"></i>
                <a href="https://github.com/codeofkamlesh" className="text-lg font-medium text-teal-800 hover:text-green-400">https://www.github.com/codeofkamlesh</a>
            </div>
        </div>
    </div>
</section>
</main>
    </>
  )
}

export default contact