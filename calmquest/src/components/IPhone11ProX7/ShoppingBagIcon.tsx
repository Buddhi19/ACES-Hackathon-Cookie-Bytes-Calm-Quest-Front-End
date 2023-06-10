import { memo, SVGProps } from 'react';

const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.00003 2.40675L3.00003 6.40675V20.4067C3.00003 20.9372 3.21074 21.4459 3.58582 21.821C3.96089 22.196 4.4696 22.4067 5.00003 22.4067H19C19.5305 22.4067 20.0392 22.196 20.4142 21.821C20.7893 21.4459 21 20.9372 21 20.4067V6.40675L18 2.40675H6.00003Z'
      stroke='#818AF9'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.00003 6.40675H21' stroke='#818AF9' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M16 10.4067C16 11.4676 15.5786 12.485 14.8285 13.2352C14.0783 13.9853 13.0609 14.4067 12 14.4067C10.9392 14.4067 9.92175 13.9853 9.1716 13.2352C8.42146 12.485 8.00003 11.4676 8.00003 10.4067'
      stroke='#818AF9'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ShoppingBagIcon);
export { Memo as ShoppingBagIcon };
