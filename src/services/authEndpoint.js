import axios from "axios"

const BaseUrl='api/'

export async function login(data){
    return await axios.post(BaseUrl+'login',data)
}
export async function signup(data){
    return await axios.post(BaseUrl+'signup',data)
}