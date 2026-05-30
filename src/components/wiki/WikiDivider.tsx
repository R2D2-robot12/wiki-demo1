import type { ComponentPropsWithoutRef } from 'react';

type WikiDividerProps = ComponentPropsWithoutRef<'hr'>;

const WikiDivider = ({ className = '', ...props }: WikiDividerProps) => {
  return (
    <hr
      className={[
        'my-16 h-0.5 border-0 bg-[repeating-linear-gradient(to_right,rgba(0,179,81,0.35)_0,rgba(0,179,81,0.35)_10px,transparent_10px,transparent_18px)]',
        className,
      ].join(' ')}
      {...props}
    />
  );
};

export default WikiDivider;
