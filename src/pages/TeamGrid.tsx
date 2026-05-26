import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import cloudUrl from "../assets/cloude_svg.svg";
import teamData from "../data/teamData.json";

type MousePosition = {
  x: number;
  y: number;
};

const teamImages = import.meta.glob("../assets/team/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const getTeamImageUrl = (imageSrc: string) => {
  const imageName = imageSrc.split("/").pop();
  return teamImages[`../assets/team/${imageName}`] ?? imageSrc;
};

const Cloud = ({
  width,
  left,
  right,
  top,
  bottom,
}: {
  width: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}) => (
  <img
    src={cloudUrl}
    alt=""
    aria-hidden="true"
    style={{
      position: "absolute",
      width,
      left,
      right,
      top,
      bottom,
      pointerEvents: "none",
      userSelect: "none",
    }}
  />
);

const TeamLetter = ({
  children,
  left,
  right,
  top,
  bottom,
  rotate,
  size,
  mousePosition,
}: {
  children: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  rotate: string;
  size: string;
  mousePosition: MousePosition;
}) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [center, setCenter] = useState<MousePosition>({ x: 0, y: 0 });
  const baseRotation = Number.parseFloat(rotate);

  useEffect(() => {
    const updateCenter = () => {
      const rect = letterRef.current?.getBoundingClientRect();
      if (!rect) return;

      setCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    window.addEventListener("scroll", updateCenter, { passive: true });

    return () => {
      window.removeEventListener("resize", updateCenter);
      window.removeEventListener("scroll", updateCenter);
    };
  }, []);

  const dx = mousePosition.x - center.x;
  const dy = mousePosition.y - center.y;
  const distance = Math.hypot(dx, dy);
  const radius = 920;
  const attraction = Math.max(0, 1 - distance / radius);
  const easedAttraction = attraction * attraction;
  const angle = Math.atan2(dy, dx);

  const x = easedAttraction > 0 ? dx * easedAttraction * 0.12 : 0;
  const y = easedAttraction > 0 ? dy * easedAttraction * 0.12 : 0;
  const scaleX = 1 + easedAttraction * 0.16;
  const scaleY = 1 - easedAttraction * 0.08;
  const dynamicRotate = baseRotation + Math.sin(angle) * easedAttraction * 7;

  return (
    <motion.span
      ref={letterRef}
      animate={{
        x,
        y,
        scaleX,
        scaleY,
        rotate: dynamicRotate,
      }}
      transition={{
        type: "spring",
        stiffness: 170,
        damping: 14,
        mass: 0.9,
      }}
      style={{
        position: "absolute",
        left,
        right,
        top,
        bottom,
        display: "block",
        fontFamily: "'Fredoka', 'Inter', sans-serif",
        fontSize: size,
        fontWeight: 700,
        lineHeight: 0.86,
        letterSpacing: "0",
        color: "#2f6bf2",
        transformOrigin: "center",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {children}
    </motion.span>
  );
};

const SectionTitle = ({ children }: { children: string }) => (
  <h2
    style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: "48px",
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "0",
      color: "#242424",
      margin: "0 0 40px",
      textAlign: "center",
    }}
  >
    {children}
  </h2>
);

const TeamGrid = () => {
  const students = teamData.filter((member) => member.group === "students");
  const pi = teamData.filter((member) => member.group === "pi");
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f0df" }}>
      <Navbar />

      <section
        style={{
          position: "relative",
          minHeight: "835px",
          overflow: "hidden",
          background: "#f4f0df",
          borderTop: "3px solid rgba(80, 70, 45, 0.16)",
          borderBottom: "1px solid rgba(80, 70, 45, 0.14)",
        }}
      >
        <Cloud width="520px" left="-76px" bottom="220px" />
        <Cloud width="520px" right="92px" top="250px" />

        <TeamLetter
          left="calc(50% - 590px)"
          top="176px"
          rotate="12deg"
          size="430px"
          mousePosition={mousePosition}
        >
          T
        </TeamLetter>
        <TeamLetter
          left="calc(50% - 330px)"
          top="330px"
          rotate="-13deg"
          size="415px"
          mousePosition={mousePosition}
        >
          E
        </TeamLetter>
        <TeamLetter
          left="calc(50% - 42px)"
          top="102px"
          rotate="-4deg"
          size="438px"
          mousePosition={mousePosition}
        >
          A
        </TeamLetter>
        <TeamLetter
          left="calc(50% + 292px)"
          top="412px"
          rotate="14deg"
          size="440px"
          mousePosition={mousePosition}
        >
          M
        </TeamLetter>

        <div
          style={{
            position: "absolute",
            left: "76px",
            bottom: "36px",
            width: "355px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "37px",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "0",
              color: "#232323",
              margin: "0 0 4px",
            }}
          >
            CUHK-Shenzhen
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "23px",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "0",
              color: "#202020",
              margin: 0,
            }}
          >
            We are a passionate group of students working together for iGEM
            2026!
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#f4f0df",
          padding: "96px 80px 120px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <SectionTitle>The Students</SectionTitle>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "28px",
              justifyContent: "center",
              marginBottom: "96px",
            }}
          >
            {students.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={getTeamImageUrl(member.imageSrc)}
                tag={member.tag}
              />
            ))}
          </div>

          <SectionTitle>Principal Investigator</SectionTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pi.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={getTeamImageUrl(member.imageSrc)}
                tag={member.tag}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamGrid;
