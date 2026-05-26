import { useEffect, useRef } from "react";
import gsap from "gsap";
import logoUrl from "../assets/igem_with_circle.jpg";
import { useProjectMenuAnimation } from "./useProjectMenuAnimation";

const projectLinks = ["Project", "Wet Lab", "Dry Lab", "Human Practice"];

export function Navbar() {
  const brandTextRef = useRef<HTMLSpanElement>(null);
  const isBrandHiddenRef = useRef(false);
  const {
    overlayRef,
    navbarBgRef,
    dropdownRef,
    arrowRef,
    showProjectMenu,
    hideProjectMenu,
  } = useProjectMenuAnimation();

  useEffect(() => {
    const brandText = brandTextRef.current;
    if (!brandText) return;

    const setBrandVisibility = () => {
      const shouldHide = window.scrollY > 8;
      if (shouldHide === isBrandHiddenRef.current) return;

      isBrandHiddenRef.current = shouldHide;
      gsap.to(brandText, {
        autoAlpha: shouldHide ? 0 : 1,
        y: shouldHide ? -18 : 0,
        duration: 0.36,
        ease: shouldHide ? "power2.out" : "power2.inOut",
      });
    };

    gsap.set(brandText, {
      autoAlpha: window.scrollY > 8 ? 0 : 1,
      y: window.scrollY > 8 ? -18 : 0,
    });
    isBrandHiddenRef.current = window.scrollY > 8;

    window.addEventListener("scroll", setBrandVisibility, { passive: true });
    return () => window.removeEventListener("scroll", setBrandVisibility);
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-x-0 bottom-0 top-[90px] z-40 bg-[#00B351]/50"
        aria-hidden="true"
      />

      <header className="fixed left-0 top-0 z-50 w-full">
        <div
          ref={navbarBgRef}
          className="pointer-events-none absolute inset-0 bg-[#00B351]/50"
          aria-hidden="true"
        />

        <nav className="relative z-10 mx-auto flex h-[90px] w-full max-w-[1412px] items-center justify-between px-[54px]">
          <a href="/" className="flex items-center gap-6">
            <img
              src={logoUrl}
              alt="CUHK-Shenzhen logo"
              className="h-[70px] w-[70px] rounded-full object-cover"
            />

            <span
              ref={brandTextRef}
              className="text-[38px] font-extrabold leading-none tracking-[0.02em] text-[#F1D96D]"
            >
              CUHK-Shenzhen
            </span>
          </a>

          <div className="flex items-center gap-[86px]">
            <div className="flex h-[64px] items-center rounded-full bg-white px-[46px]">
              <a
                href="/"
                className="flex h-full items-center px-[24px] text-[28px] font-bold tracking-[0.04em] text-black transition hover:opacity-60"
              >
                Home
              </a>

              <div
                className="relative flex h-full items-center"
                onMouseEnter={showProjectMenu}
                onMouseLeave={hideProjectMenu}
              >
                <a
                  href="/project"
                  className="flex h-full items-center gap-3 px-[24px] text-[28px] font-bold tracking-[0.04em] text-black transition hover:opacity-60"
                >
                  Project
                  <span
                    ref={arrowRef}
                    className="translate-y-[2px] text-[24px] leading-none text-[#00B351]"
                  >
                    ▼
                  </span>
                </a>

                <div
                  ref={dropdownRef}
                  className="fixed right-[-20px] top-[-80px] z-50 w-[760px] rounded-[72px] bg-white px-24 py-28 shadow-[0_32px_80px_rgba(0,0,0,0.16)]"
                >
                  <div className="-rotate-[4deg] space-y-2">
                    {projectLinks.map((label) => (
                      <a
                        key={label}
                        href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-[64px] font-extrabold leading-[1.02] tracking-[0] text-[#FF3B05] transition hover:translate-x-2"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/teamGrid"
              className="flex h-[64px] min-w-[170px] items-center justify-center rounded-[28px] bg-[#FF3B05] px-10 text-[28px] font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Team
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
