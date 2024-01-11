import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Dialogs from "./components/Dialogs/dialogs";
import Profile from "./components/Profile/profile";
import Message from "./components/Messages/message";

function App(props) {
    let messagesElements = props.state.dialogsPage.messages.map( m => <Message message={m.message} />)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs store={props.store}/>}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/messages" element={messagesElements}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
