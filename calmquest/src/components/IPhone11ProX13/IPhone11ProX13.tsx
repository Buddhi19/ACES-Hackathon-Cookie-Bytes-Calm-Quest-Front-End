import React, { memo } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX13.module.css';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';
import { ChangeEvent, useState } from "react";
import axios from 'axios';

let some_str = 'Default string';
interface Props {
  className?: string;
}
/* @figmaId 367:77 */
export const IPhone11ProX13: FC<Props> = memo(function IPhone11ProX13(props = {}) {
  const [InputText,setInputText]=useState("");
  const [responseText, setResponseText] = useState('');


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    some_str = e.target.value;
    console.log("Running change");
  };
  const submitbuttonhandler=React.useCallback(async ()=>{
    console.log(some_str);
   await axios.post('http://192.168.252.9:5000/text', {"text":some_str},{headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }}
    ).then((response)=>{
      console.log(response);
      setResponseText(JSON.stringify(response.data.emotion));
      console.log(response.data.emotion);
    });

  },[]);
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
      <button onClick={submitbuttonhandler}>
      <div className={classes.frame3864}>
        <div className={classes.submit}>Submit</div>
      </div>
      </button>
      <div className={classes.result}>
      {responseText && <p className="response">{JSON.parse(responseText)}</p>}
      </div>
    </div>
  );
});
