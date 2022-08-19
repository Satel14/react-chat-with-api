import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from "react-router";
import ChatsContainer from "./components/ChatsContainer";
import MessagesContainer from "./components/MessagesContainer";
import './styles/Dialogs.scss';
function App() {
    return (
        <BrowserRouter>
            <div className="dialogs">
                <Route path="/" render={() => <ChatsContainer />} />
                <Route path="/:dialogId" render={() => <MessagesContainer />} />
                <Redirect from="*" to="/" />
            </div>
        </BrowserRouter>
    );
}

export default App;
