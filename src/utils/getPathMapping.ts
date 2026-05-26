import type { FC } from "react";

type PageConfig = {
  name?: string;
  title?: string;
  path?: string;
  component?: FC;
  lead?: string;
  headerImage?: string;
  folder?: PageConfig[];
};

const pages: PageConfig[] = [];

export const getPathMapping = () => {
  return pages.reduce<{
    [key: string]: {
      name: string | undefined;
      title: string | undefined;
      component: FC;
      lead: string | undefined;
      headerImage?: string | undefined;
    };
  }>((map, item) => {
    if (item.path && item.component) {
      map[item.path] = {
        name: item.name,
        title: item.title,
        component: item.component,
        lead: item.lead,
        headerImage: item.headerImage,
      };
    } else if (item.folder) {
      item.folder.forEach((page) => {
        if (page.path && page.component) {
          map[page.path] = {
            name: page.name,
            title: page.title,
            component: page.component,
            lead: page.lead,
            headerImage: page.headerImage,
          };
        }
      });
    }
    return map;
  }, {});
};
