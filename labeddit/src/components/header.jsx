import { useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import { logout } from "../services/authservice"
import { goToFeed, goToLogin } from "../router/coordinator"
import x from "../assets/x.svg"

export function Header() {
    const path = useLocation()
    const navigate = useNavigate()
    return (
        <header className="w-full h-[6vh] bg-gray-200 relative flex ">
            {path.pathname.includes("comments") && <button onClick={() => goToFeed(navigate)} className="absolute left-8 top-1.5 w-fit">
                <img src={x} alt="voltar" />
            </button>}
            <img className="absolute right-1/2 max-h-full h-[4vh] top-1.5 " src={logo} alt="logo" />
            <button onClick={path.pathname !== "/signup" ? () => (logout(), goToLogin(navigate)) : () => goToLogin(navigate)} className="text-[#4088cb] absolute right-4 top-1.5">
                {path.pathname !== "/signup" ? "Logout" : "Entrar"}
            </button>
        </header>
    )
}