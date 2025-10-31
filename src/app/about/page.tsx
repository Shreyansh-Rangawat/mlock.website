import Image from "next/image";

export const metadata = {
  title: "About | Mlock",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
        <div className="md:w-1/2">
          <h1 className="mb-2 text-4xl font-bold text-gray-700">India's Trusted</h1>
          <h2 className="mb-6 text-5xl font-bold">Luggage Station Service</h2>
          <p className="mb-6 text-[18px] text-gray-700">
            Travel light, stress-free, and with confidence! At Mlock, we understand that carrying luggage while exploring
            a city, attending meetings, or waiting for check-in can be a hassle. We offer a smart, secure, and seamless
            luggage storage solution—so you can focus on what truly matters.
          </p>
          <h3 className="text-2xl font-bold">
            Why Choose <span className="text-black">M</span>
            <span className="text-[#18ee18]">lock</span>?
          </h3>
          <ul className="mt-3 space-y-2 text-[18px] text-gray-800">
            <li>📍 Easily Accessible Locations – transit hubs, shopping centers, and tourist hotspots.</li>
            <li>📲 Smart App Integration – find, book, and access your locker with a few taps.</li>
            <li>⏳ Flexible Storage Plans – short-term to long-term.</li>
            <li>🌍 Trusted by Travelers & Locals – hassle-free storage for everyone.</li>
          </ul>
          <p className="mt-4 text-[18px] text-gray-800">
            🚀 Download the <span className="text-black">M</span>
            <span className="text-[#18ee18]">lock</span> App today and experience the future of luggage storage!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image src="/f2.png" width={420} height={320} alt="Mlock icon" className="rounded-xl shadow" />
        </div>
      </section>

      {/* Story section */}
      <section className="p-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center text-3xl font-bold">Champions of our success story</h2>
          <div className="space-y-4 text-[18px] text-gray-800">
            <p>
              One day, while returning from a holiday, I reached the station and was handed someone else's bag to deliver.
              The person was late, and I had no choice but to carry the bag with me. That’s when the thought struck me:
              <strong> “What if there was a way to securely store our bags at the station?”</strong>
            </p>
            <p>
              Later, at 56 Market, I saw shoppers struggling with their bags. The same thing happened at a mall when my
              friends and I had to carry our bags inside the movie theater. Instead of enjoying the movie, we worried about
              our belongings.
            </p>
            <p>💡 <strong>That’s when the idea of Mlock was born!</strong></p>
            <p>
              A simple, secure, and convenient luggage storage solution—helping travelers, shoppers, and everyone in need of
              hassle-free storage.
            </p>
            <p>
              📌 <strong>
                Today, <span className="text-black">M</span>
                <span className="text-[#18ee18]">lock</span> is making travel & shopping stress-free!
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto my-10 flex max-w-[1000px] flex-col items-center gap-6 rounded-lg bg-gray-50 p-6 shadow md:flex-row md:items-start">
        <div className="md:w-3/5 text-left">
          <h2 className="mb-3 ml-0 text-3xl font-bold text-black">Our Mission</h2>
          <p className="text-[18px] text-gray-700">
            Our mission is to make secure and smart luggage storage accessible across India, ensuring no one has to carry
            bags everywhere. We envision a nationwide network of storage stations, making travel, shopping, and daily life
            hassle-free for everyone. <span className="font-bold text-black">“A bag-free India, where everyone moves freely!”</span>
          </p>
        </div>
        <div className="md:w-2/5">
          <Image src="/green.png" width={500} height={320} alt="Mission" className="rounded-md shadow" />
        </div>
      </section>

      {/* Our Story banner */}
      <section
        className="flex h-[60vh] w-full items-center bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(100,98,98,0.5), rgba(114,112,110,0.5)), url('/storyimg.png')" }}
      >
        <h2 className="ml-12 text-5xl font-bold text-white">Our Story</h2>
      </section>
    </main>
  );
}
