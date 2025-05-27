import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { ShoppingCart, User, Package, AlertTriangle } from "lucide-react";

// Mock KPIs
const MOCK_KPI = {
    ventasMes: 3,
    totalVentas: 347500,
    stockCritico: 2,
    productosInventario: 22,
    clientes: 10
};
const MOCK_ALERTAS = [
    { id: 1, name: "Mouse inalámbrico", stock: 2, minStock: 10 },
    { id: 2, name: "Monitor 24'' LED", stock: 8, minStock: 9 },
];
const MOCK_VENTAS = [
    { id: 1, cliente: "Juan Pérez", fecha: "2024-06-04", total: 111500 },
    { id: 2, cliente: "Comercial Patito", fecha: "2024-06-01", total: 125000 },
];

// Gráfico mock: Ventas por semana
const MOCK_VENTAS_SERIE = [
    { semana: "Semana 1", ventas: 120000 },
    { semana: "Semana 2", ventas: 70000 },
    { semana: "Semana 3", ventas: 50000 },
    { semana: "Semana 4", ventas: 107500 },
];

export default function ErpDashboard({ userInfo }) {
    return (
        <div className="w-full">
            {/* Bienvenida */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-altiblue mb-2">
                        Bienvenido, {userInfo?.username?.charAt(0).toUpperCase() + userInfo?.username?.slice(1)}!
                    </h1>
                    <p className="text-altigray">Este es tu centro de control. ¿Qué deseas gestionar hoy?</p>
                </div>
                <div className="flex gap-3 mt-4 sm:mt-0">
                    <a href="/demos/erp-alticloud/sales" className="px-5 py-2 rounded-lg bg-altiblueLight hover:bg-altiblue text-altiwhite font-bold transition">+ Venta</a>
                    <a href="/demos/erp-alticloud/customers" className="px-5 py-2 rounded-lg bg-altiverde hover:bg-altiblue text-altiwhite font-bold transition">+ Cliente</a>
                </div>
            </div>

            {/* KPIs principales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
                <div className="bg-altiblue rounded-xl p-5 shadow flex items-center gap-4">
                    <ShoppingCart size={36} className="text-altiwhite drop-shadow" />
                    <div>
                        <div className="text-altiwhite text-lg font-bold">Ventas mes</div>
                        <div className="text-2xl text-altiwhite font-black">{MOCK_KPI.ventasMes}</div>
                    </div>
                </div>
                <div className="bg-altiblueLight rounded-xl p-5 shadow flex items-center gap-4">
                    <Package size={36} className="text-altiwhite drop-shadow" />
                    <div>
                        <div className="text-altiwhite text-lg font-bold">Inventario</div>
                        <div className="text-2xl text-altiwhite font-black">{MOCK_KPI.productosInventario}</div>
                    </div>
                </div>
                <div className="bg-altiverde rounded-xl p-5 shadow flex items-center gap-4">
                    <User size={36} className="text-altiwhite drop-shadow" />
                    <div>
                        <div className="text-altiwhite text-lg font-bold">Clientes</div>
                        <div className="text-2xl text-altiwhite font-black">{MOCK_KPI.clientes}</div>
                    </div>
                </div>
                <div className="bg-alticoral rounded-xl p-5 shadow flex items-center gap-4">
                    <AlertTriangle size={36} className="text-altiwhite drop-shadow" />
                    <div>
                        <div className="text-altiwhite text-lg font-bold">Stock crítico</div>
                        <div className="text-2xl text-altiwhite font-black">{MOCK_KPI.stockCritico}</div>
                    </div>
                </div>
            </div>

            {/* Gráfico de ventas del mes */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-altiblue font-bold">Ventas del mes</span>
                </div>
                <div className="w-full" style={{ height: 280 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MOCK_VENTAS_SERIE} margin={{ top: 15, right: 20, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="semana" stroke="#2563eb" fontSize={14} />
                            <YAxis stroke="#2563eb" fontSize={14} />
                            <Tooltip formatter={(v) => `$${v.toLocaleString("es-CL")}`} />
                            <Legend />
                            <Bar dataKey="ventas" fill="#2563eb" name="Ventas ($)" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Alertas de inventario */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="text-alticoral" />
                        <span className="text-altiblue font-bold">Productos en stock crítico</span>
                    </div>
                    <ul>
                        {MOCK_ALERTAS.length === 0 ? (
                            <li className="text-altigray">Sin alertas de stock bajo</li>
                        ) : MOCK_ALERTAS.map(p => (
                            <li key={p.id} className="flex justify-between items-center py-1">
                                <span>{p.name}</span>
                                <span className="text-alticoral font-bold">
                                    {p.stock} / mínimo {p.minStock}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Últimas ventas */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <ShoppingCart className="text-altiblue" />
                        <span className="text-altiblue font-bold">Últimas ventas</span>
                    </div>
                    <ul>
                        {MOCK_VENTAS.length === 0 ? (
                            <li className="text-altigray">No hay ventas recientes</li>
                        ) : MOCK_VENTAS.map(v => (
                            <li key={v.id} className="flex justify-between items-center py-1">
                                <span>{v.cliente} - <span className="text-altigray">{v.fecha}</span></span>
                                <span className="text-altiblue font-bold">${v.total.toLocaleString("es-CL")}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
