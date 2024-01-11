
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";


let store = {
    _state:
        {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hi, how are you?', likesCount: 12},
                    {id: 2, message: 'It\'s my first post!', likesCount: 1},
                    {id: 3, message: 'Yo!!', likesCount: 2},
                    {id: 4, message: 'Fucking shit', likesCount: 15}
                ],
                newPostText: "It sample"
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Dimych'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sveta'},
                    {id: 4, name: 'Sasha'},
                ],
                messages: [
                    {id:1, message: 'Hi'},
                    {id:2, message: 'How are you'},
                    {id:3, message: 'Yo'},
                    {id:4, message: 'Yes'},
                    {id:5, message: 'Happy New Year'},
                    {id:6, message: 'Marry Chrystmas'},
                ],
                newMessageBody: ""
            },
            sidebar: {},
        },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id : 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.posts.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message: body});
            this._callSubscriber(this._state)
        }
    }
}

export const state = store.getState();
export const addPostActionCreator = () => ({type:ADD_POST });
export const updateNewTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store