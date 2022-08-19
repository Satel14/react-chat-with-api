import React from "react";
import MessageItem from "./MessageItem";
import '../styles/Messages.scss';
import moment from 'moment';
import { getCurrentMemember } from "../utility/utility";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";

const Messages = ({ messages, addMessage, currentDialog, auth, users, getMessage }) => {
    const messagesItems = messages[0].messages.map(m => {
        const messageKey = `${currentDialog}_${m.messageId}`;
        const date = moment(m.createdAt).format('M/D/gg, h:mm a');
        return <MessageItem key={messageKey} messageText={m.messageText} createdAt={date} auth={auth} userId={m.userId} users={users} />
    });

    const memberId = messages[0].members.filter(m => m.userId !== auth)[0];
    const currentMember = getCurrentMemember(messages[0].members, auth, users);
    const message = React.createRef();

    const onSendMessage = () => {
        addMessage(currentDialog, message.current.value, 6);
        message.current.value = '';
        getMessage(currentDialog, memberId.userId)
    }
    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
            onSendMessage()
        }
    }
    return (
        <div className="messages">
            <div className="messages__header">
                <NavLink to='/' className="messages__back "><button>←</button></NavLink>
                <Avatar avatar={currentMember.avatar} online={currentMember.online} />
                <span>{currentMember.userName}</span>
            </div>
            <div className="messages__content"  >
                {messagesItems}
            </div>
            <div className="add-message">
                <input ref={message} type="text" placeholder="Type your message" onKeyDown={(e) => onPressEnter(e)} />
                <button onClick={onSendMessage} >
                    Send
                </button>
            </div>
        </div>
    )

}

export default Messages;