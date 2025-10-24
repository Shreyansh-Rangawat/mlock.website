"use client";
import { useState } from "react";


export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/mlockofficial@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert("Oops! Something went wrong, please try again.");
      }
    } catch {
      alert("Network error! Please check your internet connection.");
    }
  }

  return (
    <main className="bg-white text-black">
      <section className="mx-auto max-w-5xl p-6">
        <h1 className="mb-2 text-5xl font-bold">Contact Us</h1>
        <p className="mb-6 text-gray-700">Your Queries, Our Priority - We're Here to Help Anytime!</p>
        {success && (
          <div className="mb-4 rounded-lg bg-[#d4edda] p-4 text-[#155724]">✅ Your message has been sent successfully!</div>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-3">
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Email subject */}
            <input type="hidden" name="_subject" value="New message from Mlock website" />

            <input name="name" placeholder="Your Name" required className="w-full rounded border border-gray-300 p-3" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full rounded border border-gray-300 p-3" />
            <input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full rounded border border-gray-300 p-3" />
            <input name="location" placeholder="Your Area/Location" required className="w-full rounded border border-gray-300 p-3" />
            <textarea name="message" placeholder="Your Message" required className="h-32 w-full rounded border border-gray-300 p-3" />
            <button type="submit" className="btn-download rounded-md px-6 py-3 font-bold text-white hover:bg-[#4b4b4b]">
              Send Message
            </button>
          </form>

          <div className="space-y-2 text-[16px]">
            <p>
              <strong>Email:</strong> <a href="https://formsubmit.co/el/vefeku" className="underline">Support mlockofficial.com</a>
            </p>
            <p>
              <strong>Phone:</strong> +91 8989494417 / 9826080407
            </p>
            <p>
              <strong>Office Address:</strong> Mlock Pvt Ltd, 39 Uday Nagar, Bhicholi Hapsi Road, Indore - 452001
            </p>
            <p>
              <strong>Working Hours:</strong> Monday to Saturday, 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
