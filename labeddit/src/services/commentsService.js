import axios from "axios"
import { baseUrl } from "../constantes/baseUrl"


export async function getCommentsServices(headers, postId) {
    try {
        const res = await axios.get(`${baseUrl}/comment/${postId}`, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}