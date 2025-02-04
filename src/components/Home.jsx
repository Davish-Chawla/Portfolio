export default function Home() {
    return (
      <div
        className="flex flex-col lg:flex-row min-h-screen items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/1920x1080/?coding,technology")',
        }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center space-y-6 text-center lg:text-left bg-gray-900 bg-opacity-50 text-white rounded-lg shadow-lg mx-4 lg:mx-8">
          <p className="text-lg text-gray-300">Hello, I'm</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">Davish Chawla</h1>
          <h2 className="text-xl md:text-3xl font-semibold text-pink-400">
            Full Stack Developer
          </h2>
          <a href="/contact">
          <button className="px-6 py-3 text-sm md:text-base text-white cursor-pointer bg-gradient-to-r from-blue-500 to-green-600 rounded-lg shadow-md hover:from-green-600 hover:to-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300">
            Hire Me
          </button>
          </a>
        </div>
  
        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="w-11/12 sm:w-3/4 h-64 sm:h-96 lg:h-3/4">
            <img
              src="/image/ai-generated-8876480_960_720.png"
              alt="Developer working on code"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  