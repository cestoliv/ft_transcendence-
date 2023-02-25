import React, { ChangeEvent, useEffect, useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { SocketContext } from '../context/socket';

import { IChannel, IUser, IChannelMessage, IUserMessage } from '../interfaces';

type FriendConvMessagesProps = {
	user_me : IUser,
	chan_id : number,
    allPrivateConvMessages : IUserMessage[];
};

export const FriendConvMessages = (props: FriendConvMessagesProps) => {

	return (
		<div className='chat-messages-wrapper'>

            {props.allPrivateConvMessages && props.allPrivateConvMessages.filter(message => {
                  if ((props.chan_id ===  message.receiverId && message.senderId === props.user_me.id) || (props.chan_id ===  message.senderId && message.receiverId === props.user_me.id))
                    return true;
                  return false
                })
                .map((message, index) => (
                    <div key={index} className="display-message">
                        <div className='message-name-date'><p className='message-name'>{message?.sender.username}</p><p className='message-date'>{message?.sentAt.toString()}</p></div>
                        <p className='message'>{message?.message}</p>
                    </div>
                ))
              }
	</div>
	);
};

export default FriendConvMessages;