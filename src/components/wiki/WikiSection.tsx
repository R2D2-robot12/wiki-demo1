import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type WikiSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'title'> & {
  title: ReactNode;
};

const WikiSection = ({
  title,
  children,
  className = '',
  ...props
}: WikiSectionProps) => {
  return (
    <section className={['my-[72px] scroll-mt-[120px]', className].join(' ')} {...props}>
      <h2 className="mb-7 flex items-center gap-3 font-inter text-[30px] font-extrabold leading-[1.2] text-[#00B351] md:text-[34px]">
        <span
          className="h-[42px] w-2.5 flex-none rounded-full bg-[#A7EB98]"
          aria-hidden="true"
        />
        <span>{title}</span>
      </h2>
      <div className="h-1.5 w-[120px] rounded-full bg-[#A7EB98]" />
      <div className="mt-7">{children}</div>
    </section>
  );
};

export default WikiSection;
