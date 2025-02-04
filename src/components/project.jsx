import Button from "./Button";

const projects = [
  {
    title: "MERN Blog Platform",
    description: "A full-stack blogging platform built with the MERN stack featuring authentication, CRUD operations, and rich text editing.",
    link: "https://example.com/mern-blog",
    image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "E-Commerce Store",
    description: "A full-fledged e-commerce web app with user authentication, product management, and payment gateway integration.",
    link: "https://example.com/mern-ecommerce",
    image: "https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Real-time Chat App",
    description: "A real-time chat application built with MERN, WebSockets, and Socket.io for seamless communication.",
    link: "https://example.com/mern-chat",
    image: "https://plus.unsplash.com/premium_photo-1681487807762-98fbe8a9db5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D",
  }
];

const Portfolio = () => {
  return (
    <section className="container mx-auto flex flex-col items-center w-full gap-5 portfolio">
      <h2 className="text-3xl font-semibold text-[var(--primary)]">My Projects</h2>
      <div className="portfolio-projects grid grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div className="w-full border flex flex-col gap-2 items-start p-4 border-gray-400 shadow-md  rounded-md" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <Button text={"View Project"}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
