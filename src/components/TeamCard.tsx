import { useRef, useEffect } from "react";
import gsap from "gsap";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  tag?: string;
}

const TeamCard = ({
  name,
  role,
  bio = "",
  imageSrc,
  tag = "",
}: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const img = imgRef.current;
    const role = roleRef.current;
    const bio = bioRef.current;

    if (!card || !overlay || !img) return;

    gsap.set(overlay, { yPercent: 100 });
    gsap.set([role, bio], { opacity: 0, y: 16 });

    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, { yPercent: 0, duration: 0.5, ease: "power3.out" })
      .to(img, { scale: 1.06, duration: 0.6, ease: "power2.out" }, "<")
      .to(role, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.2")
      .to(bio, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.15");

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        width: "435px",
        height: "435px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "16px",
        border: "1px solid rgba(61, 255, 160, 0.14)",
        flexShrink: 0,
        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.32)",
        backgroundColor: "#06110c",
      }}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transformOrigin: "center center",
        }}
      />

      {/* 常驻底部渐变：默认状态下让 name + role 清楚显示在左下角 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(4, 9, 7, 0.76) 0%, rgba(4, 9, 7, 0.38) 30%, rgba(4, 9, 7, 0) 58%)",
          pointerEvents: "none",
        }}
      />

      {/* 默认状态：左下角 name + role */}
      <div
        style={{
          position: "absolute",
          left: "28px",
          bottom: "26px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <h3
          style={{
            fontFamily: "'Inter', 'DM Sans', sans-serif",
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            margin: "0 0 12px 0",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#ffd0bd",
            margin: 0,
          }}
        >
          {role}
        </p>
      </div>

      {/* Hover overlay：滑动动画逻辑保持不变 */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background:
            "linear-gradient(135deg, rgba(72, 155, 176, 0.26) 0%, rgba(93, 151, 134, 0.22) 52%, rgba(17, 61, 52, 0.28) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 42px",
          boxSizing: "border-box",
        }}
      >
        <h3
          style={{
            fontFamily: "'Inter', 'DM Sans', sans-serif",
            fontSize: "34px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            margin: "0 0 22px 0",
          }}
        >
          {name}
        </h3>

        <p
          ref={roleRef}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#ffd0bd",
            margin: "0 0 22px 0",
          }}
        >
          {role}
        </p>

        {tag && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.45,
              color: "#c7f7db",
              margin: "0 0 28px 0",
            }}
          >
            {tag}
          </p>
        )}

        {bio && (
          <p
            ref={bioRef}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: 1.55,
              color: "rgba(255, 255, 255, 0.92)",
              margin: 0,
            }}
          >
            {bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
