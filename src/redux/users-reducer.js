const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
            followed: false,
            fullName: "Dmitry",
            status: "I'm boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2, photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
            followed: false,
            fullName: "Svetlana",
            status: "I'm lector",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
            followed: true,
            fullName: "Maxim",
            status: "Team-lead",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 4, photoUrl: "https://www.games-of-thrones.ru/sites/default/files/pictures/allll/Nagiev/7.jpg",
            followed: false,
            fullName: "Victor",
            status: "I'm student",
            location: {city: "Lublin", country: "Poland"}
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;