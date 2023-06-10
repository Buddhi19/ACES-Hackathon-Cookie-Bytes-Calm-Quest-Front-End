import { memo } from 'react';
import type { FC } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { IPhone11ProX1 } from './components/IPhone11ProX1/IPhone11ProX1';
import Profile from './components/camera/cam';
import {BrowserRouter as Router,Route, Link,Routes} from 'react-router-dom';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <Router>
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Routes>
        <Route path="/" element={<IPhone11ProX1/>}/>
        <Route path="/cam" element={<Profile/>}/>
      </Routes>
    </div>
    </Router>
  );
});
