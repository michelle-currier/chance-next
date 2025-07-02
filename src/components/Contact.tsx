"use client";
import { luckiestGuy } from "@/app/utils/fonts";
import React from "react";
import { useState } from "react";

// Define the shape of form data
interface FormData {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ fullname: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      console.error("Error:", error);
    }
  };

  // Handle input changes with proper event typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the state for the correct field
    });
  };

  return (
    <div className="px-20 py-10" id="contact">
      <section className="max-w-3xl mx-auto py-6">
        <h1
          className={` ${luckiestGuy} text-3xl font-bold text-center text-teal-600 mb-4`}
        >
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="fullname" className="text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <div className="flex flex-row justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-pink-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-start"
            >
              Send Message
            </button>
            <p className="mt-2">
              Or, send us an email directly at{" "}
              <a
                href="mailto:chanceinhellsnoballs@gmail.com"
                className="text-teal-500 underline"
              >
                chanceinhellsnoballs@gmail.com
              </a>
            </p>
          </div>
        </form>

        {status && (
          <p
            className={`mt-6 text-md text-center ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </section>
    </div>
  );
}
