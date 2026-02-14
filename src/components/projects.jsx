const projects = [
  { title: "Portfolio Website", desc: "Simple portfolio using React & Tailwind.", link: "#" },
  { title: "Task Manager App", desc: "Interactive ToDo App with modern JS.", link: "#" },
  { title: "E-commerce Site", desc: "Basic shopping cart using React state.", link: "#" },
];
const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-green-500">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;