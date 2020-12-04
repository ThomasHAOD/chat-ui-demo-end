import React from 'react';
import classes from './Message.module.scss';
import BletherBotAvatar from '../../../../assets/images/YS_Generic_User-01.png';
import UserAvatar from '../../../../assets/images/YS_Generic_User-01.png';
import { getTime } from '../../../../helpers/getTime';

export interface Props {
  message: {message:string, user: string};
}

const MessageElement = ({ message }: Props) => {
  let image = UserAvatar;
  const textboxClasses = [classes.TextBox];
  const isChatbot = message.user !== 'Me';
  const messageTime = getTime();

  isChatbot ? textboxClasses.push(classes.Friend) : textboxClasses.push(classes.User);

  isChatbot && (image = BletherBotAvatar);

  return (

    <div className={classes.Message}>
      {isChatbot && <img src={image} alt="sender's avatar" />}
      <figure className={textboxClasses.join(' ')}>
  <p className={classes.MessageText}>{message.user}: {message.message}</p>
        <p className={classes.MessageTime}>{messageTime}</p>
      </figure>
      {!isChatbot && <img src={image} alt="sender's avatar" />}
    </div>);

};

export default MessageElement;
