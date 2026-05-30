import type { ComponentPropsWithoutRef } from 'react';

type WikiContentProps = ComponentPropsWithoutRef<'main'>;

const WikiContent = ({ children, className = '', ...props }: WikiContentProps) => {
  return (
    <main
      className={[
        'mx-auto max-w-[760px] px-6 py-16',
        'font-dm-sans text-[#1F2A24]',
        '[&_p]:mb-[22px] [&_p]:text-[17.6px] [&_p]:leading-[1.85] [&_p]:text-[#1F2A24]',
        'md:px-10 md:py-20',
        '[&_strong]:font-bold [&_strong]:text-[#1F2A24]',
        '[&_ul]:mb-7 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-7',
        '[&_ol]:mb-7 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-7',
        '[&_li]:text-[17.6px] [&_li]:leading-[1.75] [&_li]:text-[#1F2A24]',
        '[&_a]:font-bold [&_a]:text-[#00B351] [&_a]:underline [&_a]:decoration-[#A7EB98] [&_a]:decoration-4 [&_a]:underline-offset-4',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </main>
  );
};

export default WikiContent;
