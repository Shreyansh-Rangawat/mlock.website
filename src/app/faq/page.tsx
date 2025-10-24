"use client";
import { useState } from "react";

export const metadata = { title: "FAQ | Mlock" };

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "What is Mlock?", a: "Mlock is a smart luggage storage solution designed for seamless, secure, and convenient travel experiences." },
  { q: "Where Can I Find Mlock Station?", a: "At major airports, train stations, and popular tourist spots. Use the app to find the nearest station." },
  { q: "How Secure is the Storage?", a: "24/7 surveillance, secure lockers, and advanced tracking systems keep your luggage safe." },
  { q: "How Can I Book a Storage?", a: "Book via our website or app: choose a station, select your time, and confirm the booking." },
  { q: "What Payment Methods are Accepted?", a: "Credit/debit cards and mobile payments such as UPI, Paytm, and Google Pay." },
  { q: "Can I Track My Booking History?", a: "Yes, check the 'My Bookings' section in the app." },
  { q: "Does The App Send Notifications?", a: "Yes, real-time notifications for confirmations, updates, and reminders." },
  { q: "Can I Cancel My Booking?", a: "Yes, cancellations are allowed before the scheduled time." },
  { q: "Will my payment be refunded on cancellation?", a: "Refunds depend on the cancellation policy. Please review the policy for details." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <main className="bg-white text-black">
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-6 md:grid-cols-2">
        {/* Left */}
        <div>
          <div className="text-5xl font-extrabold leading-tight">FAQ</div>
          <div className="mt-4 w-max rounded-lg bg-[#0a1904] p-6 text-white">
            <p className="text-4xl font-bold">Frequently</p>
            <p className="text-4xl font-bold">Ask</p>
            <p className="text-4xl font-bold">Question?</p>
          </div>
        </div>
        {/* Right */}
        <div>
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b py-3">
              <button
                className="flex w-full items-center justify-between text-left text-[18px] font-medium"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.q}</span>
                <span className="text-xl">{open === idx ? "−" : "+"}</span>
              </button>
              {open === idx && <p className="mt-2 text-[16px] text-gray-700">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
