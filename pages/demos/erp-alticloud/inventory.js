import Head from "next/head";
import { useAuth } from "../../../context/AuthContext";
import ErpLayout from "../../../components/ErpLayout";
import Login from "../../../components/Login";
import InventoryTable from "../../../components/InventoryTable";

export default function InventoryPage() {
    const { token, userInfo, loading, login, logout } = useAuth();

    if (loading) return null;
    if (!userInfo) {
        return (
            <>
                <Head>
                    <title>Inventario | ERP AltiCloud</title>
                </Head>
                <Login onLogin={login} />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Inventario | ERP AltiCloud</title>
            </Head>
            <ErpLayout userInfo={userInfo} onLogout={logout}>
                <div className="w-full px-2 sm:px-6 lg:px-20 py-10">
                    <h1 className="text-2xl font-black text-altiblue mb-4">Inventario</h1>
                    <InventoryTable />
                </div>
            </ErpLayout>
        </>
    );
}
