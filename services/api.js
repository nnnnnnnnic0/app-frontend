const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export async function ping() {
    const res = await fetch(`${API_BASE}/ping`);
    return res.json();
}
