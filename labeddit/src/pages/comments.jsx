import { ButtonPost } from "../components/buttonFade";
import { Header } from "../components/header";
import { PostBox } from "../components/postBox";
import { TextArea } from "../components/textArea";

export function Comments() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center ">
                <form className=" flex flex-col mt-6 w-[22.5rem] gap-3">
                    <PostBox />
                    <TextArea placeholder={"Adiconar comentario"} />
                    <ButtonPost text={"Responder"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E] mt-2" />
                </form>
                <div className="flex flex-col gap-3 w-[22.5rem] mt-5">
                    <PostBox />
                    <PostBox />
                    <PostBox />
                </div>
            </main>

        </>
    )
}