import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX12.module.css';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 359:148 */
export const IPhone11ProX12: FC<Props> = memo(function IPhone11ProX12(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.myJournal}>My Journal</div>
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
      <div className={classes.frame3861}>
        <div className={classes._2022611}>2022/06/11</div>
      </div>
      <div className={classes.frame3869}>
        <div className={classes._2022610}>2022/06/10</div>
      </div>
      <div className={classes.frame38612}>
        <div className={classes._202269}>2022/06/9</div>
      </div>
      <div className={classes.frame38613}>
        <div className={classes._202268}>2022/06/8</div>
      </div>
      <div className={classes.frame3870}>
        <div className={classes._202267}>2022/06/7</div>
      </div>
      <div className={classes.frame3871}>
        <div className={classes._202266}>2022/06/6</div>
      </div>
    </div>
  );
});
