import { Buttonfade } from "../components/buttonFade";
import { Header } from "../components/header";
import { Input } from "../components/input";

export function Register() {
    return (
        <>
            <Header />
            <main className="min-h-[94vh] mt-6 flex flex-col ">
                <h1 className="font-bold text-3xl ml-9 ">Olá, boas vindas ao LabEddit ;&#41;</h1>
                <form className="flex flex-col w-screen items-center gap-2 mt-28 ">
                    < Input placeholder={"Apelido"} />
                    < Input placeholder={"E-mail"} />
                    < Input placeholder={"Senha"} />
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