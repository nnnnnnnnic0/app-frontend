import Head from "next/head";
import { useAuth } from "../../../context/AuthContext";
import ErpLayout from "../../../components/ErpLayout";
import Login from "../../../components/Login";
import ErpDashboard from "../../../components/ErpDashboard";

export default function DashboardPage() {
    const { token, userInfo, loading, login, logout } = useAuth();

    if (loading) return null; // o spinner
    if (!userInfo) {
        return (
            <>
                <Head>
                    <title>ERP AltiCloud | Dashboard</title>
                </Head>
                <Login onLogin={login} />
            </>
        );
    }
    return (
        <>
            <Head>
                <title>ERP AltiCloud | Dashboard</title>
            </Head>
            <ErpLayout userInfo={userInfo} onLogout={logout}>
                <div className="w-full px-2 sm:px-6 lg:px-20 py-10">
                    <ErpDashboard userInfo={userInfo} />
                </div>
            </ErpLayout>
        </>
    );
}
