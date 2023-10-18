import axios from "axios"
import { baseUrl } from "../constantes/baseUrl"


export async function getPost(headers) {
    try {
        const res = await axios.get(`${baseUrl}/post`, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
export async function createPost(body, headers) {
    try {
        const res = await axios.post(`${baseUrl}/post`, body, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
export async function likeDislikePost(body, headers, postId) {
    try {
        const res = await axios.put(`${baseUrl}/post/${postId}/like`, body, headers)
        return res.data
    } catch (error) {
        return error.response.data
    }
}
