//This file is a service file to handle all the HTTP related work for authSlice and setting any data in local storage

//axios lets us make http requests like in postman, but within our applicaiton
import axios from "axios" 

const API_URL = '/api/users/'

//Register User
const register = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService