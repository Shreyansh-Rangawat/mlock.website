import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-36 bg-[#0a1904] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="flex flex-wrap justify-between gap-6 bg-[#0a1904]">
          {/* Get The App */}
          <div className="min-w-60">
            <h3 className="mb-3 text-lg font-semibold text-[#18ee18]">Get The App</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="flex items-center gap-3 rounded-md bg-white/0 p-2 text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                  <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path>
                </svg>
                <div>
                  <span className="block text-xs opacity-80">download on the</span>
                  <span className="block text-lg font-bold">app store</span>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-md bg-white/0 p-2 text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                  <path d="M3.60972 1.81396L13.793 12L3.61082 22.1864C3.41776 22.1048 3.24866 21.962 3.13555 21.7667C3.0474 21.6144 3.00098 21.4416 3.00098 21.2656V2.73453C3.00098 2.32109 3.25188 1.96625 3.60972 1.81396ZM14.5 12.707L16.802 15.009L5.86498 21.342L14.5 12.707ZM17.699 9.50896L20.5061 11.1347C20.9841 11.4114 21.1473 12.0232 20.8705 12.5011C20.783 12.6523 20.6574 12.778 20.5061 12.8655L17.698 14.491L15.207 12L17.699 9.50896ZM5.86498 2.65796L16.803 8.98996L14.5 11.293L5.86498 2.65796Z"></path>
                </svg>
                <div>
                  <span className="block text-xs opacity-80">download on</span>
                  <span className="block text-lg font-bold">google play</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#18ee18]">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/">Home</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/about">About Us</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/safety">Safety</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/team">Team</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/blog">Blog</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#18ee18]">Legal</h3>
            <ul className="space-y-1">
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/terms">Terms & Conditions</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/policy">Privacy Policy</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/faq">FAQ</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/problem/video">Problem Clip</Link></li>
              <li><Link className="inline-block rounded-md px-2 py-1 font-bold text-white hover:bg-[#18ee18] hover:text-black" href="/solution/video">Solution Video</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#18ee18]">Follow Us</h3>
            <div className="flex gap-5 text-2xl">
              <Link href="#" aria-label="Instagram"></Link>
              <Link href="#" aria-label="Facebook"></Link>
              <Link href="#" aria-label="LinkedIn"></Link>
              <Link href="#" aria-label="Twitter"></Link>
              <Link href="#" aria-label="YouTube"></Link>
            </div>
          </div>
        </div>

        <hr className="my-6 w-4/5 border border-[#18ee18]" />

        <div className="flex items-center">
          <Link href="https://mlock.in" className="block">
            <Image
              className="ml-16 rounded-md"
              src="/Web-logo-img-footer.jpg"
              width={135}
              height={60}
              alt="Mlock Logo"
            />
          </Link>
        </div>

        <p className="mt-2 text-sm text-[#dbd9d9]">© 2025 Mlock. All rights reserved.</p>
      </div>
    </footer>
  );
}
