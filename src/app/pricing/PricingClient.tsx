"use client";
import { useState } from "react";

export default function PricingClient() {
  const [tab, setTab] = useState<"indore" | "ujjain">("indore");

  const cards = {
    indore: [
      { title: "Small Size Locker", desc: "[36:28:38 cm] / 3kg", rate: "₹0.30/min", examples: ["30 min : ₹ 9 Rs", "45 min : ₹ 13.5 Rs", "1 hr : ₹ 18 Rs"] },
      { title: "Medium Size Locker", desc: "[55:36:35 cm] / 8kg", rate: "₹0.50/min", examples: ["30 min : ₹ 15 Rs", "45 min : ₹ 22.5 Rs", "1 hr : ₹ 30 Rs"] },
      { title: "Large Size Locker", desc: "[77:55:60 cm] / 13kg", rate: "₹0.80/min", examples: ["30 min : ₹ 24 Rs", "45 min : ₹ 36 Rs", "1 hr : ₹ 48 Rs"] },
    ],
    ujjain: [
      { title: "Small Size Locker", desc: "[36:28:38 cm] / 3kg", rate: "₹0.30/min", examples: ["30 min : ₹ 9 Rs", "45 min : ₹ 13.5 Rs", "1 hr : ₹ 18 Rs"] },
      { title: "Medium Size Locker", desc: "[55:36:35 cm] / 8kg", rate: "₹0.50/min", examples: ["30 min : ₹ 15 Rs", "45 min : ₹ 22.5 Rs", "1 hr : ₹ 30 Rs"] },
      { title: "Large Size Locker", desc: "[77:55:60 cm] / 13kg", rate: "₹0.80/min", examples: ["30 min : ₹ 24 Rs", "45 min : ₹ 36 Rs", "1 hr : ₹ 48 Rs"] },
    ],
  } as const;

  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 pt-16 md:grid-cols-2">
        <div>
          <p className="text-4xl font-bold text-[#0a1904]">Let’s Unlock</p>
          <p className="text-2xl font-bold text-[#18ee18]">Security | Convenience | Freedom</p>
          <p className="mt-3 text-[18px] text-[#0a1904]">
            We have a plan for every traveler—whether you're exploring a new city, commuting daily, or simply need a secure place to store your luggage.
          </p>
          <p className="mt-2 font-semibold text-[#0a1904]">Whatever your journey, we’re here to keep your belongings safe, 16/7.</p>
        </div>
        <div className="rounded-lg">
          <video className="h-[300px] w-full rounded-lg" autoPlay muted loop controls>
            <source src="/mlock.website/check video final.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto mb-12 mt-10 max-w-5xl px-6">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setTab("indore")}
            className={`tab rounded px-4 py-2 ${tab === "indore" ? "bg-[#18ee18] text-white" : "bg-gray-300 text-black"}`}
          >
            Indore
          </button>
          <button
            onClick={() => setTab("ujjain")}
            className={`tab rounded px-4 py-2 ${tab === "ujjain" ? "bg-[#18ee18] text-white" : "bg-gray-300 text-black"}`}
          >
            Ujjain
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards[tab].map((c) => (
            <article key={c.title} className="card rounded-lg bg-white p-5 text-center shadow">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.desc}</p>
              <p className="mt-1 font-semibold text-[#18ee18]">{c.rate}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {c.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
