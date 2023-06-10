import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { Ellipse3915Icon } from './Ellipse3915Icon';
import { Ellipse3917Icon } from './Ellipse3917Icon';
import { Ellipse3921Icon } from './Ellipse3921Icon';
import { Ellipse3922Icon } from './Ellipse3922Icon';
import { Ellipse3923Icon } from './Ellipse3923Icon';
import { Ellipse3924Icon } from './Ellipse3924Icon';
import classes from './IPhone11ProX2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:135 */
export const IPhone11ProX2: FC<Props> = memo(function IPhone11ProX2(props = {}) {
  return (
    <a href='/home'><button>
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse3915}>
        <Ellipse3915Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse3917}>
        <Ellipse3917Icon className={classes.icon2} />
      </div>
      <div className={classes.bernerSennenhundPuppyYellow1}></div>
      <div className={classes.helpingYouToKeepYouMentallyHea}>
        <div className={classes.textBlock}>Helping you </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>to keep</span>
            <span className={classes.label2}> </span>
            <span className={classes.label3}>you mentally</span>
            <span className={classes.label4}> </span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label5}>healthy!</span>
          </p>
        </div>
      </div>
      <div className={classes.ellipse3922}>
        <Ellipse3922Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse3923}>
        <Ellipse3923Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse3921}>
        <Ellipse3921Icon className={classes.icon5} />
      </div>
      <div className={classes.ellipse3924}>
        <Ellipse3924Icon className={classes.icon6} />
      </div>
      <div className={classes.iosStatusBarBlack}>
        <div className={classes.Time}>9:41</div>
        <div className={classes.container}>
          <ContainerIcon className={classes.icon7} />
        </div>
      </div>
      <div className={classes.cALMQUEST}>CALM QUEST</div>
    </div>
    </button></a>
  );
});
