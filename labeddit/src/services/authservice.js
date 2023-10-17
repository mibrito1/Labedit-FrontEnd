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