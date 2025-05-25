// components/Footer.js
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1e293b] text-white py-7 mt-0">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                {/* Logo + Marca */}
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <Image
                        src="/alticloud.png" // o .svg según tu logo
                        alt="AltiCloud Logo"
                        width={36}
                        height={36}
                        className="rounded-md bg-white p-1"
                        priority
                    />
                    <span className="font-bold text-altiblueLight text-lg tracking-tight">AltiCloud</span>
                </div>
                {/* Enlaces */}
                <div className="flex gap-4 items-center">
                    <a
                        href="https://www.linkedin.com/in/sern-reyesv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-altiblueLight transition"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.17c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.25 11.17h-3v-5.59c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.89v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.59v5.6z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/nnnnnnnnic0"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-altiblueLight transition"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.183 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.656.242 2.88.119 3.183.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.104.823 2.229v3.301c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                </div>
                {/* Frase y año */}
                <div className="mt-2 text-xs text-altigray text-center w-full sm:w-auto">
                    © {new Date().getFullYear()} AltiCloud · Soluciones digitales en la nube · Hecho en Chile con AWS ☁️
                </div>
            </div>
        </footer>
    );
}
