import { ButtonPost } from "../components/buttonFade";
import { Header } from "../components/header";
import { PostBox } from "../components/postBox";
import { TextArea } from "../components/textArea";
import { useSecure } from "../hooks/useSecure";


export function Feed() {
    useSecure()
    return (
        <>
            <Header />
            <main className="flex flex-col items-center ">
                <form className=" flex flex-col mt-6 w-[22.5rem] gap-3">
                    <TextArea placeholder={"Escreva seu post..."} />
                    <ButtonPost text={"Postar"} />
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