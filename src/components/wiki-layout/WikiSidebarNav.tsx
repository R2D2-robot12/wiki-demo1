import { useEffect, useState } from 'react';

export type WikiNavItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

type WikiSidebarNavProps = {
  title?: string;
  items: WikiNavItem[];
};

const WikiSidebarNav = ({ title = 'On this page', items }: WikiSidebarNavProps) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const nextId = visibleEntries[0]?.target.id;
        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        root: null,
        rootMargin: '-22% 0px -65% 0px',
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveId(id);
  };

  return (
    <aside className="wiki-sidebar" aria-label="Page navigation">
      <h2 className="wiki-sidebar-title">{title}</h2>

      <nav className="wiki-sidebar-list">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={[
              'wiki-sidebar-link',
              `level-${item.level}`,
              activeId === item.id ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={(event) => {
              event.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default WikiSidebarNav;
