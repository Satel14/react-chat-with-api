import React from "react";
import Avatar from "./Avatar";
import '../styles/ChatItem.scss';

const ChatItem = ({ currentMember, lastMessage, memberName, createdAt }) => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <Avatar avatar={currentMember.avatar} online={currentMember.online} />
                <div className="chat__context">
                    <span className="chat__name">{memberName}</span>
                    <span className="chat__lastMessage">{lastMessage}</span>
                </div>
            </div>
            <span className="chat__date">{createdAt}</span>
        </div>
    )
}

export default ChatItem;