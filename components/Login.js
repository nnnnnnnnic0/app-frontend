import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, User, Lock, Loader2, Home } from "lucide-react";
import { login, getMe } from "@/services/auth";

// SVG de fondo: Torres del Paine
const TorresSVG = () => (
    <svg viewBox="0 0 390 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" /> {/* altiblueLight */}
            <stop offset="1" stopColor="#2563eb" /> {/* altiblue */}
        </linearGradient>
        <rect width="390" height="180" fill="url(#sky)" />
        {/* Montaña base */}
        <path d="M0 160 Q50 130 90 150 Q120 120 180 150 Q210 140 250 165 Q310 140 390 170 V180 H0 Z"
            fill="#64748b" opacity="0.5" />
        {/* Torres del Paine estilizadas */}
        <path d="M70 150 Q90 110 100 160 Q105 140 110 155 Q120 90 125 170 Q135 150 140 165 Q150 120 153 175" stroke="#fff" strokeWidth="3" fill="none" />
        <path d="M220 155 Q225 110 232 160 Q240 130 245 170 Q250 120 255 165 Q262 110 268 175" stroke="#fff" strokeWidth="3" fill="none" />
        {/* Cerro Paine Grande (centro) */}
        <path d="M170 150 Q185 80 190 170 Q200 110 205 160 Q215 80 222 175" stroke="#fff" strokeWidth="4" fill="none" />
    </svg>
);

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const result = await login(username, password);
            localStorage.setItem("token", result.access_token);
            const info = await getMe(result.access_token);
            if (onLogin) onLogin(result.access_token, info);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-altiwhite overflow-hidden">
            {/* Fondo gradiente + SVG montaña */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-altiblueLight via-altiblue to-altigray opacity-90" />
                <TorresSVG />
            </div>
            {/* Link a Home */}
            <Link
                href="/"
                className="flex items-center gap-2 z-10 mt-8 mb-3 hover:underline text-altiblueLight font-semibold text-sm bg-altiwhite/80 px-3 py-2 rounded-lg shadow-sm backdrop-blur-md transition"
                style={{ position: 'absolute', top: 18, left: 18 }}
            >
                <Home size={18} />
                <span>Volver a inicio</span>
            </Link>
            {/* Login card */}
            <div className="relative z-10 w-full max-w-sm bg-altiwhite/90 rounded-2xl shadow-2xl p-7 sm:p-9 backdrop-blur-sm border border-altiblue/30 mt-16 mb-10">
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="/alticloud.png"
                        alt="AltiCloud Logo"
                        width={54}
                        height={54}
                        className="rounded-xl bg-altiwhite shadow"
                        priority
                    />
                    <h1 className="text-2xl font-black tracking-tight text-altiblue mt-3">
                        ERP AltiCloud
                    </h1>
                    <span className="text-altiblueLight text-base font-semibold mt-1">Demo</span>
                </div>
                <form onSubmit={handleLogin} className="space-y-5 mt-4">
                    <div className="relative">
                        <label className="block text-altigray font-semibold mb-1" htmlFor="username">
                            Usuario
                        </label>
                        <span className="absolute left-3 top-8 text-altiblueLight">
                            <User size={18} />
                        </span>
                        <input
                            id="username"
                            type="text"
                            autoFocus
                            autoComplete="username"
                            className="w-full rounded-lg border border-altiblueLight px-9 py-2 focus:ring-2 focus:ring-altiblue focus:outline-none text-altiblue bg-altiwhite"
                            placeholder="Ingrese su usuario"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            disabled={loading}
                            required
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-altigray font-semibold mb-1" htmlFor="password">
                            Contraseña
                        </label>
                        <span className="absolute left-3 top-8 text-altiblueLight">
                            <Lock size={18} />
                        </span>
                        <input
                            id="password"
                            type={showPass ? "text" : "password"}
                            autoComplete="current-password"
                            className="w-full rounded-lg border border-altiblueLight px-9 py-2 focus:ring-2 focus:ring-altiblue focus:outline-none text-altiblue bg-altiwhite"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={loading}
                            required
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            className="absolute right-3 top-8 text-altiblueLight hover:text-altiblue"
                            onClick={() => setShowPass(v => !v)}
                            aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
                        >
                            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-altiblue hover:bg-altiblueLight text-altiwhite font-bold flex items-center justify-center transition disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader2 className="animate-spin mr-2" size={20} />
                        ) : null}
                        {loading ? "Ingresando..." : "Iniciar sesión"}
                    </button>
                </form>
                {error && (
                    <div className="mt-4 bg-alticoral/20 border-l-4 border-alticoral text-alticoral px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M10 1.5l8.66 15H1.34L10 1.5zm0 3.66L3.4 15.5h13.2L10 5.16zM9 8h2v4H9V8zm0 6h2v2H9v-2z" /></svg>
                        {error}
                    </div>
                )}
                <div className="mt-6 text-center text-xs text-altigray opacity-80">
                    © {new Date().getFullYear()} AltiCloud. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}
