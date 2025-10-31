import Link from "next/link";

export const metadata = {
  title: "Problem Images | Mlock",
  description: "Problem for luggage storage in India - image gallery",
};

export default function ProblemImagePage() {
  return (
    <main className="bg-white text-black">
      {/* Title */}
      <h2 className="mx-auto mb-8 mt-6 w-full max-w-5xl text-center text-[30px] font-bold hover:bg-[#18ee18] hover:text-white">
        Problem for luggage storage in india
      </h2>

      {/* Tabs */}
      <div className="relative bg-gray-100 p-4">
        <div className="mx-auto flex w-full max-w-5xl gap-10">
          <Link href="/problem/video" className="text-[20px] font-medium hover:underline">
            Video
          </Link>
          <Link href="/problem/image" className="text-[20px] font-semibold">
            Image
          </Link>
        </div>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
        {[
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "A.jpeg",
          "B.jpeg",
          "C.jpeg",
          "D.jpeg",
          "E.jpeg",
          "F.jpeg",
          "G.jpeg",
          "H.jpeg",
          "I.jpeg",
          "7.jpg",
        ].map((src) => (
          <img
            key={src}
            src={`/${src}`}
            alt={src}
            className="h-auto w-full rounded-md object-cover shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}
