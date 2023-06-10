import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M15.9785 0.828858L33.304 25.9651L1.34694 27.6228L15.9785 0.828858Z' fill='#D4E0FF' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
