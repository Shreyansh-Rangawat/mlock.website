"use client";
import { useEffect, useRef } from "react";
import { MdTrain } from "react-icons/md";
import { FaBoxOpen, FaUserTie, FaBagShopping, FaCity } from "react-icons/fa6";

export default function HomeJourney() {
  const userRef = useRef<HTMLDivElement>(null);
  const bagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout1: any, timeout2: any, timeout3: any, timeout4: any, loop: any;

    const start = () => {
      const user = userRef.current;
      const bag = bagRef.current;
      if (!user || !bag) return;

      // reset
      user.style.transition = "transform 3s ease-in-out";
      bag.style.transition = "transform 3s ease-in-out";
      user.style.transform = "translateX(0)";
      bag.style.transform = "translateX(0)";
      bag.style.display = "block";

      // Step 1: move both to station
      timeout1 = setTimeout(() => {
        user.style.transform = "translateX(18vw)";
        bag.style.transform = "translateX(18vw)";
      }, 200);

      // Step 2: user goes to destination, bag stays at station (hidden)
      timeout2 = setTimeout(() => {
        bag.style.display = "none";
        user.style.transform = "translateX(45vw)";
      }, 3200);

      // Step 3: user returns to station, bag reappears at station
      timeout3 = setTimeout(() => {
        user.style.transform = "translateX(18vw)";
        setTimeout(() => {
          bag.style.display = "block";
          bag.style.transform = "translateX(18vw)";
        }, 1200);
      }, 7000);

      // Step 4: both return to start (train)
      timeout4 = setTimeout(() => {
        user.style.transform = "translateX(0)";
        bag.style.transform = "translateX(0)";
      }, 11000);

      // Loop
      loop = setTimeout(start, 17000);
    };

    start();
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(loop);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-2">
      <h2 className="mb-10 text-center text-[34px] font-bold text-[#0a1904]">
        Say goodbye to luggage worries and
        <br /> hello to hassle-free travel!
      </h2>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.2fr_1fr]">
        {/* Animation area */}
        <div className="relative h-[220px]">
          <div className="absolute left-0 right-0 top-[60px] h-[150px] rounded-[100px] border-t-4 border-dashed border-black" />

          {/* markers */}
          <div className="absolute left-0 top-[110px] text-3xl" aria-hidden>
            <MdTrain className="text-[#0a1904]" size={30} />
          </div>
          <div className="absolute left-[45%] top-[60px] text-3xl" aria-hidden>
            <FaBoxOpen className="text-[#0a1904]" size={28} />
          </div>
          <div className="absolute right-0 top-[110px] text-3xl" aria-hidden>
            <FaCity className="text-[#0a1904]" size={30} />
          </div>

          {/* moving user + bag */}
          <div ref={userRef} className="absolute left-0 top-[110px] text-2xl" aria-label="user">
            <FaUserTie className="text-[#0a1904]" size={26} />
          </div>
          <div ref={bagRef} className="absolute left-0 top-[140px] text-xl" aria-label="bag">
            <FaBagShopping className="text-[#0a1904]" size={22} />
          </div>
        </div>

        {/* Right content */}
        <div>
          <p className="text-[18px] font-medium text-[#0a1904]">Introducing for the first time ever</p>
          <h3 className="mt-1 text-[34px] font-extrabold text-[#0a1904]">
            #<span className="text-[#0a1904]">M</span>
            <span className="text-[#18ee18]">lock</span>
          </h3>
          <ul className="mt-4 space-y-3 text-[16px] text-[#0a1904]">
            <li className="flex items-start gap-2">
              <FaBagShopping className="mt-[2px] text-[#18ee18]" aria-hidden />
              <span>Traveling with heavy bags? Store them safely at our secure luggage stations.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaBoxOpen className="mt-[2px] text-[#18ee18]" aria-hidden />
              <span>Simply drop off your luggage, enjoy your day hands-free, and pick it up whenever convenient.</span>
            </li>
            <li className="flex items-start gap-2">
              <MdTrain className="mt-[2px] text-[#18ee18]" aria-hidden />
              <span>Seamless, secure, and hassle-free – Mlock is your ultimate travel companion.</span>
            </li>
          </ul>
          <p className="mt-3 text-[20px] font-semibold text-[#18ee18]">"Effortless and Secure, isn’t it?"</p>
        </div>
      </div>
    </div>
  );
}
