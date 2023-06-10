import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
      stroke='url(#paint0_linear_359_223)'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 22V12H15V22'
      stroke='url(#paint1_linear_359_223)'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <defs>
      <linearGradient id='paint0_linear_359_223' x1={12} y1={2} x2={12} y2={22} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#818AF9' />
        <stop offset={1} stopColor='#656BB5' />
      </linearGradient>
      <linearGradient id='paint1_linear_359_223' x1={12} y1={12} x2={12} y2={22} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#818AF9' />
        <stop offset={1} stopColor='#656BB5' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
