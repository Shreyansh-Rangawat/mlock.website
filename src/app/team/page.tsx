import Image from "next/image";

export const metadata = { title: "Team | Mlock" };

export default function TeamPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero banner */}
      <section
        className="h-[70vh] w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "linear-gradient(rgba(102,92,238,0.5), rgba(90,80,235,0.5)), url('/mlock.website/team-bg-image.png')" }}
      >
        <div className="px-8 pt-28">
          <h1 className="text-5xl font-bold">meet the minds<br />shaping the future of<br />smart storage</h1>
          <h2 className="mt-2 text-xl">Join Us Through Those Who Know Us Best.</h2>
        </div>
      </section>

      {/* Mentor */}
      <section className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-8 p-8 md:flex-row md:items-start">
        <div className="flex w-full flex-col items-center md:w-1/3 md:items-start">
          <Image src="/mlock.website/Anubhav mentor.png" alt="Anubhav Yadav" width={160} height={160} className="h-40 w-40 rounded-full border-4 object-cover shadow" />
          <h3 className="mt-4 text-2xl font-bold text-gray-800">Anubhav Yadav</h3>
          <p className="text-lg text-gray-600">Professor-Svvv</p>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-700 leading-relaxed">
            Throughout my journey, Anubhav sir has been a guiding force. From providing insights into industry trends to
            offering valuable advice on managing challenges, their mentorship has played a crucial role in shaping my understanding.
            Even today, I continue to learn from their wisdom and support, ensuring that I stay on the right path.
          </p>
        </div>
      </section>

      {/* Building Mlock Together */}
      <section className="mx-auto mt-16 max-w-6xl p-6">
        <h2 className="mb-6 text-center text-3xl font-bold">Building <span className="text-[#0a1904]">Mlock</span> Together</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Shreyansh */}
          <div className="grid grid-cols-[220px_1fr] items-start gap-6">
            <div className="h-[360px] w-[220px] rounded bg-[#b8b0b0] shadow border border-black">
              <Image src="/mlock.website/Shreyansh team.jpg" alt="Shreyansh" width={220} height={360} className="h-full w-full rounded object-cover" />
              <div className="text-center text-white">
                <h3>Shreyansh Jain</h3>
                <h4>Lead</h4>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Shreyansh – Founder & Strategy Head</h3>
              <p>
                Shreyansh is the driving force behind Mlock, turning an idea into a structured business model. He leads strategic
                planning, business operations, and partnerships, ensuring that Mlock grows with a clear vision and strong execution.
              </p>
            </div>
          </div>

          {/* Saif */}
          <div className="grid grid-cols-[1fr_220px] items-start gap-6">
            <div>
              <h3 className="text-xl font-bold">Saif – App Designer & Technical Team</h3>
              <p>
                Saif is responsible for designing Mlock’s digital experience. With a deep understanding of user behavior, he creates
                intuitive and user-friendly app interfaces, making the service accessible and efficient for customers.
              </p>
            </div>
            <div className="h-[360px] w-[220px] rounded bg-[#b8b0b0] shadow border border-black">
              <Image src="/mlock.website/Saif team.jpeg" alt="Saif" width={220} height={360} className="h-full w-full rounded object-cover" />
              <div className="text-center text-white">
                <h3 className="mt-5">Saif Ali Shahk</h3>
                <h4>Lead</h4>
              </div>
            </div>
          </div>

          {/* Jayesh */}
          <div className="grid grid-cols-[220px_1fr] items-start gap-6 md:col-span-2">
            <div className="h-[383px] w-[220px] rounded bg-[#b8b0b0] shadow border border-black">
              <Image src="/mlock.website/Jayesh team.JPG" alt="Jayesh" width={220} height={383} className="h-full w-full rounded object-cover" />
              <div className="text-center text-white">
                <h3>Jayesh Patel</h3>
                <h4>Lead</h4>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Jayesh – Product Prototype & Technical Team</h3>
              <p>
                Jayesh leads the development of Mlock’s physical infrastructure, ensuring that the luggage storage stations are secure,
                reliable, and efficient. His technical knowledge and hands-on approach bring the concept to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
