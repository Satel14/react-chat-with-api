import React from "react";
import Avatar from "./Avatar";
import '../styles/MessageItem.scss';

const MessageItem = ({ messageText, createdAt, auth, userId, users }) => {

    const user = users.filter(user => user.userId === userId)[0];
    return (
        <div className={`message ${userId === auth ? 'message-mine' : ''}`} >
             <Avatar avatar={user.avatar} />
            <div className="message__item">
                <div className={`message__text ${userId === auth ? 'message__text-mine' : ''}`}>
                    <span>{messageText}</span>
                </div>
                <span className={`message__date ${userId === auth ? 'message__date-mine' : ''}`}>{createdAt}</span>
            </div>
        </div>
    )
}

export default MessageItem;