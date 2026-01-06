import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const RsvpSection = () => {
    const handleRsvpClick = () => {
        // Replace with actual WhatsApp number
        window.open('https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20RSVP%20for%20the%20wedding', '_blank');
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-cinzel font-bold text-4xl md:text-6xl text-center text-white mb-16"
            >
                You're Invited!
            </motion.h2>

            {/* Ornate Mirror Frame with Couple Photo */}
            <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {/* Mirror Frame (SVG Border) */}
                <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
                    {/* Ornate frame border */}
                    <div className="absolute inset-0 rounded-t-full border-8 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-300/20 to-amber-600/20 backdrop-blur-sm">
                        {/* Decorative corners */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-amber-300 rounded-tl-3xl"></div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-amber-300 rounded-tr-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-amber-300 rounded-bl-3xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-amber-300 rounded-br-3xl"></div>
                    </div>

                    {/* Couple Photo */}
                    <div className="absolute inset-4 rounded-t-full overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80"
                            alt="Couple"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </motion.div>

            {/* RSVP Button */}
            <motion.button
                onClick={handleRsvpClick}
                className="mt-12 glass-strong px-10 py-5 rounded-full border-2 border-green-400 hover:border-green-300 transition-all duration-300 flex items-center gap-3 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                <span className="font-cinzel text-xl md:text-2xl text-white font-semibold">
                    Please RSVP
                </span>
            </motion.button>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="font-cinzel text-base md:text-lg text-white/70 text-center mt-6"
            >
                Kindly confirm your presence by February 10, 2025
            </motion.p>
        </section>
    );
};

export default RsvpSection;
