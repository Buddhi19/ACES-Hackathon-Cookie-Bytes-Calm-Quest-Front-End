import { memo, SVGProps } from 'react';

const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.25 5.83317C12.25 9.9165 7 13.4165 7 13.4165C7 13.4165 1.75 9.9165 1.75 5.83317C1.75 4.44078 2.30312 3.10543 3.28769 2.12086C4.27226 1.13629 5.60761 0.583171 7 0.583171C8.39239 0.583171 9.72774 1.13629 10.7123 2.12086C11.6969 3.10543 12.25 4.44078 12.25 5.83317Z'
      stroke='#ACA3A3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 7.58317C7.9665 7.58317 8.75 6.79967 8.75 5.83317C8.75 4.86667 7.9665 4.08317 7 4.08317C6.0335 4.08317 5.25 4.86667 5.25 5.83317C5.25 6.79967 6.0335 7.58317 7 7.58317Z'
      stroke='#ACA3A3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MapPinIcon);
export { Memo as MapPinIcon };
