import http from '../MentifyAPI'

const getAllUsers = () => {
    return http.get(`/users`)
}

const registerUser = (data) => {
    return http.post(`/users`, data)
}

const loginUser = (data) => {
    return http.post(`/users/login`, data)
}

const logoutUser = () => {
    return http.post(`/users/logout`)
}


const deleteUserById = (data) => {
    return http.get(`/users/delete`,data)
}

export default {
    getAllUsers,
    registerUser,
    loginUser,
    deleteUserById,
    logoutUser
}