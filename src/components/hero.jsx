const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Hello, I'm John Doe</h1>
      <p className="text-lg md:text-xl mb-6">Junior Frontend Developer | React & TailwindCSS</p>
      <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">Get in Touch</a>
    </section>
  );
};

export default Hero;