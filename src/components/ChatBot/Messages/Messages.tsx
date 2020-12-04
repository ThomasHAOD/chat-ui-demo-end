import React, { useEffect } from 'react';
import MessageElement from './Message/Message';
import classes from './Messages.module.scss';
import TypingIndicator from '../../ui/TypingIndicator/TypingIndicator';

interface Props {
  messageHistory: {message: string, user: string}[];
  typing: boolean;
  dummy: React.RefObject<HTMLDivElement>;
}

const Messages = ({ messageHistory, typing, dummy }: Props) => {

  const createMessage = (msg: {message: string, user: string}, index: number) => msg.message ? <MessageElement message={msg} key={index} /> : null;

  const messageElements = messageHistory.map(createMessage);

  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <section className={classes.Messages}>
      {messageElements}
      {typing && <TypingIndicator />}
      <div ref={dummy} />
    </section>
  );
};

export default Messages;
