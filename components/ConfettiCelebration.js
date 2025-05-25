// /components/ConfettiCelebration.js
import { motion } from "framer-motion";
export default function ConfettiCelebration({ show }) {
    if (!show) return null;
    return (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-start justify-center">
            <motion.div
                initial={{ y: -120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -120, opacity: 0 }}
                transition={{ duration: 0.7 }}
            >
                <img
                    src="https://cdn.jsdelivr.net/gh/stevenlei/confetti@main/confetti.gif"
                    alt="¡Celebración!"
                    className="w-40 h-20 xs:w-56 xs:h-28 sm:w-64 sm:h-32 max-w-full"
                    style={{ maxWidth: '90vw', height: 'auto' }}
                />
            </motion.div>
        </div>
    );
}
