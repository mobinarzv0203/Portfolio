const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">John Doe</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-200 transition">Home</a>
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <a href="#projects" className="hover:text-gray-200 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;