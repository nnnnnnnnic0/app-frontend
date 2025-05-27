import { useState } from "react";
import { PlusCircle, Search, Filter, X, Edit2, CheckCircle2, Package, AlertTriangle, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Periféricos", "Monitores", "Computadores"];
const BRANDS = ["Redragon", "Logitech", "Samsung", "Lenovo"];
const LOCATIONS = ["Bodega Central", "Sucursal Santiago"];

const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Teclado mecánico",
        sku: "TKL-001",
        stock: 12,
        minStock: 5,
        price: 45000,
        brand: "Redragon",
        category: "Periféricos",
        location: "Bodega Central",
        unit: "unidad",
        active: true,
    },
    {
        id: 2,
        name: "Mouse inalámbrico",
        sku: "MWS-009",
        stock: 2,
        minStock: 10,
        price: 21500,
        brand: "Logitech",
        category: "Periféricos",
        location: "Sucursal Santiago",
        unit: "unidad",
        active: true,
    },
    {
        id: 3,
        name: "Monitor 24'' LED",
        sku: "MON-24L",
        stock: 8,
        minStock: 4,
        price: 125000,
        brand: "Samsung",
        category: "Monitores",
        location: "Bodega Central",
        unit: "unidad",
        active: false,
    },
];

function ProductRow({ p, onEdit, onDelete }) {
    // Destaca stock crítico
    const stockClass = p.stock <= p.minStock ? "text-alticoral font-bold" : "text-altiblue";
    return (
        <tr className={`border-b last:border-b-0 hover:bg-altiblueLight/10 transition ${!p.active ? "opacity-50" : ""}`}>
            <td className="py-2 px-4 font-semibold">{p.name}</td>
            <td className="py-2 px-4">{p.sku}</td>
            <td className="py-2 px-4">{p.brand}</td>
            <td className="py-2 px-4">{p.category}</td>
            <td className="py-2 px-4">{p.location}</td>
            <td className="py-2 px-4">{p.unit}</td>
            <td className={`py-2 px-4 ${stockClass}`}>
                {p.stock}
                {p.stock <= p.minStock ? (
                    <span className="inline-flex items-center ml-1 text-alticoral">
                        <AlertTriangle size={14} />
                    </span>
                ) : null}
            </td>
            <td className="py-2 px-4">{p.minStock}</td>
            <td className="py-2 px-4">${p.price.toLocaleString("es-CL")}</td>
            <td className="py-2 px-4 flex gap-2">
                <button onClick={() => onEdit(p)} className="text-altiblue hover:text-altiblueLight">
                    <Edit2 size={17} />
                </button>
                <button onClick={() => onDelete(p)} className="text-alticoral hover:text-altiblueLight">
                    <Trash2 size={17} />
                </button>
            </td>
        </tr>
    );
}

