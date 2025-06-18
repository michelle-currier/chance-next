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
    <>
      <section className="max-w-3xl mx-auto p-6">
        <h1
          className={` ${luckiestGuy} text-3xl font-bold text-center text-teal-600 mb-8`}
        >
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          //action="/sendemail"
        >
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              placeholder="Please enter your name"
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Please enter your phone number"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
            />
            <label>Your Message</label>

            <textarea
              placeholder="Your message here..."
              name="message"
              id="message"
            ></textarea>
            <button
              type="submit"
              className="mt-8 bg-gradient-to-r from-pink-500 to-pink-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center"
            >
              Send
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
