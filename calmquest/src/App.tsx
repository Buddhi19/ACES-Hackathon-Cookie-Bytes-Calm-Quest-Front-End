import { memo } from 'react';
import type { FC } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { IPhone11ProX1 } from './components/IPhone11ProX1/IPhone11ProX1';
import Profile from './components/camera/cam';
import {BrowserRouter as Router,Route, Link,Routes} from 'react-router-dom';
import { IPhone11ProX2 } from './components/IPhone11ProX2/IPhone11ProX2';
import { IPhone11ProX3 } from './components/IPhone11ProX3/IPhone11ProX3';
import { IPhone11ProX4 } from './components/IPhone11ProX4/IPhone11ProX4';
import { IPhone11ProX12 } from './components/IPhone11ProX12/IPhone11ProX12';
import { IPhone11ProX7 } from './components/IPhone11ProX7/IPhone11ProX7';
import { IPhone11ProX5 } from './components/IPhone11ProX5/IPhone11ProX5';
import { IPhone11ProX6 } from './components/IPhone11ProX6/IPhone11ProX6';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Routes>
        <Route path="/" element={<IPhone11ProX2/>}/>
        <Route path="/home" element={<IPhone11ProX1/>}/>
        <Route path="/appoinments" element={<IPhone11ProX3/>}/>
        <Route path="/cam" element={<Profile/>}/>
        <Route path="/help" element={<IPhone11ProX4/>}/>
        <Route path="/journal" element={<IPhone11ProX12/>}/>
        <Route path="/not" element={<IPhone11ProX7/>}/>
        <Route path="/doc" element={<IPhone11ProX5/>}/>
        <Route path="/chat" element={<IPhone11ProX6/>}/>
      </Routes>

    </div>
    </Router>
  );
});
