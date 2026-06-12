import { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiX } from "react-icons/hi";
import { services } from "../constants/services"
import { ContactUsTemplateInfo } from "../constants/email"

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        ContactUsTemplateInfo.YOUR_SERVICE_ID,
        ContactUsTemplateInfo.YOUR_TEMPLATE_ID,
        formData,
        ContactUsTemplateInfo.YOUR_PUBLIC_KEY
      );

      alert("Thank you for connectiing with JAISANSARIYA & ASSOCIATES.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        title: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to send request");
    }
  };

  if (!isOpen) return null;

  return (
    <div className=" inset-0 bg-[#145886]/90 z-[9999] flex items-center justify-center px-4 py-2 border">

      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-3xl"
        >
          <HiX />
        </button>

        <h2 className="text-3xl font-semibold text-[#145886] mb-6">
          Get Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl placeholder:text-[#9CA3AF]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl placeholder:text-[#9CA3AF]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl placeholder:text-[#9CA3AF]"
          />

          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-xl text-[#9CA3AF]"
          >
             <option value="" className="text-[#9CA3AF]">
                  Select Service
              </option>

              {services.map((service) => (
                  <option key={service.title} value={service.title} className="text-[#9CA3AF]">
                  {service.title}
                  </option>
              ))}
          </select>

          <textarea
            rows="4"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl placeholder:text-[#9CA3AF]"
          />

          <button
            type="submit"
            className="w-full bg-[#F37920] text-white py-4 rounded-xl hover:opacity-90"
          >
            Submit Request
          </button>

        </form>

      </div>

    </div>
  );
}