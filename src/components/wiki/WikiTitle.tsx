import type { ComponentPropsWithoutRef } from 'react';

type WikiTitleProps = ComponentPropsWithoutRef<'h1'> & {
  eyebrow?: string;
};

const WikiTitle = ({
  eyebrow = 'Wiki report',
  children,
  className = '',
  ...props
}: WikiTitleProps) => {
  return (
    <header className="mb-14">
      <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.08em] text-[#00B351]">
        {eyebrow}
      </p>
      <h1
        className={[
          'font-inter text-[52px] font-extrabold leading-[1.05] text-[#00B351] md:text-[72px]',
          className,
        ].join(' ')}
        {...props}
      >
        {children}
      </h1>
      <div className="mt-5 h-2 w-[140px] rounded-full bg-[#A7EB98]" />
    </header>
  );
};

export default WikiTitle;
