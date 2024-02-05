import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null, // 2,
    email: null, //  'blabla@bla.bla',
    login: null, //  'samurai',
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => (dispatch) => {
    usersAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const loginSubmit = (email, password, rememberMe) => async (dispatch) => {
    let loginData = await usersAPI.login(email, password, rememberMe)
    let resultCode = loginData.resultCode
//        .then(response => {
            if (resultCode === 0) {
                await dispatch(getAuthUserData());
            } else {
                alert('resultCode === '+resultCode)
            }
//        })
}

export const logout = () => (dispatch) => {
    debugger
    usersAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;