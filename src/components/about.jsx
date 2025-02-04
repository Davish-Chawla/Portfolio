export default function About() {
    return (
        <div >
        {/* <div class="flex justify-center  w-full lg:w-1/2"> */}
        <div class="text-2xl text-center text-blue-950">ABOUT ME</div>
      {/* </div> */}
<div class="lg:flex flex-col lg:flex-row justify-between items-center">
    
 
  <div class="py-2 lg:flex w-full">
    <div data-aos="fade-right" data-aos-delay="150" data-aos-duration="1500" class="lg:w-1/2 mt-4 aos-init aos-animate">
      <img alt="img" class="md:move max-w-full h-auto" src="/image/about_me1.png"/>
    </div>
    <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500" class="lg:w-1/2 aos-init aos-animate">
      <p class="text-2xl lg:text-4xl p-2 text-center lg:mt-4">Hi There! I'm Davish Chawla</p>
      <p class="p-6">
        I am a Full Stack Developer, a versatile and skilled professional with expertise in building dynamic, scalable, and high-performing web applications using the MERN stack.
      </p>
      <div class="p-2">
        <table class="table-auto w-full text-gray-800">
          <tbody>
            <tr class="m-4">
              <td class="py-2 px-4">Birthday</td>
              <td class="py-2 px-4">: Feb 12, 2006</td>
            </tr>
            <tr class="m-4">
              <td class="py-2 px-4">Phone</td>
              <td class="py-2 px-4">: +91 8283049762</td>
            </tr>
            <tr class="m-4">
              <td class="py-2 px-4">Email</td>
              <td class="py-2 px-4">: davishchawla99@gmail.com</td>
            </tr>
            <tr class="m-4">
              <td class="py-2 px-4">From</td>
              <td class="py-2 px-4">: Rajpura,Punjab</td>
            </tr>
            <tr class="m-4">
              <td class="py-2 px-4">Language</td>
              <td class="py-2 px-4">: English, Punjabi, Hindi</td>
            </tr>
            <tr class="m-4">
              <td class="py-2 px-4">Freelance</td>
              <td class="py-2 px-4">: Available</td>
            </tr>
          </tbody>
        </table>
        <a href="/image/Davish-Chawla-CV.pdf" download>
  <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
    Download CV
  </button>
</a>

          </div>
        {/* </a> */}
      </div>
    </div>
  </div>
</div>
// </div>
    )
}