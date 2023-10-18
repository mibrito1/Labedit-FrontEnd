import up from "../assets/up.svg"
import down from "../assets/down.svg"
import coment from "../assets/coment.svg"
import { useNavigate } from "react-router-dom"
import { goToComments } from "../router/coordinator"

export function PostBox({ creatorName, content, likes, dislikes, comments, likeDislike, postId }) {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-start justify-start h-fit  px-2.5 py-2 bg-neutral-100 border border-neutral-300 rounded-xl gap-4">
            <p className="text-center text-xs ">
                Enviado por: {creatorName}
            </p>
            <p className=" text-xl tracking-tight text-start break-words font-ibm font-medium">
                {content}
            </p>
            <div className="flex gap-[1.7rem]">
                <div className="border border-neutral-200 rounded-3xl items-center p-1 flex gap-3">
                    <button onClick={(e) => {
                        likeDislike(e, postId, true)
                    }}>
                        <img src={up} />
                    </button>
                    <p className="text-xs font-bold text-neutral-500">
                        {likes - dislikes}
                    </p>
                    <button onClick={(e) => {
                        likeDislike(e, postId, false)
                    }}>
                        <img src={down} />
                    </button>
                </div>
                {
                    comments !== null &&
                    <div className="border border-neutral-200 rounded-3xl items-center p-1 flex gap-3 px-3">
                        <button onClick={() => goToComments(navigate, postId)}>
                            <img src={coment} />
                        </button>
                        <p className="text-xs text-neutral-500">
                            {comments}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}
