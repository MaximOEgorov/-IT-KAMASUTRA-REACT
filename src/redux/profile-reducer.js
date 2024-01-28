import {usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 1},
        {id: 3, message: 'Yo!!', likesCount: 2},
        {id: 4, message: 'Fucking shit', likesCount: 15}
    ],
    newPostText: "It sample",
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}
export default profileReducer
