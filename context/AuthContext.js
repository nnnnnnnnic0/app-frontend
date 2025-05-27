import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Solo se ejecuta una vez al cargar
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            fetch(process.env.NEXT_PUBLIC_AUTH_API_BASE + "/users/me", {
                headers: { Authorization: "Bearer " + storedToken }
            })
                .then((res) => (res.ok ? res.json() : null))
                .then((data) => {
                    if (data && data.username) setUserInfo(data);
                    else {
                        setUserInfo(null);
                        setToken(null);
                        localStorage.removeItem("token");
                    }
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const login = (newToken, info) => {
        setToken(newToken);
        setUserInfo(info);
        localStorage.setItem("token", newToken);
    };

    const logout = () => {
        setToken(null);
        setUserInfo(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, userInfo, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
