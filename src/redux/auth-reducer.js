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

export const loginSubmit = (email, password, rememberMe) => (dispatch) => {
    usersAPI.login(email, password, rememberMe)
        .then(response => {
            try {
                if (response.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    const err = response.messages?.length > 0 ? response.messages[0] : "Email or password is wrong"
                    console.error("An error occurred while calling response:", err)
//        return dispatch(stopSubmit("login", { _error: err }));
                }
            } catch (error) {
                console.error("An error occurred while calling usersAPI.login:", error);
            }
        })
};

export const logout = () => (dispatch) => {
    usersAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;