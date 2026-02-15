import {useState} from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (mock)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-[#40513B] px-4">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#E5D9B6]">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0 space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="text-[#E67E22] w-full p-3 border border-[#ECECEC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="text-[#E67E22] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="text-[#E67E22] w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]" required />
          <button type="submit" className="bg-[#BCD9A2] hover:bg-[#6D9E51] text-[#40513B] hover:text-[#E5D9B6] px-6 py-3 rounded-lg font-semibold transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;