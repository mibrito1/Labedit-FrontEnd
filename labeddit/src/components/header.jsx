import logo from "../assets/logo.svg"

export function Header() {
    return (
        <header className="w-full h-[6vh] bg-gray-200 relative flex ">
            <img className="absolute right-1/2 max-h-full h-[4vh] top-1.5 " src={logo} alt="logo" />
            <button className="text-[#4088cb] absolute right-4 top-1.5">
                Entrar
            </button>


        </header>
    )
}