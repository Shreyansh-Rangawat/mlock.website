"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <Link href="/" className="shrink-0">
        <Image
          className="ml-10 mr-20 h-[60px] w-[135px] object-contain"
          src="/mlock.website/Web-logo-img-final1.jpg"
          width={135}
          height={60}
          alt="Mlock Logo"
          priority
        />
      </Link>

      <nav className="hidden md:flex space-x-7 text-black">
        <Link href="/" className="menu-item-hover">
          Home
        </Link>
        <Link href="/about" className="menu-item-hover">
          About Us
        </Link>
        <Link href="/safety" className="menu-item-hover">
          Safety
        </Link>
        <Link href="/team" className="menu-item-hover">
          Team
        </Link>
        <Link href="/blog" className="menu-item-hover">
          Blog
        </Link>
        <Link href="/pricing" className="menu-item-hover">
          Pricing
        </Link>
        <Link href="/contact" className="menu-item-hover">
          Contact
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          className="text-3xl"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </div>

      <Link
        href="#"
        className="hidden md:block bg-[#18ee18] text-white font-bold py-3 px-7 rounded-md hover:bg-[#4b4b4b]"
      >
        Download The App
      </Link>

      {/* Mobile menu */}
      {open && (
        <nav className="absolute left-0 top-[72px] z-50 w-full bg-black text-white p-5 md:hidden">
          <Link href="/" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/safety" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Safety
          </Link>
          <Link href="/team" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Team
          </Link>
          <Link href="/blog" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/pricing" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="block p-2 menu-item-hover" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="#"
            className="block p-3 mt-2 bg-[#18ee18] text-white rounded"
            onClick={() => setOpen(false)}
          >
            Download The App
          </Link>
        </nav>
      )}
    </header>
  );
}
