import type { ComponentPropsWithoutRef } from 'react';

type WikiHighlightProps = ComponentPropsWithoutRef<'mark'>;

const WikiHighlight = ({
  children,
  className = '',
  ...props
}: WikiHighlightProps) => {
  return (
    <mark
      className={[
        'inline rounded-md bg-[linear-gradient(transparent_45%,rgba(167,235,152,0.7)_45%)] px-1 font-extrabold text-[#00B351]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </mark>
  );
};

export default WikiHighlight;
