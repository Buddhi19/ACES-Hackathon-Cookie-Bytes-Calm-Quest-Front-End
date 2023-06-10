import { memo, SVGProps } from 'react';

const Ellipse3917Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={299.776} cy={300.124} r={299.385} fill='url(#paint0_linear_348_15)' />
    <defs>
      <linearGradient
        id='paint0_linear_348_15'
        x1={299.776}
        y1={0.739078}
        x2={415.576}
        y2={599.508}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#BCF9FF' />
        <stop offset={1} stopColor='#82EFFF' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse3917Icon);
export { Memo as Ellipse3917Icon };
