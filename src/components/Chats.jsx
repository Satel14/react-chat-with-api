import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem";
import moment from 'moment';
import { getCurrentMemember } from "../utility/utility";
import Avatar from "./Avatar";
import '../styles/Chats.scss';

const Chats = ({ users, auth, setChatFilter, chatFilter, dialogs }) => {

    const dialogsItems = dialogs.map(d => {

        const lastMessage = d.messages[d.messages.length - 1];
        const date = moment(lastMessage.createdAt).format('ll');

        const currentMember = getCurrentMemember(d.members, auth.userId, users);
        const memberName = (lastMessage.userId === auth.userId) ? 'Me' : currentMember.userName;

        return <NavLink to={`/${d.dialogId}`} className="chat__item" key={`${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText}
                createdAt={date} currentMember={currentMember} memberName={memberName} />
        </NavLink>
    })
    const onChatFilterChange = (e) => {
        setChatFilter(e.currentTarget.value)
    }
    return (
        <div className="chats">
            <div className="chats__header">
                <div className="chats__search">
                        <div className="chats__user">
                            <Avatar avatar={auth.avatar} online={auth.islogin} />
                            {auth.islogin ? <span>{auth.userName}</span> : null}
                        </div>
                        <div className="chat__form">
                            <input type="text"
                                placeholder="Search or start new chat"
                                value={chatFilter}
                                onChange={(e) => onChatFilterChange(e)} />
                        </div>
                </div>
            </div>
            <h2>Chats</h2>
            <div className="chats__wrapper">
                {dialogsItems}
            </div>
        </div>
    )
}

export default Chats;