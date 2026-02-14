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
    <section id="contact" className="py-16 bg-white px-4">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-500">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0 space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;