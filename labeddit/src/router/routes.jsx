import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Feed } from "../pages/feed"
import { Login } from "../pages/login"
import { Register } from "../pages/register"
import { Comments } from "../pages/comments"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/post/:id/comments" element={<Comments />} />
                <Route path="*" element={<Navigate to={"/"} />} />

            </Routes>
        </BrowserRouter>
    )
}