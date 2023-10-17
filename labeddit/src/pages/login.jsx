import { useState } from "react"
import logo from "../assets/logo.svg"
import { Buttonfade } from "../components/buttonFade"
import { Input } from "../components/input"
import { login } from "../services/authservice"
import { goToFeed, goToSignup } from "../router/coordinator"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    async function submit(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: senha
        }
        const res = await login(body)
        if (res[0]?.validation === "email") {
            setError("Formato do e-mail invalido!")
            return
        }
        else if (res === "recurso não encontrado") {
            setError("E-mail não cadastrado!")
            return
        }
        else if (senha.length < 6 || res === "Senha invalida!") {
            setError("Senha invalida!")
            return
        }
        setError("")
        localStorage.setItem("token", res.token)
        goToFeed(navigate)
    }
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <img src={logo} alt="logo" />
            <h1 className="text-4xl font-bold mt-2">LabEddit</h1>
            <h2 className="mt-1">O projeto de rede social da Labenu</h2>
            <form onSubmit={submit} className="flex flex-col gap-2 mt-16">
                {error &&
                    <p className="text-red-500 text-xl ">
                        {error}
                    </p>}
                <Input placeholder={"E-mail"} nome={"email"} valor={email} setValor={setEmail} />
                <Input placeholder={"Senha"} nome={"senha"} valor={senha} setValor={setSenha} />
                <div className="flex flex-col gap-3 mt-10">
                    <Buttonfade text={"Continuar"} />
                    <div className="h-px bg-gradient-to-r from-[#FF6489] to-[#F9B24E]" />
                    <button type="button" onClick={() => goToSignup(navigate)} className="border-orange-500 border py-2 text-orange-500 font-semibold rounded-full">Crie uma conta!</button>
                </div>
            </form>
        </main>
    )
}   