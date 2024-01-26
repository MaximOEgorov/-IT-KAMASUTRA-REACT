import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: "e6c96876-47ff-4d5a-b820-a4b0caca49c6"
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
        .then(response => {
            return response.data
        })
}

export const getMe = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}
export const deleteFollow = (id) => {
    return instance.delete(`follow/${id}`);
}

export const postFollow = (id) => {
    return instance.post(`follow/${id}`, null);
}