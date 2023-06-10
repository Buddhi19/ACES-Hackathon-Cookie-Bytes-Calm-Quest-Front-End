import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 8.50009C18.0035 9.81996 17.6951 11.122 17.1 12.3001C16.3944 13.7118 15.3098 14.8993 13.9675 15.7294C12.6252 16.5595 11.0783 16.9995 9.50002 17.0001C8.18015 17.0035 6.87813 16.6952 5.70002 16.1001L1.52588e-05 18.0001L1.90002 12.3001C1.30495 11.122 0.996574 9.81996 1.00002 8.50009C1.00063 6.92185 1.44063 5.37494 2.27073 4.03264C3.10084 2.69034 4.28827 1.60566 5.70002 0.900093C6.87813 0.305025 8.18015 -0.00334791 9.50002 9.33379e-05H10C12.0844 0.115085 14.0531 0.994855 15.5292 2.47095C17.0053 3.94705 17.885 5.91575 18 8.00009V8.50009Z'
      stroke='#BFBFBF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
