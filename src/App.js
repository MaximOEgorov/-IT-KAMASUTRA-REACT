import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Message from "./components/Messages/message";
import Profile from "./components/Profile/profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    let messagesElements = props.state.dialogsPage.messages.map( m => <Message message={m.message} />)
    console.log(props)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<DialogsContainer store={props.store} />}/>
                    <Route path="/profile" element={<Profile props={props.store} />}/>
                    <Route path="/messages" element={messagesElements}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
