const API_BASE = process.env.NEXT_PUBLIC_AUTH_API_BASE || "http://localhost:8000";

// Login: devuelve token JWT
export async function login(username, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    let data;
    try {
        data = await res.json();
    } catch {
        // Si la respuesta NO es JSON, la mostramos como texto
        const text = await res.text();
        console.error("Respuesta no es JSON:", text);
        throw new Error("Respuesta inesperada del servidor (no JSON)");
    }
    if (!res.ok) {
        console.error("Login error:", data);
        throw new Error(data?.detail || "Credenciales incorrectas");
    }
    return data;
}


// Obtener info del usuario autenticado
export async function getMe(token) {
    const res = await fetch(`${API_BASE}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    if (!res.ok) {
        console.error("getMe error:", data);
        throw new Error("Token inválido o expirado");
    }
    return data; // { username, role }
}