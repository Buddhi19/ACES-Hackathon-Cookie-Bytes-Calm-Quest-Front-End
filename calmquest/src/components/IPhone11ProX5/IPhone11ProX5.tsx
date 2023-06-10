import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ContainerIcon } from './ContainerIcon';
import { Ellipse3911Icon } from './Ellipse3911Icon';
import { Ellipse3915Icon } from './Ellipse3915Icon';
import { Ellipse3916Icon } from './Ellipse3916Icon';
import { Ellipse3917Icon } from './Ellipse3917Icon';
import { Ellipse3918Icon } from './Ellipse3918Icon';
import { Ellipse3919Icon } from './Ellipse3919Icon';
import { Ellipse3920Icon } from './Ellipse3920Icon';
import { Ellipse3921Icon } from './Ellipse3921Icon';
import { HomeIcon } from './HomeIcon';
import classes from './IPhone11ProX5.module.css';
import { MapPinIcon } from './MapPinIcon';
import { ShoppingBagIcon } from './ShoppingBagIcon';
import { UserIcon } from './UserIcon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 312:18 */
export const IPhone11ProX5: FC<Props> = memo(function IPhone11ProX5(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.helloPraveen}>Hello, Praveen!</div>
      <div className={classes.iosStatusBarBlack}>
        <div className={classes.Time}>9:41</div>
        <div className={classes.container}>
          <ContainerIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.shoppingBag}>
        <ShoppingBagIcon className={classes.icon2} />
      </div>
      <div className={classes.ellipse3911}>
        <Ellipse3911Icon className={classes.icon3} />
      </div>
      <div className={classes._2}>2</div>
      <div className={classes.frame3860}>
        <div className={classes.ellipse3915}>
          <Ellipse3915Icon className={classes.icon4} />
        </div>
        <div className={classes.ellipse3916}>
          <Ellipse3916Icon className={classes.icon5} />
        </div>
        <div className={classes.hopeYouHaveAWonderfulDay}>Hope you have a wonderful Day!</div>
        <div className={classes.frame3857}>
          <div className={classes.talkToACounselor}>Talk to a counselor</div>
        </div>
        <div className={classes.frame3858}>
          <div className={classes.dailyJournal}>Daily Journal</div>
        </div>
        <div className={classes.bengalKittenIsolated2}></div>
        <div className={classes.ellipse3917}>
          <Ellipse3917Icon className={classes.icon6} />
        </div>
        <div className={classes.ellipse3918}>
          <Ellipse3918Icon className={classes.icon7} />
        </div>
        <div className={classes.ellipse3919}>
          <Ellipse3919Icon className={classes.icon8} />
        </div>
        <div className={classes.ellipse3921}>
          <Ellipse3921Icon className={classes.icon9} />
        </div>
        <div className={classes.ellipse3920}>
          <Ellipse3920Icon className={classes.icon10} />
        </div>
        <div className={classes.frame3859}>
          <div className={classes.chatWithACounselorAnonymously}>Chat with a counselor Anonymously</div>
        </div>
      </div>
      <div className={classes.frame3868}>
        <div className={classes.user}>
          <UserIcon className={classes.icon11} />
        </div>
        <div className={classes.messageCircle}></div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon12} />
        </div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon13} />
        </div>
        <div className={classes.rectangle3765}></div>
      </div>
      <div className={classes.frame3864}>
        <div className={classes.frame3862}>
          <div className={classes.yourAppointments}>Your Appointments</div>
        </div>
        <div className={classes.frame3861}>
          <div className={classes.helpAFriend}>Help a Friend</div>
        </div>
        <div className={classes.frame3863}>
          <div className={classes.yourCounselor}>Your Counselor</div>
        </div>
      </div>
      <div className={classes.frame38642}>
        <div className={classes.changeYourCounselor}>Change your Counselor</div>
      </div>
      <div className={classes.frame3866}>
        <div className={classes.rectangle3764}></div>
        <div className={classes.frame38582}>
          <div className={classes.drWatson}>Dr. Watson </div>
          <div className={classes.generalHospitalPeradeniya}>General Hospital, Peradeniya</div>
          <div className={classes.frame3865}>
            <div className={classes.mapPin}>
              <MapPinIcon className={classes.icon14} />
            </div>
            <div className={classes._10km}>10km</div>
          </div>
          <div className={classes.frame38583}>
            <div className={classes.contact}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
});
