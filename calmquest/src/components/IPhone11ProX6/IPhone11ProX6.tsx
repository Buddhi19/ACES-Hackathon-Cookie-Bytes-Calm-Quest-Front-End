import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX6.module.css';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 312:106 */
export const IPhone11ProX6: FC<Props> = memo(function IPhone11ProX6(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.drWatson}>Dr. Watson</div>
      <div className={classes.iosStatusBarBlack}>
        <div className={classes.Time}>9:41</div>
        <div className={classes.container}>
          <ContainerIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.frame3868}>
        <div className={classes.user}>
          <UserIcon className={classes.icon2} />
        </div>
        <div className={classes.messageCircle}></div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon3} />
        </div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon4} />
        </div>
        <div className={classes.rectangle3765}></div>
      </div>
      <div className={classes.rectangle3764}></div>
      <div className={classes.image1}></div>
      <div className={classes.image2}></div>
      <div className={classes.frame3861}>
        <div className={classes.typeHere}>Type here...</div>
      </div>
    </div>
  );
});