export default function InventoryTable() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(MOCK_PRODUCTS);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [brandFilter, setBrandFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    // Modal state
    const [form, setForm] = useState({
        name: "", sku: "", stock: "", minStock: "", price: "",
        brand: "", category: "", location: "", unit: "unidad", active: true,
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    // Filtros
    let filtered = products.filter(p =>
        (p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase())) &&
        (!categoryFilter || p.category === categoryFilter) &&
        (!brandFilter || p.brand === brandFilter)
    );

    // --- Modal agregar/editar producto ---
    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "El nombre es obligatorio.";
        if (!form.sku.trim()) errs.sku = "El SKU es obligatorio.";
        if (!form.stock.trim() || isNaN(Number(form.stock)) || Number(form.stock) < 0) errs.stock = "Stock inválido.";
        if (!form.minStock.trim() || isNaN(Number(form.minStock)) || Number(form.minStock) < 0) errs.minStock = "Mínimo inválido.";
        if (!form.price.trim() || isNaN(Number(form.price)) || Number(form.price) <= 0) errs.price = "Precio inválido.";
        if (!form.brand.trim()) errs.brand = "Marca obligatoria.";
        if (!form.category.trim()) errs.category = "Categoría obligatoria.";
        if (!form.location.trim()) errs.location = "Ubicación obligatoria.";
        return errs;
    };

    const handleAddEdit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        if (editProduct) {
            setProducts(products.map(p =>
                p.id === editProduct.id ? { ...editProduct, ...form, stock: Number(form.stock), minStock: Number(form.minStock), price: Number(form.price) } : p
            ));
        } else {
            setProducts([
                ...products,
                {
                    ...form,
                    id: Math.max(...products.map(p => p.id)) + 1,
                    stock: Number(form.stock),
                    minStock: Number(form.minStock),
                    price: Number(form.price),
                }
            ]);
        }
        setForm({
            name: "", sku: "", stock: "", minStock: "", price: "",
            brand: "", category: "", location: "", unit: "unidad", active: true,
        });
        setErrors({});
        setSuccess(true);
        setTimeout(() => {
            setShowModal(false);
            setSuccess(false);
            setEditProduct(null);
        }, 1000);
    };

    const closeModal = () => {
        setShowModal(false);
        setForm({
            name: "", sku: "", stock: "", minStock: "", price: "",
            brand: "", category: "", location: "", unit: "unidad", active: true,
        });
        setErrors({});
        setSuccess(false);
        setEditProduct(null);
    };

    const openEdit = (p) => {
        setEditProduct(p);
        setShowModal(true);
        setForm({
            name: p.name,
            sku: p.sku,
            stock: p.stock,
            minStock: p.minStock,
            price: p.price,
            brand: p.brand,
            category: p.category,
            location: p.location,
            unit: p.unit,
            active: p.active,
        });
    };

    const handleDelete = (p) => {
        if (window.confirm(`¿Eliminar producto ${p.name}?`)) {
            setProducts(products.filter(x => x.id !== p.id));
        }
    };

    // --- Paginación básica (opcional, puedes mejorarla) ---
    const itemsPerPage = 8;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    filtered = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="bg-altiwhite rounded-2xl shadow-xl p-2 sm:p-6 border border-altiblueLight/20 w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-4">
                <div className="flex-1 flex items-center gap-2">
                    <Search className="text-altiblueLight" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar producto o SKU"
                        className="border rounded-lg px-3 py-2 w-full focus:ring-altiblue focus:outline-none"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0">
                    <select
                        className="border rounded-lg px-2 py-2 text-altiblue bg-altiwhite"
                        value={categoryFilter}
                        onChange={e => setCategoryFilter(e.target.value)}
                    >
                        <option value="">Todas las categorías</option>
                        {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                    <select
                        className="border rounded-lg px-2 py-2 text-altiblue bg-altiwhite"
                        value={brandFilter}
                        onChange={e => setBrandFilter(e.target.value)}
                    >
                        <option value="">Todas las marcas</option>
                        {BRANDS.map(brand => <option key={brand}>{brand}</option>)}
                    </select>
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-altiverde hover:bg-altiblue text-altiwhite font-semibold transition shadow"
                        onClick={() => {
                            setEditProduct(null);
                            setShowModal(true);
                        }}
                    >
                        <PlusCircle size={18} />
                        <span className="hidden sm:inline">Agregar producto</span>
                    </button>
                </div>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full text-altiblue text-left rounded-lg">
                    <thead>
                        <tr className="bg-altiblueLight text-altiwhite">
                            <th className="py-2 px-4 rounded-tl-lg">Producto</th>
                            <th className="py-2 px-4">SKU</th>
                            <th className="py-2 px-4">Marca</th>
                            <th className="py-2 px-4">Categoría</th>
                            <th className="py-2 px-4">Ubicación</th>
                            <th className="py-2 px-4">Unidad</th>
                            <th className="py-2 px-4">Stock</th>
                            <th className="py-2 px-4">Mínimo</th>
                            <th className="py-2 px-4">Precio</th>
                            <th className="py-2 px-4 rounded-tr-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan={10} className="py-4 text-center text-altigray">
                                    No se encontraron productos.
                                </td>
                            </tr>
                        ) : filtered.map(p => (
                            <ProductRow
                                key={p.id}
                                p={p}
                                onEdit={openEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
                <div className="flex justify-end items-center mt-4 gap-2">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="px-2 py-1 rounded border bg-altiblueLight text-altiwhite hover:bg-altiblue transition disabled:opacity-50"
                    >Anterior</button>
                    <span className="mx-2">{page} / {totalPages}</span>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="px-2 py-1 rounded border bg-altiblueLight text-altiwhite hover:bg-altiblue transition disabled:opacity-50"
                    >Siguiente</button>
                </div>
            )}

            {/* Modal Agregar/Editar */}
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
                            {/* Header modal */}
                            <div className="relative h-24 bg-gradient-to-br from-altiblueLight via-altiblue to-altigray flex items-center px-8 py-4">
                                <Package size={36} className="text-altiwhite mr-3 drop-shadow-xl" />
                                <h2 className="text-2xl font-black text-altiwhite tracking-tight">
                                    {editProduct ? "Editar producto" : "Agregar producto"}
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
                                <form onSubmit={handleAddEdit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Nombre producto</label>
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
                                        <label className="block text-altiblue font-semibold mb-1">SKU</label>
                                        <input
                                            type="text"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.sku ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.sku}
                                            onChange={e => setForm(f => ({ ...f, sku: e.target.value }))}
                                        />
                                        {errors.sku && <span className="text-alticoral text-xs">{errors.sku}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Marca</label>
                                        <select
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.brand ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.brand}
                                            onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                                        >
                                            <option value="">Selecciona</option>
                                            {BRANDS.map(b => <option key={b}>{b}</option>)}
                                        </select>
                                        {errors.brand && <span className="text-alticoral text-xs">{errors.brand}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Categoría</label>
                                        <select
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.category ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.category}
                                            onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                                        >
                                            <option value="">Selecciona</option>
                                            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                        {errors.category && <span className="text-alticoral text-xs">{errors.category}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Ubicación</label>
                                        <select
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.location ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.location}
                                            onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                                        >
                                            <option value="">Selecciona</option>
                                            {LOCATIONS.map(l => <option key={l}>{l}</option>)}
                                        </select>
                                        {errors.location && <span className="text-alticoral text-xs">{errors.location}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Unidad</label>
                                        <input
                                            type="text"
                                            className="w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none"
                                            value={form.unit}
                                            onChange={e => setForm(f => ({ ...f, unit: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Stock</label>
                                        <input
                                            type="number"
                                            min="0"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.stock ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.stock}
                                            onChange={e => setForm(f => ({ ...f, stock: e.target.value }))}
                                        />
                                        {errors.stock && <span className="text-alticoral text-xs">{errors.stock}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Stock mínimo</label>
                                        <input
                                            type="number"
                                            min="0"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.minStock ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.minStock}
                                            onChange={e => setForm(f => ({ ...f, minStock: e.target.value }))}
                                        />
                                        {errors.minStock && <span className="text-alticoral text-xs">{errors.minStock}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-altiblue font-semibold mb-1">Precio (CLP)</label>
                                        <input
                                            type="number"
                                            min="0"
                                            className={`w-full rounded-xl border px-4 py-3 text-lg bg-altiwhite focus:ring-2 focus:ring-altiblue focus:outline-none ${errors.price ? "border-alticoral" : "border-altiblueLight"}`}
                                            value={form.price}
                                            onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                                        />
                                        {errors.price && <span className="text-alticoral text-xs">{errors.price}</span>}
                                    </div>
                                    <div className="flex items-center gap-2 col-span-2">
                                        <input
                                            type="checkbox"
                                            id="active"
                                            checked={form.active}
                                            onChange={e => setForm(f => ({ ...f, active: e.target.checked }))}
                                        />
                                        <label htmlFor="active" className="text-altiblue font-semibold">Activo</label>
                                    </div>
                                    <div className="col-span-2">
                                        <button
                                            type="submit"
                                            className="w-full py-3 rounded-xl bg-altiverde hover:bg-altiblue text-altiwhite font-bold flex items-center justify-center text-lg transition disabled:opacity-60"
                                            disabled={success}
                                        >
                                            {success ? <CheckCircle2 className="mr-2" /> : <PlusCircle className="mr-2" />}
                                            {success ? (editProduct ? "Producto editado" : "Producto agregado") : (editProduct ? "Guardar cambios" : "Agregar")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
