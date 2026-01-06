import { motion } from 'framer-motion';

const StorySection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Decorative animated couple on left - Fixed z-index */}
            <motion.div
                className="absolute left-4 md:left-10 top-1/4 w-24 md:w-48 opacity-80 z-20"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                animate={{
                    y: [0, -15, 0],
                    rotate: [-2, 2, -2],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <img src="/couple.png" alt="Couple" className="w-full h-auto" />
            </motion.div>

            {/* Decorative animated mandap on right - Fixed z-index */}
            <motion.div
                className="absolute right-4 md:right-10 top-1/3 w-24 md:w-48 opacity-80 z-20"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                animate={{
                    y: [0, 15, 0],
                    rotate: [2, -2, 2],
                }}
                transition={{
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <img src="/mandap.png" alt="Mandap" className="w-full h-auto" />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="font-cinzel font-bold text-4xl md:text-6xl text-center text-white mb-8 z-10 relative text-glow-white"
            >
                Meet the Bride & Groom
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1.8 }}
                className="font-vibes text-3xl md:text-5xl text-amber-300 text-center mb-12 z-10 relative text-glow-amber"
            >
                A Love Story Written in the Stars
            </motion.p>

            <motion.div
                className="mt-12 max-w-3xl text-center z-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.8 }}
            >
                <p className="font-cinzel text-lg md:text-xl text-white/90 leading-relaxed">
                    Two hearts, two souls, destined to become one. From chance encounters to
                    unforgettable moments, their journey has been nothing short of magical.
                    Now, they invite you to witness the beginning of their forever.
                </p>
            </motion.div>
        </section>
    );
};

export default StorySection;
