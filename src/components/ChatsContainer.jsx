import React from "react";
import { connect } from "react-redux";
import { setChatFilter } from "../redux/reducers/dialogReducer"
import Chats from "./Chats";
import '../styles/Chats.scss';
import { getUsers, sortDialogsByDate} from "../redux/reducers/selectors";
import { filterChatsBySearch } from "../utility/utility";

const ChatsContainer = ({users, auth,setChatFilter, chatFilter, dialogs}) => {
    
    const filtedDialogs = filterChatsBySearch(dialogs,chatFilter);

    return (
        <Chats dialogs={filtedDialogs} users={users}  auth={auth} setChatFilter={setChatFilter} 
         chatFilter={chatFilter}/>
    ) 
}

const mapState = (state) => ({
    dialogs: sortDialogsByDate(state),
    users: getUsers(state),
    auth: state.auth,
    chatFilter: state.dialogs.chatFilter
});

export default connect(mapState, {setChatFilter})(ChatsContainer);