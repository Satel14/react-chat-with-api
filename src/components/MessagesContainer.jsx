import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import { addMessage, getMessage } from "../redux/reducers/dialogReducer"
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { getAuthUser, getDialogs, getUsers } from "../redux/reducers/selectors";

const MessagesContainer = ({ match, dialogs, addMessage, auth, users, getMessage }) => {

    const currentDialog = match.params.dialogId;
    const messages = dialogs.filter(d => d.dialogId === currentDialog);

    return (
        <Messages messages={messages} addMessage={addMessage}
        currentDialog={currentDialog} auth={auth}
        users={users} getMessage={getMessage} />
    )

};

const mapState = (state) => ({
    dialogs: getDialogs(state),
    auth: getAuthUser(state),
    users: getUsers(state)
});
export default compose(connect(mapState, { addMessage, getMessage }), withRouter)(MessagesContainer)