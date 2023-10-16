export const goToSignup = (navigate) => {
    navigate("/signup")
}
export function goToLogin(navigate) {
    navigate("/login")
}
export function goToFeed(navigate) {
    navigate("/")
}
export function goToComments(navigate, postId) {
    navigate(`/post/${postId}/comments`)
}

