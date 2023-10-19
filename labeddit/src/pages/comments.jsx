import { useEffect, useState } from "react";
import { ButtonPost } from "../components/buttonFade";
import { Header } from "../components/header";
import { PostBox } from "../components/postBox";
import { TextArea } from "../components/textArea";
import { getPost, likeDislikePost } from "../services/feedService";
import { useParams } from "react-router-dom";
import { useSecure } from "../hooks/useSecure";
import Modal from "../components/modal";
import { createCommentsService, getCommentsServices, likeDislikeCommentsService } from "../services/commentsService";

export function Comments() {
    useSecure()

    const [donoDoPost, setDonoDoPost] = useState(false)
    const [modalAberto, setModalAberto] = useState(false)
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [conteudo, setConteudo] = useState("")
    const [mensageError, setmensageError] = useState("")

    const params = useParams()
    const token = localStorage.getItem("token")

    async function getPosts() {
        const header = {
            headers: {
                Authorization: token
            }
        }
        const res = await getPost(header)
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
        if (res === "Voce não tem autorização") {
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
        setComments(res || [])
    }
    async function createComments(e) {
        e.preventDefault()
        const header = {
            headers: {
                Authorization: token
            }
        }
        const body = {
            content: conteudo
        }
        if (!conteudo) {
            return
        }
        const res = await createCommentsService(header, body, params.id)
        setConteudo("")
        getComments()
        getPosts()
    }
    async function likeDislikeComment(e, commentId, value) {
        e.preventDefault()
        const header = {
            headers: {
                Authorization: token
            }
        }
        const body = {
            like: value
        }
        const res = await likeDislikeCommentsService(header, body, commentId, params.id)
        if (res === 'O criador nao deve curtir seu proprio comentário!') {
            setDonoDoPost(true)
            setModalAberto(true)
            setmensageError(res)
            return
        }
        getPosts()
        getComments()
    }
    function fecharModal() {
        setDonoDoPost(false)
        setModalAberto(false)
        setmensageError("")
    }
    useEffect(() => {
        getPosts()
        getComments()
    }, [])


    return (
        <>
            <Header />
            <main className="flex flex-col items-center ">
                <form onSubmit={createComments} className=" flex flex-col mt-6 w-[22.5rem] gap-3">
                    <PostBox creatorName={posts[0]?.creatorName} content={posts[0]?.content} likes={posts[0]?.likes} dislikes={posts[0]?.dislikes} comments={posts[0]?.comments} key={posts[0]?.id} likeDislike={likeDislikePosts} postId={posts[0]?.id} />
                    <TextArea placeholder={"Adiconar comentario"} nome={"comentario"} valor={conteudo} setValor={setConteudo} />
                    <ButtonPost text={"Responder"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E] mt-2" />
                </form>
                {donoDoPost && (
                    <Modal open={modalAberto} onClose={fecharModal} mensageError={mensageError} />
                )}
                <div className="flex flex-col gap-3 w-[22.5rem] mt-5">
                    {comments.map((comment) => {
                        return (
                            <PostBox creatorName={comment.creatorName} content={comment.content} likes={comment.likes} dislikes={comment.dislikes} comments={null} key={comment.id} likeDislike={likeDislikeComment} postId={comment.id} />
                        )
                    })}
                </div>
            </main>

        </>
    )
}
