
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/Contact";
import Portfolio from "./components/project";
import Footer from "./components/Footer";

function LandingPage() {
  return (
    <div className="flex flex-col gap-10">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)]" style={{ minHeight: '100vh', padding: 0 }}>
      <Router>
        <nav className="relative bg-[var(--secondary)] text-[var(--text)] shadow-lg">
          <ul className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4">
            {/* Branding (left-aligned) */}
            <div className="flex-1 text-2xl font-bold">
              <Link to="/" className="hover:text-gray-200 transition-colors duration-300">
                Davish Chawla
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
              <Link to="/" className="hover:text-gray-200 transition-colors duration-300">Home</Link>
              <Link to="/projects" className="hover:text-gray-200 transition-colors duration-300">Projects</Link>
              <Link to="/about" className="hover:text-gray-200 transition-colors duration-300">About</Link>
              <Link to="/contact" className="hover:text-gray-200 transition-colors duration-300">Contact</Link>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Action Button */}
            <div className="hidden md:flex">
            <a href="/image/Davish-Chawla-CV.pdf"  download>
              <button className="px-6 py-2 text-white cursor-pointer bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300">
                Download CV
              </button>
              </a>
            </div>
          </ul>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
