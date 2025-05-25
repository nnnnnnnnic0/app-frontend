// /components/ConfettiCelebration.js
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function ConfettiCelebration({ show }) {
    const ref = useRef();

    useEffect(() => {
        if (show && ref.current) {
            confetti.create(ref.current, {
                resize: true,
                useWorker: true
            })({
                particleCount: 75,
                spread: 70,
                origin: { y: 0.4 }, // más arriba en pantalla
                colors: [
                    "#2563eb", // altiblue
                    "#38bdf8", // celeste
                    "#22c55e", // verde acento
                    "#fb923c", // naranja coral
                    "#fff"     // blanco
                ]
            });
        }
    }, [show]);

    // El canvas cubre el wizard sin molestar, pointer-events-none
    return (
        <canvas
            ref={ref}
            className="pointer-events-none fixed inset-0 z-50"
            style={{ width: "100vw", height: "100vh" }}
            aria-hidden="true"
        />
    );
}
