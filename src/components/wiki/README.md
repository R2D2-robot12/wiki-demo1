# Wiki Text Components Manual

This folder contains small reusable components for writing report-style wiki pages. The goal is to keep page files focused on content while typography, spacing, colors, and section rhythm stay consistent.

## Import

```tsx
import {
  WikiContent,
  WikiDivider,
  WikiFigure,
  WikiHighlight,
  WikiSection,
  WikiSubsection,
  WikiTag,
  WikiTitle,
} from '../components/wiki';
```

Adjust the relative import path based on the page location.

## Basic Page Structure

Use `WikiContent` as the centered reading container. It sets the report width to `760px` and applies default styles to paragraphs, lists, links, and body text.

```tsx
const Page = () => {
  return (
    <div className="min-h-screen bg-[#F3EFE0]">
      <WikiContent>
        <WikiTitle>Description</WikiTitle>

        <WikiSection title="Inspiration">
          <p>
            In China, <WikiHighlight>colorectal cancer (CRC)</WikiHighlight>
            poses a substantial disease burden.
          </p>
        </WikiSection>
      </WikiContent>
    </div>
  );
};
```

## Components

### `WikiContent`

Use once per wiki page. It creates the centered text column and default report typography.

```tsx
<WikiContent>
  <p>Body text...</p>
</WikiContent>
```

Use `className` only for page-specific spacing changes:

```tsx
<WikiContent className="pt-24">...</WikiContent>
```

### `WikiTitle`

Use for the page-level `h1`.

```tsx
<WikiTitle>Description</WikiTitle>
```

Optional eyebrow text:

```tsx
<WikiTitle eyebrow="Project overview">Description</WikiTitle>
```

### `WikiSection`

Use for main report sections. This renders an `h2` with the green side marker and title underline.

```tsx
<WikiSection title="Background">
  <p>Section content...</p>
</WikiSection>
```

Recommended mapping:

- Markdown-level heading: `## Background`
- Component: `<WikiSection title="Background">...</WikiSection>`

### `WikiSubsection`

Use for smaller headings inside a section. This renders an `h3` as a rounded label.

```tsx
<WikiSubsection title="GLU-FIRE Strategy Overview" />
```

Recommended mapping:

- Markdown-level heading: `### GLU-FIRE Strategy Overview`
- Component: `<WikiSubsection title="GLU-FIRE Strategy Overview" />`

### `WikiHighlight`

Use only for important keywords or short phrases inside paragraphs. Do not wrap a whole paragraph unless it is intentionally a short statement.

```tsx
<p>
  Current therapies for <WikiHighlight>colorectal cancer (CRC)</WikiHighlight>
  remain limited in some patient groups.
</p>
```

### `WikiTag`

Use for repeated report phases such as `Design`, `Build`, `Test`, `Learn`, `Result`, or `Discussion`.

```tsx
<WikiTag>Design</WikiTag>
```

### `WikiFigure`

Use for images with a consistent card and caption style.

```tsx
import figureImage from '../assets/wiki-demo.png';

<WikiFigure
  src={figureImage}
  alt="Key metabolic pathways involved in ferroptosis regulation"
  caption={
    <>
      <span className="font-extrabold text-[#00B351]">Figure 1.</span>
      {' '}Key metabolic pathways involved in ferroptosis regulation.
    </>
  }
/>
```

Prefer importing images from `src/assets` instead of writing raw relative paths in `src`.

### `WikiDivider`

Use sparingly between large content blocks when a visual pause is helpful.

```tsx
<WikiDivider />
```

## Writing Rules

- Use `WikiTitle` for the page title instead of hand-writing `h1` classes.
- Use `WikiSection` for every second-level report heading.
- Use `WikiSubsection` for third-level headings.
- Keep normal body content in plain `<p>` tags inside `WikiContent`.
- Use `WikiHighlight` for keywords, mechanisms, cell lines, core conclusions, or treatment names.
- Use `WikiFigure` for all report images so captions stay consistent.
- Avoid adding one-off typography classes in pages unless the component cannot express the needed layout.

## Demo Page

Current demo route:

```txt
http://localhost:5173/WikiDemo
```

Demo file:

```txt
src/pages/WikiDemo.tsx
```
