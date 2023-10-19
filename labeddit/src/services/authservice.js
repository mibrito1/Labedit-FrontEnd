import axios from "axios"
import { baseUrl } from "../constantes/baseUrl"

export async function login(body) {
    try {
        const res = await axios.post(`${baseUrl}/user/login`, body)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
export async function register(body) {
    try {
        const res = await axios.post(`${baseUrl}/user/signup`, body)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
export function logout() {
    localStorage.removeItem("token")

}