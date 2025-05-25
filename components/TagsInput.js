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
                        className="bg-altiblueLight text-altiblue px-3 py-1 rounded-full text-sm flex items-center max-w-full shadow-sm"
                        tabIndex={0}
                        aria-label={`Etiqueta: ${tag}`}
                    >
                        <span className="truncate max-w-[90px]">{tag}</span>
                        <button
                            type="button"
                            className="ml-2 text-alticoral hover:text-red-700 font-bold px-1 rounded focus:outline-none focus:ring-2 focus:ring-alticoral"
                            style={{ fontSize: "1.1rem", lineHeight: "1" }}
                            aria-label={`Eliminar ${tag}`}
                            onClick={() => onChange((value || []).filter((_, idx) => idx !== i))}
                        >×</button>
                    </span>
                ))}
            </div>
            <input
                className="w-full p-3 text-base border border-altiblueLight rounded-xl focus:outline-none focus:ring-2 focus:ring-altiblueLight"
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
                        if (
                            !value.includes(input.trim()) &&
                            (value.length < 5)
                        ) {
                            onChange([...(value || []), input.trim()]);
                            setInput("");
                        }
                    }
                }}
                aria-label={placeholder}
                maxLength={32}
            />
            <div className="text-xs text-altigray mt-1">
                Presiona <b>Enter</b>, <b>coma</b> o <b>Tab</b> para agregar cada uno. <span className="text-alticoral font-semibold">Máximo 5.</span>
            </div>
        </div>
    );
}
