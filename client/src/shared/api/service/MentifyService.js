import http from '../MentifyAPI'

const getAllUsers = () => {
    return http.get(`/users`)
}

const registerUser = (data) => {
    return http.post(`/users`, data)
}

const loginUser = (data) => {
    return http.post(`/login`, data)
}

const userSession = (data) => {
    return http.get(`/login`, data)
}

const userAuth = (data) => {
    return http.get(`/auth`,data )
}

export default {
    getAllUsers,
    registerUser,
    loginUser,
    userSession,
    userAuth

}