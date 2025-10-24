export const metadata = {
  title: "Solution Video | Mlock",
  description: "Mlock solution video showcase",
};

export default function SolutionVideoPage() {
  const videoSrc =
    "https://www.dropbox.com/scl/fi/x6hhh8orr8ptrov5ldboe/Shreyansh-Final.mp4?rlkey=tiohqv32ycnc2ac34ah6glpne&st=a6f11ax1&raw=1";

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="relative h-full w-full max-w-[1600px] overflow-hidden">
        <video
          src={videoSrc}
          controls
          playsInline
          className="h-full w-full object-contain"
        />
      </div>
    </main>
  );
}
