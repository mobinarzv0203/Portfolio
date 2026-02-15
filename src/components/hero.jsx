const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#ECECEC]">
      <h1 className="text-3xl text-[#40513B] md:text-5xl lg:text-6xl font-bold mb-4">Hello, I'm Seyedeh Mobina Razavi</h1>
      <p className="text-[#E67E22] font-bold text-lg md:text-xl mb-6">Junior Frontend Developer | React & TailwindCSS</p>
      <a href="#contact" className="bg-[#BCD9A2] hover:bg-[#6D9E51] text-[#40513B] px-6 py-3 rounded-lg font-semibold transition">Get in Touch</a>
    </section>
  );
};

export default Hero;