import { motion } from 'framer-motion';

const InvitationSection = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.4,
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    const invitationLines = [
        'Together with their families,',
        'Abhishek & Kanika',
        'request the honor of your presence',
        'at their wedding celebration',
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
            {/* Decorative animated priest on left - Fixed z-index */}
            <motion.div
                className="absolute left-4 md:left-12 bottom-20 w-24 md:w-36 opacity-60 z-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <img src="/priest.png" alt="Priest" className="w-full h-auto" />
            </motion.div>

            {/* Decorative animated wedding sign on right - Fixed z-index */}
            <motion.div
                className="absolute right-4 md:right-12 top-20 w-28 md:w-40 opacity-60 z-0"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                animate={{
                    y: [0, 10, 0],
                    rotate: [-1, 1, -1],
                }}
                transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <img src="/wedding-sign.png" alt="Wedding Sign" className="w-full h-auto" />
            </motion.div>

            <div className="max-w-3xl mx-auto text-center space-y-6 z-10 relative">
                {invitationLines.map((line, index) => (
                    <motion.p
                        key={index}
                        custom={index}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`
                            ${index === 1 ? 'font-vibes text-5xl md:text-7xl text-amber-300 text-glow-amber' : 'font-cinzel text-2xl md:text-3xl text-white/90 text-glow-white'}
                        `}
                    >
                        {line}
                    </motion.p>
                ))}

                <motion.div
                    className="pt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                >
                    <div className="inline-block p-6 glass-strong rounded-2xl border-2 border-amber-300/30">
                        <p className="font-vibes text-3xl md:text-4xl text-amber-300 text-glow-amber">
                            Save the Date
                        </p>
                        <p className="font-cinzel text-xl md:text-2xl text-white mt-2">
                            February 16, 2025
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InvitationSection;
