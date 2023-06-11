import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX13.module.css';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';
import { ChangeEvent, useState } from "react";


interface Props {
  className?: string;
}
/* @figmaId 367:77 */
export const IPhone11ProX13: FC<Props> = memo(function IPhone11ProX13(props = {}) {
  const [InputText,setInputText]=useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._2022611}>2022/06/11</div>
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
      <div className={classes.frame3871}>
        <div className={classes.iFeltSoGoodToday}><input type="text"onChange={handleChange} placeholder="I felt so good today."/></div>
      </div>
      <div className={classes.frame3864}>
        <div className={classes.submit}>Submit</div>
      </div>
    </div>
  );
});
