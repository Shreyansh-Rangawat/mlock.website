import Link from "next/link";

export const metadata = {
  title: "Problem Videos | Mlock",
  description: "Problem for luggage storage in India - video clips",
};

const videos = [
  { label: "Bus.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759575077/Bus_uvqi8i.mp4" },
  { label: "zoo.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757057/zoo_yabwls.mp4" },
  { label: "Temple.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757102/Temple_vyoght.mp4" },
  { label: "Temp2.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757167/Temp2_pmwk2e.mp4" },
  { label: "TI.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757214/TI_n3pxvh.mp4" },
  { label: "local1.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757756/local1_x91nwc.mp4" },
  { label: "local2.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757799/local2_uyebgy.mp4" },
  { label: "phonex1.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759575858/phonex1_nvjq24.mp4" },
  { label: "Temp.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759757986/Temp_y255vq.mp4" },
  { label: "cC21.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759758532/cC21_tvcqay.mp4" },
  { label: "56.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759574706/56_ky9no3.mp4" },
  { label: "aTI.mp4", src: "https://res.cloudinary.com/daceqlb3m/video/upload/v1759574890/aTI_lornav.mp4" },
];

export default function ProblemVideoPage() {
  return (
    <main className="bg-white text-black">
      {/* Title */}
      <h2 className="mx-auto mb-8 mt-6 w-full max-w-5xl text-center text-[30px] font-bold hover:bg-[#18ee18] hover:text-white">
        Problem for luggage storage in india
      </h2>

      {/* Tabs */}
      <div className="relative bg-gray-100 p-4">
        <div className="mx-auto flex w-full max-w-5xl gap-10">
          <Link href="/problem/video" className="text-[20px] font-semibold">
            Video
          </Link>
          <Link href="/problem/image" className="text-[20px] font-medium hover:underline">
            Image
          </Link>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
        {videos.map((v) => (
          <figure key={v.label} className="space-y-2">
            <video controls className="h-auto w-full rounded-lg shadow-md">
              {/* {v.label} */}
              <source src={v.src} />
              Your browser does not support the video tag.
            </video>
            <figcaption className="break-words text-sm text-gray-600">{v.label}</figcaption>
          </figure>
        ))}
      </div>

      {/* Note about assets */}
      <p className="mx-auto max-w-5xl px-6 text-sm text-gray-600">
        Replace each highlighted URL with your actual cloud video link.
      </p>
    </main>
  );
}
