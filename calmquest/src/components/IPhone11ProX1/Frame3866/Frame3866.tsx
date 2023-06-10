import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame3866.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    rectangle3764?: boolean;
    rectangle3765?: boolean;
  };
  text?: {
    howAreYouFeelingToday?: ReactNode;
    great?: ReactNode;
    excited?: ReactNode;
  };
}
/* @figmaId 308:6 */
export const Frame3866: FC<Props> = memo(function Frame3866(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame3858}>
        {props.text?.howAreYouFeelingToday != null ? (
          props.text?.howAreYouFeelingToday
        ) : (
          <div className={classes.howAreYouFeelingToday}>How are you feeling today? </div>
        )}
        <div className={classes.frame3862}>
          {props.text?.great != null ? props.text?.great : <div className={classes.great}>Great!</div>}
        </div>
        <div className={classes.frame3863}>
          {props.text?.excited != null ? props.text?.excited : <div className={classes.excited}>Excited</div>}
        </div>
        <div className={classes.frame3864}>
          <div className={classes.stressed}>Stressed</div>
        </div>
        <div className={classes.frame3865}>
          <div className={classes.tired}>Tired</div>
        </div>
      </div>
      {!props.hide?.rectangle3764 && <div className={classes.rectangle3764}></div>}
      {!props.hide?.rectangle3765 && <div className={classes.rectangle3765}></div>}
    </div>
  );
});
