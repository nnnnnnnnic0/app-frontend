import { useState } from "react";
import { UserPlus, Search, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_CUSTOMERS = [
    { id: 1, name: "Juan Pérez", email: "juanperez@email.com", phone: "+56 9 1234 5678", company: "Distribuidora Sur" },
    { id: 2, name: "Andrea Muñoz", email: "amuñoz@email.com", phone: "+56 9 8765 4321", company: "Fábrica Norte" },
    { id: 3, name: "Comercial Patito", email: "contacto@patito.cl", phone: "+56 2 3344 1122", company: "Patito Spa" },
];

export default function CustomersTable({ token }) {
    const [search, setSearch] = useState("");
    const [customers, setCustomers] = useState(MOCK_CUSTOMERS);
    const [showModal, setShowModal] = useState(false);

    // Modal state
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const filtered = customers.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.company.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "El nombre es obligatorio.";
        if (!form.company.trim()) errs.company = "La empresa es obligatoria.";
        if (!form.email.trim()) errs.email = "El correo es obligatorio.";
        if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
            errs.email = "Correo inválido.";
        if (!form.phone.trim()) errs.phone = "El teléfono es obligatorio.";
        return errs;
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        // Mock add: sólo frontend
        setCustomers([
            ...customers,
            {
                ...form,
                id: Math.max(...customers.map(c => c.id)) + 1,
            }
        ]);
        setForm({ name: "", company: "", email: "", phone: "" });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
            setShowModal(false);
            setSuccess(false);
        }, 1000);
    };

    const closeModal = () => {
        setShowModal(false);
        setForm({ name: "", company: "", email: "", phone: "" });
        setErrors({});
        setSuccess(false);
    };

    return (
        <div className="bg-altiwhite rounded-2xl shadow-xl p-4 border border-altiblueLight/20">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
                <div className="flex-1 flex items-center gap-2">
                    <Search className="text-altiblueLight" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar cliente, empresa o correo"
                        className="border rounded-lg px-3 py-2 w-full focus:ring-altiblue focus:outline-none"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-altiverde hover:bg-altiblue text-altiwhite font-semibold transition shadow mt-2 sm:mt-0"
                    onClick={() => setShowModal(true)}
                >
                    <UserPlus size={18} />
                    <span className="hidden sm:inline">Agregar cliente</span>
                </button>
            </div>
            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full text-altiblue text-left rounded-lg">
                    <thead>
                        <tr className="bg-altiblueLight text-altiwhite">
                            <th className="py-2 px-4 rounded-tl-lg">Nombre</th>
                            <th className="py-2 px-4">Empresa</th>
                            <th className="py-2 px-4">Correo</th>
                            <th className="py-2 px-4 rounded-tr-lg">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="py-4 text-center text-altigray">
                                    No se encontraron clientes.
                                </td>
                            </tr>
                        ) : filtered.map(c => (
                            <tr key={c.id} className="border-b last:border-b-0 hover:bg-altiblueLight/10 transition">
                                <td className="py-2 px-4 font-semibold">{c.name}</td>
                                <td className="py-2 px-4">{c.company}</td>
                                <td className="py-2 px-4">{c.email}</td>
                                <td className="py-2 px-4">{c.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL de Agregar Cliente */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="bg-altiwhite rounded-3xl shadow-2xl w-full max-w-xl mx-3 p-0 relative border border-altiblueLight/30 overflow-hidden"
                        >
                            {/* Header decorativo */}
                            <div className="relative h-24 bg-gradient-to-br from-altiblueLight via-altiblue to-altigray flex items-center px-8 py-4">
                                <UserPlus size={36} className="text-altiwhite mr-3 drop-shadow-xl" />
                                <h2 className="text-2xl font-black text-altiwhite tracking-tight">
                                    Agregar cliente
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
                            {/* Formulario */}
                            <div className="px-8 py-7">
                                <form onSubmit={handleAdd} className="space-y-5">
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Nombre completo</label>
                                        <input
                                            type="text"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.name ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.name}
                                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                            autoFocus
                                        />
                                        {errors.name && <span className="text-alticoral text-xs">{errors.name}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Empresa</label>
                                        <input
                                            type="text"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.company ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.company}
                                            onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                                        />
                                        {errors.company && <span className="text-alticoral text-xs">{errors.company}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Correo electrónico</label>
                                        <input
                                            type="email"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.email ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.email}
                                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                        />
                                        {errors.email && <span className="text-alticoral text-xs">{errors.email}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Teléfono</label>
                                        <input
                                            type="text"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.phone ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.phone}
                                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                        />
                                        {errors.phone && <span className="text-alticoral text-xs">{errors.phone}</span>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-altiverde hover:bg-altiblue text-altiwhite font-bold flex items-center justify-center text-lg transition disabled:opacity-60"
                                        disabled={success}
                                    >
                                        {success ? <CheckCircle2 className="mr-2" /> : <UserPlus className="mr-2" />}
                                        {success ? "Cliente agregado" : "Agregar"}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
