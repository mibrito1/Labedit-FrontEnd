import { useEffect, useState } from "react";
import { ButtonPost } from "../components/buttonFade";
import { Header } from "../components/header";
import { PostBox } from "../components/postBox";
import { TextArea } from "../components/textArea";
import { useSecure } from "../hooks/useSecure";
import { createPost, getPost, likeDislikePost } from "../services/feedService";
import Modal from "../components/modal";

export function Feed() {
    useSecure()
    const [content, setContent] = useState("")
    const token = localStorage.getItem("token")
    const [posts, setPosts] = useState([])
    const [donoDoPost, setDonoDoPost] = useState(false)
    const [modalAberto, setModalAberto] = useState(false)
    async function getPosts() {
        const header = {
            headers: {
                Authorization: token
            }
        }
        const res = await getPost(header)
        console.log(res)
        setPosts(res || [])
    }
    async function createPosts(e) {
        e.preventDefault()
        const header = {
            headers: {
                Authorization: token
            }
        }
        const body = {
            content: content
        }
        const res = await createPost(body, header)
        console.log(res)
        getPosts()
    }
    async function likeDislikePosts(e, postId, value) {
        e.preventDefault()
        const header = {
            headers: {
                Authorization: token
            }
        }
        const body = {
            like: value
        }
        const res = await likeDislikePost(body, header, postId)
        console.log(res)
        if (res === "Voce não tem autorização") {
            console.log("aaaaaaaa")
            setDonoDoPost(true)
            setModalAberto(true)
            return
        }
        getPosts()
    }
    function fecharModal() {
        setDonoDoPost(false)
        setModalAberto(false)
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <>
            <Header />
            <main className="flex flex-col items-center ">
                <form onSubmit={createPosts} className=" flex flex-col mt-6 w-[22.5rem] gap-3">
                    <TextArea placeholder={"Escreva seu post..."} nome={"content"} valor={content} setValor={setContent} />
                    <ButtonPost text={"Postar"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E] mt-2" />
                </form>
                {donoDoPost && (
                    <Modal open={modalAberto} onClose={fecharModal} />
                )}
                <div className="flex flex-col gap-3 w-[22.5rem] mt-5">
                    {posts.map((post) => {
                        return (
                            <PostBox creatorName={post.creatorName} content={post.content} likes={post.likes} dislikes={post.dislikes} comments={post.comments} key={post.id} likeDislike={likeDislikePosts} postId={post.id} />
                        )
                    })}
                </div>
            </main>
        </>
    )
}