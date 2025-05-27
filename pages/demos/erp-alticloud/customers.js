import Head from "next/head";
import { useAuth } from "../../../context/AuthContext";
import ErpLayout from "../../../components/ErpLayout";
import Login from "../../../components/Login";
import CustomersTable from "../../../components/CustomersTable";

export default function CustomersPage() {
    const { token, userInfo, loading, login, logout } = useAuth();

    if (loading) return null;
    if (!userInfo) {
        return (
            <>
                <Head>
                    <title>Clientes | ERP AltiCloud</title>
                </Head>
                <Login onLogin={login} />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Clientes | ERP AltiCloud</title>
            </Head>
            <ErpLayout userInfo={userInfo} onLogout={logout}>
                <div className="w-full px-2 sm:px-6 lg:px-20 py-10">
                    <h1 className="text-2xl font-black text-altiblue mb-4">Clientes</h1>
                    <CustomersTable />
                </div>
            </ErpLayout>
        </>
    );
}