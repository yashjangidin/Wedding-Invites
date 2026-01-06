import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
    const handleMapClick = () => {
        // Replace with actual venue coordinates
        window.open('https://maps.google.com/?q=Grand+Palace+Wedding+Venue', '_blank');
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-cinzel font-bold text-5xl md:text-7xl text-center text-white mb-12"
            >
                SEE THE ROUTE
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-cinzel text-xl md:text-2xl text-white/80 text-center mb-16 max-w-2xl"
            >
                Grand Palace Wedding Venue
                <br />
                123 Royal Avenue, City
            </motion.p>

            <motion.button
                onClick={handleMapClick}
                className="relative group"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Pulsing rings */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/30"
                    animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.6, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
                <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/30"
                    animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.6, 0, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />

                {/* Main button */}
                <div className="relative glass-strong rounded-full p-8 md:p-12 border-4 border-cyan-400 shadow-2xl">
                    <MapPin className="w-16 h-16 md:w-24 md:h-24 text-cyan-300" strokeWidth={2.5} />
                </div>
            </motion.button>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="font-cinzel text-lg md:text-xl text-white/70 text-center mt-8"
            >
                Tap to open in Google Maps
            </motion.p>
        </section>
    );
};

export default MapSection;
