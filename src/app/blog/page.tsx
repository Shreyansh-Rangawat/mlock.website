import Image from "next/image";

export const metadata = { title: "Blog | Mlock" };

export default function BlogPage() {
  const posts = [
    { img: "survey-image1.jpeg", title: "The Problem", text: "Many travelers face security risks while storing luggage at public places. Theft and mismanagement are common issues." },
    { img: "survey-image2.jpeg", title: "Survey Insights", text: "Based on our survey, 80% of people expressed concerns over luggage safety. Mlock is here to change that." },
    { img: "solution-image3.jpeg", title: "Mlock's Solution", text: "We provide secure, automated luggage storage that ensures your belongings remain safe while you travel worry-free." },
    { img: "user-feedback.jpeg", title: "User Feedback", text: "Our users love the convenience and security of Mlock. Hear what they have to say about their experience." },
    { img: "future-image.jpg", title: "Future Innovations", text: "We are constantly working to enhance our technology and expand our services to more locations." },
    { img: "expansion-plan.jpg", title: "Expansion Plans", text: "Mlock is growing! Stay tuned for our upcoming launches in new cities and locations." },
  ];

  return (
    <main className="bg-white text-black">
      <section className="blog-section mx-auto max-w-6xl p-6">
        <h1 className="mb-6 text-center text-3xl font-bold">Our Blog</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-lg p-4 shadow">
              <Image src={`/mlock.website/${p.img}`} alt={p.title} width={600} height={400} className="h-auto w-full rounded" />
              <h2 className="mt-3 text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-[16px]">{p.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
