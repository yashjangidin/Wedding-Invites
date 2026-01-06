import { motion } from 'framer-motion';

const CarSection = () => {
    return (
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-12">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="font-cinzel font-bold text-3xl md:text-5xl text-center text-white mb-8 z-10 text-glow-white"
            >
                Just Married!
            </motion.h2>

            {/* Car Image - Centered and Prominent */}
            <motion.div
                className="relative w-full max-w-4xl mx-auto z-10 flex justify-center"
                initial={{ x: -300, opacity: 0, scale: 0.8 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 2.5,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                <img
                    src="/car-new.png"
                    alt="Just Married Car"
                    className="w-full h-auto"
                    style={{
                        filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                    }}
                />
            </motion.div>
        </section>
    );
};

export default CarSection;
