import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type WikiSubsectionProps = Omit<ComponentPropsWithoutRef<'h3'>, 'title'> & {
  title: ReactNode;
};

const WikiSubsection = ({
  title,
  className = '',
  ...props
}: WikiSubsectionProps) => {
  return (
    <h3
      className={[
        'my-9 mb-5 inline-flex scroll-mt-[120px] items-center rounded-full bg-[rgba(167,235,152,0.5)] px-[18px] py-2',
        'font-inter text-[21px] font-extrabold leading-[1.2] text-[#1F2A24] md:text-[22px]',
        className,
      ].join(' ')}
      {...props}
    >
      {title}
    </h3>
  );
};

export default WikiSubsection;
