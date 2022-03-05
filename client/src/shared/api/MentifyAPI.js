import Axios from 'axios'

Axios.defaults.withCredentials = true
localStorage.getItem("token")

const MentifyAPI = Axios.create({
    
    baseURL: 'http://localhost:4000',
   
})

export default MentifyAPI 