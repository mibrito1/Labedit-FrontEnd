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

export async function createCommentsService(headers, body, postId) {
    try {
        const res = await axios.post(`${baseUrl}/comment/${postId}`, body, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
export async function likeDislikeCommentsService(headers, body, commentId, postId) {
    try {
        const res = await axios.put(`${baseUrl}/comment/${postId}/${commentId}/like`, body, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}