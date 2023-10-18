import { useState } from "react";
import { Buttonfade } from "../components/buttonFade";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { register } from "../services/authservice";
import { goToFeed } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

export function Register() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [apelido, setApelido] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    async function submit(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: senha,
            name: apelido
        }
        const res = await register(body)
        if (apelido.length < 2) {
            setError("O apelido deve ter mais que dois caracteres!")
            return
        }
        else if (res[0]?.validation === "email") {
            setError("Formato do e-mail invalido!")
            return
        }
        else if (senha.length < 6 || res === "Senha invalida!") {
            setError("Senha deve conter mais que 6 caracteres!")
            return
        }
        else if (res === "usuario ja existe") {
            setError("Email ja cadastrado!")
            return
        }
        setError("")
        localStorage.setItem("token", res.token)
        goToFeed(navigate)

    }
    return (
        <>
            <Header />
            <main className="min-h-[94vh] mt-6 flex flex-col ">
                <h1 className="font-bold text-3xl ml-9 ">Olá, boas vindas ao LabEddit ;&#41;</h1>
                <form onSubmit={submit} className="flex flex-col w-screen items-center gap-2 mt-28 ">
                    {error &&
                        <p className="text-red-500 text-xl text-center ">
                            {error}
                        </p>}
                    < Input placeholder={"Apelido"} nome={"apelido"} valor={apelido} setValor={setApelido} />
                    < Input placeholder={"E-mail"} nome={"email"} valor={email} setValor={setEmail} />
                    < Input placeholder={"Senha"} nome={"senha"} valor={senha} setValor={setSenha} />
                    <p className="w-[22rem] ml-10 mt-10 text-sm tracking-tight">Ao continuar, você concorda com o nosso <span className="cursor-pointer text-blue-700">Contrato de usuário</span> e nossa <span className="cursor-pointer text-blue-700">Política de Privacidade</span></p>
                    <div className="flex items-center justify-center h-8 w-full ml-3">
                        <input className="w-4 h-4" type="checkbox" />
                        <p className="text-sm ml-2 tracking-tight mt-3">
                            Eu concordo em receber emails sobre coisas legais <br /> no Labeddit
                        </p>
                    </div>
                    <div className="w-full flex justify-center mt-5">
                        <Buttonfade text={"Cadastrar"} />
                    </div>

                </form>

            </main>

        </>
    )
}