export default function Home() {
    return (
      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen items-center bg-cover bg-center bg-no-repeat px-6 lg:px-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <p className="text-2xl font-semibold text-gray-700">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Davish Chawla</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--accent)]">Full Stack Developer</h2>
        <a href="/contact">
          <button className="px-6 py-3 text-white bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-lg shadow-lg hover:from-[var(--primary)] hover:to-[var(--accent)] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Hire Me
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <div className="w-11/12 sm:w-3/4 sm:h-96">
          <img
            src="src\assets\man-sysadmine-computer-programmer-working-computer-b.png"
            alt="Developer working on code"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    );
  }
  