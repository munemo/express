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
    return http.get(`/logout`)
}


const userSession = (data) => {
    return http.get(`/login`, data)
}

/*
const userAuth = (data) => {
    return http.get(`/auth/users`,data )
}*/

export default {
    getAllUsers,
    registerUser,
    loginUser,
    userSession,
    //userAuth,
    logoutUser

}