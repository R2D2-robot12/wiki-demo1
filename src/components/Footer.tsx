import { stringToSlug } from "../utils/stringToSlug";

import plantSosMain from "../assets/igem_with_circle.jpg";
import plantSosWord from "../assets/PLANTSOS-word.png";
import teamLogoUrl from "../assets/logo-cuhk-1-final.webp";
import cuhkLogoUrl from "../assets/cuhk-shenzhen.webp";
import medLogoUrl from "../assets/med-logo.webp";

type LinkItem = {
  label: string;
  href: string;
};

type SocialItem = {
  label: string;
  short: string;
  href: string;
};

type LogoItem = {
  name: string;
  logoUrl: string;
  link: string;
  caption?: string;
};

const exploreLinks: LinkItem[] = [
  { label: "Project", href: "/project-description" },
  { label: "Plant SOS", href: "/description" },
  { label: "Implementation", href: "/implementation" },
  { label: "Education", href: "/education" },
];

const aboutLinks: LinkItem[] = [
  { label: "Our Story", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Sponsors", href: "/attributions" },
];

const socialLinks: SocialItem[] = [
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "Facebook", short: "f", href: "#" },
];

const partners: LogoItem[] = [
  {
    name: "CUHK-Shenzhen",
    logoUrl: cuhkLogoUrl,
    link: "https://www.cuhk.edu.cn/en",
  },
  {
    name: "School of Medicine",
    logoUrl: medLogoUrl,
    link: "https://med.cuhk.edu.cn/?page=2",
  },
];

const sponsors: LogoItem[] = [
  {
    name: "SnapGene",
    logoUrl: "https://static.igem.wiki/teams/5926/sponsors/snapgene.webp",
    link: "https://www.snapgene.com/",
    caption: "From Dotmatics",
  },
  {
    name: "Warshel Institute",
    logoUrl: "https://static.igem.wiki/teams/5926/sponsors/wilogo.avif",
    link: "https://warshel.cuhk.edu.cn",
  },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-5">
      <h3 className="text-[18px] font-semibold uppercase tracking-[0.02em] text-black/75">
        {children}
      </h3>
      <div className="mt-3 h-[3px] w-8 rounded-full bg-[#3f7a43]" />
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-0">
        {links.map((item, index) => (
          <li
            key={item.label}
            className={index === links.length - 1 ? "" : "border-b border-black/10"}
          >
            <a
              href={item.href}
              className="block py-4 text-[18px] font-medium leading-none tracking-[0] text-black/80 transition hover:text-black hover:opacity-65"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR || "2025";
  const teamName = import.meta.env.VITE_TEAM_NAME || "cuhk-shenzhen";
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="mt-16 px-3 py-3 md:px-4 md:py-4">
      <div className="relative mx-auto w-full max-w-[1350px] pt-2.5">
        <div className="pointer-events-none absolute left-16 top-2.5 z-20 h-5 w-5 -translate-y-1/2 rounded-full bg-[#AA0E18]" />
        <div className="pointer-events-none absolute right-24 top-2.5 z-20 h-5 w-5 -translate-y-1/2 rounded-full bg-[#AA0E18]" />

        <div className="rounded-[24px] bg-[#ECECEC] px-10 py-10 text-black shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:px-16 lg:px-16">
          <div className="grid gap-9 lg:grid-cols-[300px_1fr_500px] lg:items-start">
            <div className="flex flex-col items-center text-center">
              <img
                src={plantSosMain}
                alt="Plant SOS logo"
                className="h-[230px] w-[230px] rounded-full object-cover"
              />
              <img
                src={plantSosWord}
                alt="PLANT SOS"
                className="mt-6 h-auto w-[230px] object-contain"
              />
            </div>

            <div className="grid gap-8 border-y border-black/12 py-7 md:grid-cols-2 lg:border-x lg:border-y-0 lg:px-10 lg:py-4">
              <FooterLinks title="Explore" links={exploreLinks} />
              <FooterLinks title="About" links={aboutLinks} />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-nowrap items-center gap-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7C7CD] text-[22px] font-bold text-[#2867F6] transition hover:-translate-y-0.5 hover:opacity-90"
                  >
                    {item.short}
                  </a>
                ))}

                <a
                  href="/description"
                  className="ml-0 inline-flex h-16 min-w-[210px] shrink-0 items-center justify-center rounded-full bg-[#2867F6] px-8 text-[20px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg md:ml-2"
                >
                  Get started
                </a>
              </div>

              <div className="flex items-center gap-5">
                <img
                  src={teamLogoUrl}
                  alt="iGEM CUHK-Shenzhen logo"
                  className="h-[76px] w-[76px] object-contain"
                />
                <div>
                  <p className="text-[28px] font-semibold leading-[1.05] tracking-[0] text-black/80">
                    IGEM
                  </p>
                  <p className="mt-1 text-[20px] font-medium uppercase tracking-[0] text-black/50">
                    CUHK-SHENZHEN
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-black/10 pt-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:items-start">
              <section>
                <SectionTitle>Partners</SectionTitle>
                <div className="grid gap-6 md:grid-cols-2">
                  {partners.map((partner, index) => (
                    <a
                      key={partner.name}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name}`}
                      className={`flex min-h-[76px] items-center transition hover:-translate-y-0.5 hover:opacity-80 ${
                        index === 0 ? "md:border-r md:border-black/10 md:pr-8" : ""
                      }`}
                    >
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[72px] max-w-[280px] object-contain"
                      />
                    </a>
                  ))}
                </div>
              </section>

              <div className="hidden h-full w-px bg-black/10 lg:block" />

              <section>
                <SectionTitle>Sponsors</SectionTitle>
                <div className="grid gap-6 md:grid-cols-2">
                  {sponsors.map((sponsor, index) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${sponsor.name}`}
                      className={`flex min-h-[76px] flex-col justify-center transition hover:-translate-y-0.5 hover:opacity-80 ${
                        index === 0 ? "md:border-r md:border-black/10 md:pr-8" : ""
                      }`}
                    >
                      <img
                        src={sponsor.logoUrl}
                        alt={`${sponsor.name} logo`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[58px] max-w-[230px] object-contain"
                      />
                      {sponsor.caption && (
                        <span className="mt-2 text-[15px] font-medium text-black/45">
                          {sponsor.caption}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 text-[14px] leading-snug text-black/55 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black/80 text-[17px] font-bold text-black/80">
                cc
              </span>
              <span>
                &copy; 2025 - Content on this site is licensed under a{" "}
                <a
                  className="font-medium underline underline-offset-2 transition hover:opacity-60"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="license noreferrer"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </span>
            </p>

            <p className="lg:border-l lg:border-black/10 lg:pl-8">
              The repository used to create this website is available at{" "}
              <a
                href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}
                className="font-medium underline underline-offset-2 transition hover:opacity-60"
                target="_blank"
                rel="noreferrer"
              >
                gitlab.igem.org/{teamYear}/{teamSlug}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
