// /utils/colorUtils.js
export function extraerColores(texto) {
    if (!texto) return ['#3b82f6', '#ffffff'];
    const t = texto.toLowerCase();

    const catalogo = [
        { names: ['azul', 'blue'], pair: ['#2563eb', '#f0f9ff'] },
        { names: ['azul marino', 'navy'], pair: ['#1e3a8a', '#e0e7ff'] },
        { names: ['cian', 'celeste'], pair: ['#06b6d4', '#e0f2fe'] },
        { names: ['turquesa'], pair: ['#14b8a6', '#ecfeff'] },
        { names: ['verde', 'green'], pair: ['#22c55e', '#ecfdf5'] },
        { names: ['verde oscuro'], pair: ['#166534', '#d1fae5'] },
        { names: ['esmeralda'], pair: ['#10b981', '#d1fae5'] },
        { names: ['amarillo', 'yellow'], pair: ['#eab308', '#fef9c3'] },
        { names: ['dorado', 'oro', 'gold'], pair: ['#f59e42', '#fff7ed'] },
        { names: ['naranja', 'orange'], pair: ['#f97316', '#fff7ed'] },
        { names: ['rojo', 'red'], pair: ['#ef4444', '#fef2f2'] },
        { names: ['coral'], pair: ['#fb7185', '#ffe4e6'] },
        { names: ['rosado', 'rosa', 'pink'], pair: ['#ec4899', '#fdf2f8'] },
        { names: ['fucsia', 'fuchsia'], pair: ['#d946ef', '#f5d0fe'] },
        { names: ['violeta', 'violet', 'morado', 'purple'], pair: ['#8b5cf6', '#ede9fe'] },
        { names: ['lavanda'], pair: ['#a78bfa', '#f3e8ff'] },
        { names: ['negro', 'black'], pair: ['#1e293b', '#f8fafc'] },
        { names: ['gris', 'gray', 'gris claro', 'gris oscuro'], pair: ['#64748b', '#f1f5f9'] },
        { names: ['plata', 'plateado', 'silver'], pair: ['#cbd5e1', '#f8fafc'] },
        { names: ['blanco', 'white'], pair: ['#ffffff', '#f1f5f9'] },
        { names: ['marrón', 'brown', 'chocolate'], pair: ['#92400e', '#f5f5dc'] },
        { names: ['beige'], pair: ['#f5f5dc', '#fafaf9'] },
        { names: ['crema'], pair: ['#fff4e6', '#fefae0'] },
        { names: ['cobre', 'copper'], pair: ['#b87333', '#f8fafc'] },
        { names: ['lima', 'lime'], pair: ['#a3e635', '#f7fee7'] },
        { names: ['oliva', 'olive'], pair: ['#808000', '#f7fafc'] },
        { names: ['granate', 'burdeos', 'wine'], pair: ['#800020', '#fbeff2'] }
    ];

    // Buscar color por nombre
    for (let color of catalogo) {
        if (color.names.some(name => t.includes(name))) {
            return color.pair;
        }
    }

    // HEX directo
    const hexMatch = t.match(/#([0-9a-f]{3,6})/i);
    if (hexMatch) {
        return [hexMatch[0], '#ffffff'];
    }

    // RGB directo
    const rgbMatch = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
    if (rgbMatch) {
        return [rgbMatch[0], '#ffffff'];
    }

    // Default azul
    return ['#3b82f6', '#ffffff'];
}
