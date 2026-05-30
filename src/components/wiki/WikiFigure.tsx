import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type WikiFigureProps = Omit<ComponentPropsWithoutRef<'figure'>, 'children'> & {
  src: string;
  alt: string;
  caption?: ReactNode;
};

const WikiFigure = ({
  src,
  alt,
  caption,
  className = '',
  ...props
}: WikiFigureProps) => {
  return (
    <figure className={['mx-auto my-12 text-center', className].join(' ')} {...props}>
      <div className="inline-block max-w-full rounded-[28px] bg-white p-[18px] shadow-[0_10px_30px_rgba(31,42,36,0.08)]">
        <img
          className="block h-auto w-full max-w-[760px] rounded-[20px]"
          src={src}
          alt={alt}
        />
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-3 max-w-[760px] text-[15px] leading-[1.5] text-[#5D6B63]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default WikiFigure;
