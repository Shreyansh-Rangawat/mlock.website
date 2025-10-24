import Image from "next/image";

export const metadata = {
  title: "Safety | Mlock",
  description: "How Mlock ensures luggage safety and our current limitations",
};

export default function SafetyPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="mt-8">
        <div
          className="mx-auto flex h-[80vh] w-screen max-w-none items-center justify-center bg-cover bg-center px-5 text-center md:h-[90vh]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,67,49,0.5), rgba(107,67,49,0.5)), url('/mlock.website/storyimg2.png')",
          }}
        >
          <h1 className="text-balance text-3xl font-bold text-white md:text-5xl">
            Your Luggage, Our Responsibility
            <br />
            Smart, Secure & Hassle-Free Storage
          </h1>
        </div>
      </section>

      {/* Why Mlock is Secure */}
      <section className="mx-auto max-w-[1000px] px-5 py-16 text-center">
        <h2 className="text-[25px] font-bold text-[#0a1904]">Why Mlock is Secure?</h2>
        <p className="mt-2 text-[1.2rem] text-[#888]">
          We ensure top-tier security with advanced technology and high-quality materials.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: "🔒", title: "Best Quality Lockers", desc: "Durable, damage-resistant, and designed for long-term safety." },
            { icon: "📱", title: "Phone-Based Access", desc: "Seamless check-in and checkout through our mobile app." },
            { icon: "🛠", title: "Sensor Detection", desc: "Real-time luggage monitoring with smart sensor technology." },
            { icon: "🚨", title: "Emergency Alarm", desc: "Instant alerts in case of strong impacts or tampering attempts." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-lg bg-[#f9f9f9] p-5 shadow-md transition-transform hover:-translate-y-1"
            >
              <span className="mb-2 block text-2xl">{f.icon}</span>
              <h3 className="text-[1.3rem] font-semibold">{f.title}</h3>
              <p className="mt-1 text-[#444]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Ensure Safety */}
      <section className="mx-auto max-w-[1100px] px-5 py-16 text-center">
        <h2 className="text-[25px] font-bold text-[#0a1904]">How We Ensure Safety?</h2>
        <p className="mt-2 text-[1.2rem] text-[#666]">
          Our advanced security measures guarantee the safety of your luggage at every step.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "locker icon.png", title: "Step 1: Book a Locker", desc: "Secure your locker effortlessly via the Mlock app." },
            { src: "phone icon.png", title: "Step 2: Phone-Based Check-in", desc: "Forget keys! Access your locker with just your phone." },
            { src: "sensor icon.png", title: "Step 3: Sensor Detection", desc: "Smart sensors ensure your luggage is securely stored." },
            { src: "location icon.png", title: "Step 4: Real-time Monitoring", desc: "Track your luggage status anytime via the Mlock app." },
            { src: "security icon.png", title: "Step 5: Security Alert", desc: "Instant alerts in case of any unauthorized access or impact." },
            { src: "unlock icon.png", title: "Step 6: Unlock & Retrieve", desc: "Use the app to unlock your locker and retrieve luggage securely." },
          ].map((card) => (
            <div
              key={card.title}
              className="justify-items-center rounded-xl bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              <Image
                src={`/mlock.website/${card.src}`}
                alt={card.title}
                width={80}
                height={80}
                className="mx-auto mb-3 h-20 w-20 object-contain"
              />
              <h3 className="text-[1.3rem] font-semibold text-[#333]">{card.title}</h3>
              <p className="mt-1 text-[#777]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Limitations & Disclaimer */}
      <section className="mx-auto my-12 max-w-[800px] rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-[25px] font-bold text-[#0a1904]">🚧 Limitations & Honest Disclaimer</h2>

        <div className="mt-5 space-y-4">
          {[
            {
              icon: "🧪",
              text: (
                <>
                  <span className="font-bold text-[#0a1904]">⚠ Trial Phase :</span> Our system is still improving, so
                  <strong> 100% security is not guaranteed </strong> yet.
                </>
              ),
            },
            {
              icon: "🛡️",
              text: (
                <>
                  <span className="font-bold text-[#0a1904]">⚠ No Insurance (Yet) :</span> Currently, we <strong>do not
                  provide compensation for theft</strong>, but we are working on it.
                </>
              ),
            },
            {
              icon: "⏰",
              text: (
                <>
                  <span className="font-bold text-[#0a1904]">⚠ Limited Service Hours :</span> We operate <strong>16 hours
                  daily</strong>, not 24/7.
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-md border-l-4 border-[#0a1904] bg-[#f0f0f0] p-3"
            >
              <span className="min-w-8 text-center text-xl">{item.icon}</span>
              <p className="m-0 text-[17px] text-[#0a1904]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-md border-l-4 border-[#ff9800] bg-[#fff8e1] p-4 text-center">
          <p className="m-0 text-[16px] font-medium text-[#444]">
            🚀 <span className="font-bold text-[#ff9800]">Exciting Updates Ahead : </span>
            We are working on <strong>insurance coverage, 24/7 service, and more features!</strong> Stay tuned for updates! 📢
          </p>
        </div>
      </section>
    </main>
  );
}
