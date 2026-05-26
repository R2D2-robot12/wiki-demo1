// src/utils/sectionHeader.ts

export type SectionKey = "Team" | "Project" | "Wet Lab" | "Dry Lab" | "Engagement";

const SECTION_IMAGE: Record<SectionKey, string> = {
  "Team":        "https://static.igem.wiki/teams/5926/homepage/pagehead/page-head2.webp",
  "Project":     "https://static.igem.wiki/teams/5926/homepage/pagehead/page-head1.webp",
  "Wet Lab":     "https://static.igem.wiki/teams/5926/homepage/pagehead/page-head4.webp",
  "Dry Lab":     "https://static.igem.wiki/teams/5926/homepage/pagehead/page-head3.webp",
  "Engagement":  "https://static.igem.wiki/teams/5926/homepage/pagehead/integrated-human-practice.webp",
};

// 依据你 pages.ts 的路由定义，把路径归到对应栏目
const PATH_TO_SECTION: Array<{ paths: string[]; section: SectionKey }> = [
  { section: "Team", paths: ["/team", "/attributions"] },

  { section: "Project", paths: ["/description", "/engineering", "/results", "/contribution"] },

  {
    section: "Wet Lab",
    paths: ["/experiments", "/part", "/measurement", "/results", "/notebook"],
  },

  { section: "Dry Lab", paths: ["/model", "/software"] },

  { section: "Engagement", paths: ["/human-practices", "/education"] },
];

export function getSectionHeaderImage(path: string): string | null {
  // path 类似 "/description"；容错：带查询/锚点时也能匹配
  const clean = path.split("?")[0].split("#")[0];
  for (const group of PATH_TO_SECTION) {
    if (group.paths.includes(clean)) {
      return SECTION_IMAGE[group.section];
    }
  }
  return null;
}
