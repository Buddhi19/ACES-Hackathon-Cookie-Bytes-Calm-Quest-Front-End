import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { Ellipse3911Icon } from './Ellipse3911Icon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX7.module.css';
import { Polygon1Icon } from './Polygon1Icon';
import { ShoppingBagIcon } from './ShoppingBagIcon';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 313:188 */
export const IPhone11ProX7: FC<Props> = memo(function IPhone11ProX7(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon} />
      </div>
      <div className={classes.notifications}>Notifications</div>
      <div className={classes.iosStatusBarBlack}>
        <div className={classes.Time}>9:41</div>
        <div className={classes.container}>
          <ContainerIcon className={classes.icon2} />
        </div>
      </div>
      <div className={classes.shoppingBag}>
        <ShoppingBagIcon className={classes.icon3} />
      </div>
      <div className={classes.ellipse3911}>
        <Ellipse3911Icon className={classes.icon4} />
      </div>
      <div className={classes._2}>2</div>
      <div className={classes.frame3868}>
        <div className={classes.user}>
          <UserIcon className={classes.icon5} />
        </div>
        <div className={classes.messageCircle}></div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon6} />
        </div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon7} />
        </div>
        <div className={classes.rectangle3765}></div>
      </div>
      <div className={classes.frame3861}>
        <div className={classes.takeAMomentToBreatheAndFindPea}>
          <div className={classes.textBlock}>Take a moment to breathe and find peace within. </div>
          <div className={classes.textBlock2}>Remember, you have the power to calm your mind and</div>
          <div className={classes.textBlock3}>soothe your soul</div>
        </div>
      </div>
      <div className={classes.frame3869}>
        <div className={classes.closeYourEyesTakeADeepBreathAn}>
          <div className={classes.textBlock4}>Close your eyes, take a deep breath, and exhale slowly.</div>
          <div className={classes.textBlock5}> Let go of any tension or worries</div>
        </div>
      </div>
    </div>
  );
});
