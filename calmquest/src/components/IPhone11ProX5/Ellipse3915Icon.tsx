import { memo, SVGProps } from 'react';

const Ellipse3915Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 213 213' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={106.456} cy={106.472} r={106} fill='url(#paint0_linear_362_36)' />
    <defs>
      <linearGradient
        id='paint0_linear_362_36'
        x1={106.456}
        y1={0.471978}
        x2={147.456}
        y2={212.472}
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
