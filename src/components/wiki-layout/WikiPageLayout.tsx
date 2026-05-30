import type { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import WikiHero from './WikiHero';
import WikiSidebarNav, { type WikiNavItem } from './WikiSidebarNav';
import './wikiPageLayout.css';

type WikiPageLayoutProps = {
  title: string;
  heroImage?: string;
  heroAlt?: string;
  heroSubtitle?: string;
  navItems: WikiNavItem[];
  children: ReactNode;
};

const WikiPageLayout = ({
  title,
  heroImage,
  heroAlt,
  heroSubtitle,
  navItems,
  children,
}: WikiPageLayoutProps) => {
  return (
    <div className="wiki-page">
      <Navbar />

      {heroImage ? (
        <WikiHero
          title={title}
          image={heroImage}
          alt={heroAlt ?? title}
          subtitle={heroSubtitle}
        />
      ) : null}

      <main className="wiki-page-main">
        <WikiSidebarNav title={title} items={navItems} />

        <article className="wiki-page-content-shell">{children}</article>
      </main>

      <Footer />
    </div>
  );
};

export default WikiPageLayout;
