import { useEffect, useState } from "react";
import { ButtonPost } from "../components/buttonFade";
import { Header } from "../components/header";
import { PostBox } from "../components/postBox";
import { TextArea } from "../components/textArea";
import { getPost, likeDislikePost } from "../services/feedService";
import { useParams } from "react-router-dom";
import { useSecure } from "../hooks/useSecure";
import Modal from "../components/modal";
import { getCommentsServices } from "../services/commentsService";

export function Comments() {
    useSecure()
    const [donoDoPost, setDonoDoPost] = useState(false)
    const [modalAberto, setModalAberto] = useState(false)
    const token = localStorage.getItem("token")
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const params = useParams()
    async function getPosts() {
        const header = {
            headers: {
                Authorization: token
            }
        }
        const res = await getPost(header)
        console.log(res.filter(post => post.id === params.id))
        setPosts(res.filter(post => post.id === params.id) || [])
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

    async function getComments() {
        const header = {
            headers: {
                Authorization: token
            }
        }
        const res = await getCommentsServices(header, params.id)
        console.log(res)
        setComments(res || [])
    }

    function fecharModal() {
        setDonoDoPost(false)
        setModalAberto(false)
    }
    useEffect(() => {
        getPosts()
        getComments()
    }, [])


    return (
        <>
            <Header />
            <main className="flex flex-col items-center ">
                <form className=" flex flex-col mt-6 w-[22.5rem] gap-3">
                    <PostBox creatorName={posts[0]?.creatorName} content={posts[0]?.content} likes={posts[0]?.likes} dislikes={posts[0]?.dislikes} comments={posts[0]?.comments} key={posts[0]?.id} likeDislike={likeDislikePosts} postId={posts[0]?.id} />
                    <TextArea placeholder={"Adiconar comentario"} />
                    <ButtonPost text={"Responder"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E] mt-2" />
                </form>
                {donoDoPost && (
                    <Modal open={modalAberto} onClose={fecharModal} />
                )}
                <div className="flex flex-col gap-3 w-[22.5rem] mt-5">
                    {comments.map((comment) => {
                        return (
                            <PostBox creatorName={comment.creatorName} content={comment.content} likes={comment.likes} dislikes={comment.dislikes} comments={null} key={comment.id} likeDislike={likeDislikePosts} postId={comment.id} />
                        )
                    })}
                </div>
            </main>

        </>
    )
}
