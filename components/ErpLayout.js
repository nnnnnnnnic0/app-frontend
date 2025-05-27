import Head from "next/head";
import ErpHeader from "./ErpHeader";
import ErpSidebar from "./ErpSidebar";

export default function ErpLayout({ userInfo, onLogout, children }) {
    return (
        <div className="flex min-h-screen bg-altiwhite">
            {/* Sidebar de navegación ERP */}
            <ErpSidebar />
            {/* Main: header + contenido */}
            <div className="flex-1 flex flex-col">
                <ErpHeader username={userInfo?.username || ""} onLogout={onLogout} />
                <main className="flex-1 px-2 py-6 sm:px-8 bg-altiwhite">{children}</main>
            </div>
        </div>
    );
}
