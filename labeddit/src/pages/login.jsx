import logo from "../assets/logo.svg"
import { Buttonfade } from "../components/buttonFade"
import { Input } from "../components/input"

export function Login() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <img src={logo} alt="logo" />
            <h1 className="text-4xl font-bold mt-2  ">LabEddit</h1>
            <h2 className="mt-1">O projeto de rede social da Labenu</h2>
            <form className="flex flex-col gap-2 mt-16">
                <Input placeholder={"E-mail"} />
                <Input placeholder={"Senha"} />
                <div className="flex flex-col gap-3 mt-10">
                    <Buttonfade text={"Continuar"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E]" />
                    <button className="border-orange-500 border py-2 text-orange-500 font-semibold rounded-full">Crie uma conta!</button>
                </div>
            </form>

        </main>
    )
}   