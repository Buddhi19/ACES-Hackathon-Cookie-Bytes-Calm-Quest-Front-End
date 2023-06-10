import { memo, SVGProps } from 'react';

const Ellipse3915Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 383 383' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={191.5} cy={191.5} r={191.5} fill='url(#paint0_linear_348_14)' />
    <defs>
      <linearGradient
        id='paint0_linear_348_14'
        x1={191.5}
        y1={0.00000220748}
        x2={265.571}
        y2={383}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#BCF9FF' />
        <stop offset={1} stopColor='#82EFFF' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse3915Icon);
export { Memo as Ellipse3915Icon };
