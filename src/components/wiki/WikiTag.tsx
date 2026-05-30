import type { ComponentPropsWithoutRef } from 'react';

type WikiTagProps = ComponentPropsWithoutRef<'span'>;

const WikiTag = ({ children, className = '', ...props }: WikiTagProps) => {
  return (
    <span
      className={[
        'my-7 mb-4 inline-flex items-center justify-center rounded-full border-2 border-[#00B351] bg-white px-4 py-[7px]',
        'font-inter text-[18px] font-extrabold leading-none text-[#00B351] shadow-[0_4px_0_rgba(0,179,81,0.18)]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
};

export default WikiTag;
