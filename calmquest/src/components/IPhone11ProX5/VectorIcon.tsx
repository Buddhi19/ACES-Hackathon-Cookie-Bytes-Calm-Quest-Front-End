import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18 8.50006C18.0035 9.81993 17.6951 11.1219 17.1 12.3001C16.3944 13.7118 15.3098 14.8992 13.9675 15.7293C12.6252 16.5595 11.0783 16.9995 9.50002 17.0001C8.18015 17.0035 6.87813 16.6951 5.70002 16.1001L1.52588e-05 18.0001L1.90002 12.3001C1.30495 11.1219 0.996574 9.81993 1.00002 8.50006C1.00063 6.92182 1.44063 5.37491 2.27073 4.03261C3.10084 2.69031 4.28827 1.60563 5.70002 0.900063C6.87813 0.304994 8.18015 -0.00337843 9.50002 6.28204e-05H10C12.0844 0.115055 14.0531 0.994824 15.5292 2.47092C17.0053 3.94702 17.885 5.91572 18 8.00006V8.50006Z'
      stroke='#BFBFBF'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
