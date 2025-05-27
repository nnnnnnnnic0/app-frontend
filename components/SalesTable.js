import { useState } from "react";
import { PlusCircle, Search, X, User, ShoppingCart, CalendarDays, Eye, Trash2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data (puedes reutilizar el de customers/inventory)
const MOCK_CLIENTES = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "Andrea Muñoz" },
    { id: 3, name: "Comercial Patito" }
];

const MOCK_PRODUCTS = [
    { id: 1, name: "Teclado mecánico", price: 45000 },
    { id: 2, name: "Mouse inalámbrico", price: 21500 },
    { id: 3, name: "Monitor 24'' LED", price: 125000 }
];

const MOCK_SALES = [
    {
        id: 1,
        date: "2024-06-01",
        client: MOCK_CLIENTES[0],
        items: [
            { product: MOCK_PRODUCTS[0], quantity: 2 },
            { product: MOCK_PRODUCTS[1], quantity: 1 }
        ],
        total: 2 * 45000 + 21500,
        status: "Pagado"
    },
    {
        id: 2,
        date: "2024-06-04",
        client: MOCK_CLIENTES[2],
        items: [
            { product: MOCK_PRODUCTS[2], quantity: 1 }
        ],
        total: 125000,
        status: "Pendiente"
    }
];

// Helpers
function calcTotal(items) {
    return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export default function SalesTable() {
    const [search, setSearch] = useState("");
    const [sales, setSales] = useState(MOCK_SALES);
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState(null); // venta seleccionada para detalle

    // Form estado
    const [form, setForm] = useState({
        client: "",
        date: new Date().toISOString().slice(0, 10),
        items: [{ product: "", quantity: 1 }]
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    // --- Modal agregar venta ---
    const validate = () => {
        const errs = {};
        if (!form.client) errs.client = "Selecciona un cliente.";
        if (!form.date) errs.date = "Selecciona una fecha.";
        if (!form.items.length || !form.items[0].product) errs.items = "Agrega al menos un producto.";
        form.items.forEach((item, idx) => {
            if (!item.product) errs[`product${idx}`] = "Selecciona producto";
            if (!item.quantity || isNaN(item.quantity) || Number(item.quantity) < 1)
                errs[`quantity${idx}`] = "Cantidad inválida";
        });
        return errs;
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        const venta = {
            id: Math.max(0, ...sales.map(s => s.id)) + 1,
            date: form.date,
            client: MOCK_CLIENTES.find(c => c.id === Number(form.client)),
            items: form.items.map(i => ({
                product: MOCK_PRODUCTS.find(p => p.id === Number(i.product)),
                quantity: Number(i.quantity)
            })),
            total: calcTotal(form.items.map(i => ({
                product: MOCK_PRODUCTS.find(p => p.id === Number(i.product)),
                quantity: Number(i.quantity)
            }))),
            status: "Pendiente"
        };
        setSales([venta, ...sales]);
        setForm({ client: "", date: new Date().toISOString().slice(0, 10), items: [{ product: "", quantity: 1 }] });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
            setShowModal(false);
            setSuccess(false);
        }, 900);
    };

    const closeModal = () => {
        setShowModal(false);
        setForm({ client: "", date: new Date().toISOString().slice(0, 10), items: [{ product: "", quantity: 1 }] });
        setErrors({});
        setSuccess(false);
    };

    const filtered = sales.filter(
        s =>
            s.client.name.toLowerCase().includes(search.toLowerCase()) ||
            s.items.some(i => i.product.name.toLowerCase().includes(search.toLowerCase()))
    );

    const handleDelete = (saleId) => {
        if (window.confirm("¿Anular esta venta?")) {
            setSales(sales.filter(s => s.id !== saleId));
            setShowDetail(null);
        }
    };

    // --- UI ---
    return (
        <div className="bg-altiwhite rounded-2xl shadow-xl p-4 border border-altiblueLight/20 w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
                <div className="flex-1 flex items-center gap-2">
                    <Search className="text-altiblueLight" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar cliente o producto"
                        className="border rounded-lg px-3 py-2 w-full focus:ring-altiblue focus:outline-none"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-altiverde hover:bg-altiblue text-altiwhite font-semibold transition shadow mt-2 sm:mt-0"
                    onClick={() => setShowModal(true)}
                >
                    <PlusCircle size={18} />
                    <span className="hidden sm:inline">Agregar venta</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-altiblue text-left rounded-lg">
                    <thead>
                        <tr className="bg-altiblueLight text-altiwhite">
                            <th className="py-2 px-4 rounded-tl-lg">Fecha</th>
                            <th className="py-2 px-4">Cliente</th>
                            <th className="py-2 px-4">Productos</th>
                            <th className="py-2 px-4">Total</th>
                            <th className="py-2 px-4">Estado</th>
                            <th className="py-2 px-4 rounded-tr-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="py-4 text-center text-altigray">
                                    No se encontraron ventas.
                                </td>
                            </tr>
                        ) : filtered.map(sale => (
                            <tr key={sale.id} className="border-b last:border-b-0 hover:bg-altiblueLight/10 transition">
                                <td className="py-2 px-4">{sale.date}</td>
                                <td className="py-2 px-4">{sale.client.name}</td>
                                <td className="py-2 px-4">
                                    <ul className="text-xs">
                                        {sale.items.map((item, i) => (
                                            <li key={i}>{item.product.name} x {item.quantity}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="py-2 px-4 font-bold">${sale.total.toLocaleString("es-CL")}</td>
                                <td className="py-2 px-4">
                                    <span className={
                                        sale.status === "Pagado" ? "text-altiverde" :
                                            sale.status === "Anulado" ? "text-alticoral" : "text-altiblueLight"
                                    }>
                                        {sale.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 flex gap-2">
                                    <button onClick={() => setShowDetail(sale)} className="text-altiblue hover:text-altiblueLight" aria-label="Ver detalle">
                                        <Eye size={17} />
                                    </button>
                                    <button onClick={() => handleDelete(sale.id)} className="text-alticoral hover:text-altiblueLight" aria-label="Anular">
                                        <Trash2 size={17} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* MODAL AGREGAR VENTA */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.97, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.97, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                            className="bg-altiwhite rounded-3xl shadow-2xl w-full max-w-2xl mx-3 p-0 relative border border-altiblueLight/30 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="relative h-20 bg-gradient-to-br from-altiblueLight via-altiblue to-altigray flex items-center px-8 py-4">
                                <ShoppingCart size={32} className="text-altiwhite mr-3 drop-shadow-xl" />
                                <h2 className="text-xl font-black text-altiwhite tracking-tight">
                                    Registrar venta
                                </h2>
                                <button
                                    className="absolute top-4 right-4 bg-altiwhite/80 text-altiblueLight hover:text-altiblue rounded-full shadow p-1 transition"
                                    onClick={closeModal}
                                    aria-label="Cerrar"
                                    style={{ zIndex: 3 }}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="px-8 py-7">
                                <form onSubmit={handleAdd} className="space-y-5">
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Cliente</label>
                                        <select
                                            className={`w-full rounded-lg border px-3 py-2 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.client ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.client}
                                            onChange={e => setForm(f => ({ ...f, client: e.target.value }))}
                                            required
                                        >
                                            <option value="">Selecciona cliente</option>
                                            {MOCK_CLIENTES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                        </select>
                                        {errors.client && <span className="text-alticoral text-xs">{errors.client}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Fecha</label>
                                        <input
                                            type="date"
                                            className={`w-full rounded-lg border px-3 py-2 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.date ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.date}
                                            onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                                            required
                                        />
                                        {errors.date && <span className="text-alticoral text-xs">{errors.date}</span>}
                                    </div>
                                    {/* Productos */}
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Productos</label>
                                        {form.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 mb-2">
                                                <select
                                                    className={`rounded-lg border px-3 py-2 bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors[`product${idx}`] ? "border-alticoral" : "border-altiblueLight"}`}
                                                    value={item.product}
                                                    onChange={e => {
                                                        const v = e.target.value;
                                                        setForm(f => ({
                                                            ...f,
                                                            items: f.items.map((it, i) =>
                                                                i === idx ? { ...it, product: v } : it
                                                            )
                                                        }));
                                                    }}
                                                    required
                                                >
                                                    <option value="">Producto</option>
                                                    {MOCK_PRODUCTS.map(p => (
                                                        <option key={p.id} value={p.id}>{p.name}</option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    className={`w-20 rounded-lg border px-2 py-2 bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors[`quantity${idx}`] ? "border-alticoral" : "border-altiblueLight"}`}
                                                    value={item.quantity}
                                                    onChange={e => {
                                                        const v = e.target.value;
                                                        setForm(f => ({
                                                            ...f,
                                                            items: f.items.map((it, i) =>
                                                                i === idx ? { ...it, quantity: v } : it
                                                            )
                                                        }));
                                                    }}
                                                    required
                                                />
                                                {form.items.length > 1 && (
                                                    <button type="button" className="text-alticoral hover:text-altiblueLight" onClick={() => setForm(f => ({
                                                        ...f,
                                                        items: f.items.filter((_, i) => i !== idx)
                                                    }))}>
                                                        <X size={19} />
                                                    </button>
                                                )}
                                                {errors[`product${idx}`] && <span className="text-alticoral text-xs">{errors[`product${idx}`]}</span>}
                                                {errors[`quantity${idx}`] && <span className="text-alticoral text-xs">{errors[`quantity${idx}`]}</span>}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="ml-1 mt-1 text-sm text-altiblueLight hover:underline"
                                            onClick={() => setForm(f => ({
                                                ...f,
                                                items: [...f.items, { product: "", quantity: 1 }]
                                            }))}
                                        >+ Agregar producto</button>
                                        {errors.items && <span className="block text-alticoral text-xs">{errors.items}</span>}
                                    </div>
                                    <div className="mt-4">
                                        <span className="block text-altiblue font-semibold mb-1">Total:</span>
                                        <span className="text-2xl font-black">
                                            ${calcTotal(form.items.map(i => ({
                                                product: MOCK_PRODUCTS.find(p => p.id === Number(i.product)) || { price: 0 },
                                                quantity: Number(i.quantity)
                                            }))).toLocaleString("es-CL")}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-altiverde hover:bg-altiblue text-altiwhite font-bold flex items-center justify-center text-lg transition disabled:opacity-60"
                                        disabled={success}
                                    >
                                        {success ? <CheckCircle2 className="mr-2" /> : <PlusCircle className="mr-2" />}
                                        {success ? "Venta registrada" : "Registrar venta"}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* MODAL DETALLE VENTA */}
            <AnimatePresence>
                {showDetail && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                            className="bg-altiwhite rounded-3xl shadow-2xl w-full max-w-xl mx-3 p-0 relative border border-altiblueLight/30 overflow-hidden"
                        >
                            <div className="relative h-20 bg-gradient-to-br from-altiblueLight via-altiblue to-altigray flex items-center px-8 py-4">
                                <CalendarDays size={28} className="text-altiwhite mr-3" />
                                <h2 className="text-xl font-black text-altiwhite tracking-tight">Detalle de venta</h2>
                                <button
                                    className="absolute top-4 right-4 bg-altiwhite/80 text-altiblueLight hover:text-altiblue rounded-full shadow p-1 transition"
                                    onClick={() => setShowDetail(null)}
                                    aria-label="Cerrar"
                                    style={{ zIndex: 3 }}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="px-8 py-7">
                                <div className="mb-3">
                                    <span className="text-altigray">Fecha: </span>
                                    <span className="font-semibold">{showDetail.date}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-altigray">Cliente: </span>
                                    <span className="font-semibold">{showDetail.client.name}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-altigray">Estado: </span>
                                    <span className={`font-bold ${showDetail.status === "Pagado" ? "text-altiverde" :
                                            showDetail.status === "Anulado" ? "text-alticoral" : "text-altiblueLight"
                                        }`}>{showDetail.status}</span>
                                </div>
                                <div>
                                    <table className="w-full mb-2">
                                        <thead>
                                            <tr className="text-altigray">
                                                <th className="text-left py-1">Producto</th>
                                                <th className="text-left py-1">Cantidad</th>
                                                <th className="text-left py-1">Precio</th>
                                                <th className="text-left py-1">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {showDetail.items.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="py-1">{item.product.name}</td>
                                                    <td className="py-1">{item.quantity}</td>
                                                    <td className="py-1">${item.product.price.toLocaleString("es-CL")}</td>
                                                    <td className="py-1">${(item.quantity * item.product.price).toLocaleString("es-CL")}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="flex justify-end items-center gap-3 text-lg font-black text-altiblue">
                                        Total: <span className="text-2xl">${showDetail.total.toLocaleString("es-CL")}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6 gap-3">
                                    <button
                                        className="bg-alticoral hover:bg-altiblueLight text-altiwhite rounded-lg px-5 py-2 font-bold transition"
                                        onClick={() => handleDelete(showDetail.id)}
                                    >
                                        Anular venta
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
