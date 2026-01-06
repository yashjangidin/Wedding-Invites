import { motion } from 'framer-motion';
import LanternEffect from '../components/LanternEffect';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                delayChildren: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            <LanternEffect />

            <motion.div
                className="text-center z-10 space-y-4 md:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="font-cinzel font-bold text-5xl md:text-7xl lg:text-9xl text-white tracking-wider text-glow-white"
                >
                    Abhishek
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="font-vibes text-4xl md:text-6xl lg:text-8xl text-amber-300 text-glow-amber"
                >
                    Weds
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="font-cinzel font-bold text-5xl md:text-7xl lg:text-9xl text-white tracking-wider text-glow-white"
                >
                    Kanika
                </motion.h1>
            </motion.div>

            {/* Palace Image - Full Screen Coverage */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 w-full h-full flex items-end justify-center overflow-hidden"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <img
                    src="/palace.png"
                    alt="Palace"
                    className="w-full h-full object-cover opacity-40"
                    style={{
                        filter: 'drop-shadow(0 -10px 40px rgba(255, 215, 0, 0.4))',
                        objectPosition: 'bottom center',
                    }}
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
