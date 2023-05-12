import jwt_decode from "jwt-decode";
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
        }

        return token !== "" && token !== undefined;
    }
}

export function logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    window.location.href = "/";
}
