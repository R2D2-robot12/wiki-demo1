import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import herodescription from '../assets/herodescription.jpg';

gsap.registerPlugin(ScrollTrigger);

const FULL_TEXT = [
  "Plants SOS is a real-time platform built for plant emergency care—",
  "diagnosing stress, disease,写着玩的，后面会改",
  "Whether your leaves are yellowing, wilting, or showing signs you can't name,",
  "we help you 这一页都是",
];

// Pre-build flat word list at module level to keep JSX pure
type Token = { text: string; isSpace: boolean; globalIdx: number };
type ParagraphTokens = Token[];

const buildTokens = (): { paragraphs: ParagraphTokens[]; totalWords: number } => {
  let globalIdx = 0;
  const paragraphs = FULL_TEXT.map((para) => {
    const parts = para.split(/(\s+)/).filter(Boolean);
    return parts.map((part): Token => {
      const isSpace = /^\s+$/.test(part);
      const token: Token = { text: part, isSpace, globalIdx: isSpace ? -1 : globalIdx };
      if (!isSpace) globalIdx++;
      return token;
    });
  });
  return { paragraphs, totalWords: globalIdx };
};

const { paragraphs: PARAGRAPHS, totalWords: TOTAL_WORDS } = buildTokens();

const HeroDescription = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const greenSpans = Array.from(
      textRef.current.querySelectorAll<HTMLElement>('.word-green')
    );
    if (greenSpans.length === 0) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate(self) {
          const p = self.progress;
          greenSpans.forEach((span, i) => {
            // Each word gets a small window of the total scroll progress
            const wStart = (i / TOTAL_WORDS) * 0.82;
            const wEnd = wStart + 0.14;
            const raw = (p - wStart) / (wEnd - wStart);
            const v = Math.max(0, Math.min(1, raw));
            span.style.opacity = String(v);
            span.style.transform = `translateY(${(1 - v) * 10}px)`;
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b140d] py-[120px]"
    >
      <div className="max-w-[760px] mx-auto px-6">
        {/* Eyebrow label */}
        <p
          className="mb-12 text-[12px] tracking-[0.08em] uppercase text-[#1d9e75]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          About the platform
        </p>

        {/* Two-layer scroll-revealed text */}
        <div
          ref={textRef}
          className="text-[42px] font-semibold leading-[1.35] tracking-[-0.02em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
          aria-label={FULL_TEXT.join(' ')}
          role="text"
        >
          {PARAGRAPHS.map((tokens, pIdx) => (
            <span key={pIdx}>
              {tokens.map((token, tIdx) =>
                token.isSpace ? (
                  <span key={tIdx} aria-hidden="true">{token.text}</span>
                ) : (
                  <span
                    key={tIdx}
                    className="relative inline-block"
                    aria-hidden="true"
                  >
                    {/* Ghost dim layer — always present, gives layout */}
                    <span style={{ color: '#1a3020', userSelect: 'none' }}>
                      {token.text}
                    </span>
                    {/* Reveal layer — GSAP drives opacity + translateY */}
                    <span
                      className="word-green absolute inset-0"
                      style={{
                        color: '#f0f5f1',
                        opacity: 0,
                        transform: 'translateY(10px)',
                        willChange: 'opacity, transform',
                      }}
                    >
                      {token.text}
                    </span>
                  </span>
                )
              )}
              {/* Space between paragraphs */}
              {pIdx < PARAGRAPHS.length - 1 && (
                <span aria-hidden="true"> </span>
              )}
            </span>
          ))}
        </div>

        {/* Accent line */}
        <div className="mt-14 flex items-center gap-4">
          <div
            className="flex-shrink-0 w-[3px] h-10 rounded-full"
            style={{ background: '#3dffa0' }}
          />
          <p
            className="text-[16px] leading-[1.75] text-[#8a9e90]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Real-time diagnosis · Treatment guidance · Recovery tracking
          </p>
        </div>

        {/* CTA */}
        <button
          className="mt-14 inline-flex items-center gap-3 px-8 py-4 rounded-[4px] text-[#3dffa0] text-[15px] font-medium tracking-[0.04em] group transition-all duration-300 hover:bg-[rgba(61,255,160,0.07)]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            border: '1px solid rgba(61,255,160,0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(61,255,160,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(61,255,160,0.2)';
          }}
        >
          Find out more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="#3dffa0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Bottom image — stitched flush to section */}
      <div className="mt-20 w-full">
        <img
          src={herodescription}
          alt="Platform preview"
          className="w-full block object-cover"
        />
      </div>
    </section>
  );
};

export default HeroDescription;