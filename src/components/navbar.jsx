const Navbar = () => {
  return (
    <nav className="bg-[#40513B] text-[#E5D9B6] p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl  font-bold">Seyedeh Mobina Razavi</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-[#ECECEC] transition">Home</a>
          <a href="#about" className="hover:text-[#ECECEC] transition">About</a>
          <a href="#projects" className="hover:text-[#ECECEC] transition">Projects</a>
          <a href="#contact" className="hover:text-[#ECECEC] transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;