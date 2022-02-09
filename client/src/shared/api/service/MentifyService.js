import http from '../MentifyAPI'

const getAllUsers = () => {
    return http.get(`/users`)
}

const registerUser = (data) => {
    return http.post(`/users`, data)
}

export default {
    getAllUsers,
    registerUser
}