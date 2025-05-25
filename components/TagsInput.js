// /components/TagsInput.js
import { useState } from "react";
export default function TagsInput({ value, onChange, placeholder }) {
    const [input, setInput] = useState("");
    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-2">
                {(value || []).map((tag, i) => (
                    <span
                        key={i}
                        className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center max-w-full"
                    >
                        <span className="truncate max-w-[90px]">{tag}</span>
                        <button
                            type="button"
                            className="ml-2 text-red-600 hover:text-red-800 font-bold px-1 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                            style={{ fontSize: "1.1rem", lineHeight: "1" }}
                            aria-label={`Eliminar ${tag}`}
                            onClick={() => onChange((value || []).filter((_, idx) => idx !== i))}
                        >×</button>
                    </span>
                ))}
            </div>
            <input
                className="w-full p-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder={placeholder}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                    if (
                        (e.key === "Enter" || e.key === "," || e.key === "Tab") &&
                        input.trim()
                    ) {
                        e.preventDefault();
                        if (!value.includes(input.trim()) && value.length < 5) {
                            onChange([...(value || []), input.trim()]);
                            setInput("");
                        }
                    }
                }}
            />
            <div className="text-xs text-gray-500 mt-1">
                Presiona Enter, coma o Tab para agregar cada uno. Máximo 5.
            </div>
        </div>
    );
}
