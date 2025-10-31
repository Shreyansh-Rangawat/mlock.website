import Image from "next/image";
import HomeSlider from "./_components/HomeSlider";
import HomeJourney from "./_components/HomeJourney";
import { FaCheckCircle, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="px-6 pt-8">
        <h1 className="mx-6 mt-10 text-5xl font-bold text-[#0a1904]">
          India's <span className="text-[#18ee18]">Smart</span>
          <br />
          Luggage Station
        </h1>
        <p className="mx-6 mt-3 max-w-2xl text-lg font-semibold text-[#0a1904]">
          Join the future of seamless travel with secure, convenient, and innovative luggage solutions.
        </p>
      </section>

      {/* Animated journey section */}
      <section className="mt-8">
        <HomeJourney />
      </section>

      {/* Steps + Phone slider */}
      <section className="body1 mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 px-6 md:grid-cols-2">
        {/* Left: steps/checklist */}
        <div>
          <div className="content text-[18px] font-semibold text-[#0a1904] space-y-2">
            <p className="flex items-start gap-2"><FaCheckCircle className="mt-[3px] text-[#18ee18]" aria-hidden /> Choose from minute-based, hourly, and daily plans.</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="mt-[3px] text-[#18ee18]" aria-hidden /> Safe & secure luggage storage—anytime, anywhere.</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="mt-[3px] text-[#18ee18]" aria-hidden /> Service available 16/7.</p>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <a href="#" className="rounded-md bg-[#18ee18] px-6 py-3 font-bold text-white hover:bg-[#4b4b4b]">Download The App</a>
            <a className="font-semibold text-[#0a1904] underline" href="/pricing">Check Pricing</a>
          </div>
        </div>

        {/* Right: phone slider */}
        <div className="flex justify-center md:justify-end">
          <HomeSlider />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#0a1904]">
          Be a part of the change – secure, store, and explore with Mlock!
        </h2>
        {/* Social icons row */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-6 text-[#18ee18]">
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={28} /></a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebook size={28} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><FaLinkedin size={28} /></a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80"><FaTwitter size={28} /></a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80"><FaYoutube size={28} /></a>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-6">
          {["home-img1.png","home-img2.png","home-img3.png","home-img4.png","home-img5.png","image3.png"].map((img)=>(
            <Image key={img} src={`/${img}`} alt={img} width={260} height={350} className="h-[220px] w-full rounded-md object-cover shadow" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-gray-100 p-6">
          <ul className="space-y-2 text-[#0a1904]">
            <li>✓ Choose from minute-based, hourly, and daily plans.</li>
            <li>✓ Safe & secure luggage storage—anytime, anywhere.</li>
            <li>✓ Service available 16/7.</li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <a href="#" className="rounded-md bg-[#18ee18] px-6 py-3 font-bold text-white hover:bg-[#4b4b4b]">Download The App</a>
            <a href="/pricing" className="font-semibold text-[#0a1904] underline">Check Pricing</a>
          </div>
        </div>
      </section>
    </main>
  );
}
