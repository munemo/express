import http from '../MentifyAPI'

const getAllUsers = () => {
    return http.get(`/users`)
}

const registerUser = () => {
    return http.post(`/users`)
}

export default {
    getAllUsers,
    registerUser
}