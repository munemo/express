import Axios from 'axios'

const MentifyAPI = Axios.create({
    baseURL: 'http://localhost:4000',
})

export default MentifyAPI 