import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useProjectMenuAnimation = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const navbarBgRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const submenuTimelineRefs = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const navbarBg = navbarBgRef.current;
    const dropdown = dropdownRef.current;
    const arrow = arrowRef.current;
    if (!overlay || !navbarBg || !dropdown || !arrow) return;

    const dropdownLinks = dropdown.querySelectorAll("a");
    const submenuCards = dropdown.querySelectorAll<HTMLElement>("[data-submenu-card]");

    gsap.set([overlay, navbarBg], { autoAlpha: 0 });
    gsap.set(dropdown, {
      autoAlpha: 0,
      rotateZ: 72,
      scale: 0.96,
      transformOrigin: "100% 0%",
      transformPerspective: 1200,
    });
    gsap.set(dropdownLinks, { autoAlpha: 0, y: 16 });

    submenuTimelineRefs.current = Array.from(submenuCards).map((card) => {
      const links = card.querySelectorAll("a");

      gsap.set(card, {
        autoAlpha: 0,
        rotateZ: 52,
        scale: 0.96,
        transformOrigin: "100% 0%",
        transformPerspective: 1000,
      });
      gsap.set(links, { autoAlpha: 0, y: 12 });

      return gsap
        .timeline({ paused: true })
        .to(card, {
          autoAlpha: 1,
          rotateZ: -8,
          scale: 1,
          duration: 0.62,
          ease: "elastic.out(0.9, 0.68)",
        })
        .to(
          links,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.24,
            stagger: 0.04,
            ease: "power2.out",
          },
          0.13
        );
    });

    timelineRef.current = gsap
      .timeline({ paused: true })
      .to(
        [overlay, navbarBg],
        {
          autoAlpha: 1,
          duration: 0.46,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        dropdown,
        {
          autoAlpha: 1,
          rotateZ: -12,
          scale: 1,
          duration: 0.9,
          ease: "elastic.out(0.86, 0.66)",
        },
        0.03
      )
      .to(
        arrow,
        {
          rotate: 180,
          duration: 0.32,
          ease: "power2.inOut",
        },
        0.02
      )
      .to(
        dropdownLinks,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.28,
          stagger: 0.045,
          ease: "power2.out",
        },
        0.18
      );

    return () => {
      timelineRef.current?.kill();
      submenuTimelineRefs.current.forEach((timeline) => timeline.kill());
    };
  }, []);

  const showProjectMenu = () => {
    timelineRef.current?.timeScale(1).play();
  };

  const hideProjectMenu = () => {
    submenuTimelineRefs.current.forEach((timeline) => {
      timeline.timeScale(1.4).reverse();
    });
    timelineRef.current?.timeScale(1.35).reverse();
  };

  const showSubmenu = (index: number) => {
    submenuTimelineRefs.current.forEach((timeline, timelineIndex) => {
      if (timelineIndex === index) {
        timeline.timeScale(1).play();
      } else {
        timeline.timeScale(1.35).reverse();
      }
    });
  };

  return {
    overlayRef,
    navbarBgRef,
    dropdownRef,
    arrowRef,
    showProjectMenu,
    hideProjectMenu,
    showSubmenu,
  };
};
