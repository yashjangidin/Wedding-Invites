import { motion } from 'framer-motion';
import { Cloud, Car, Hash, Bus } from 'lucide-react';

const InfoSection = () => {
    const infoCards = [
        {
            icon: Cloud,
            title: 'Weather',
            content: 'Pleasant evening weather expected. Light shawls recommended for outdoor events.',
            color: 'border-blue-400',
        },
        {
            icon: Car,
            title: 'Parking',
            content: 'Ample parking available at the venue. Valet service provided for all guests.',
            color: 'border-purple-400',
        },
        {
            icon: Hash,
            title: 'Hashtag',
            content: '#AbhishekKanikaForever',
            color: 'border-pink-400',
        },
        {
            icon: Bus,
            title: 'Transport',
            content: 'Shuttle service available from major hotels. Contact us for pickup details.',
            color: 'border-green-400',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/info-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-cinzel font-bold text-4xl md:text-6xl text-center text-white mb-16"
                >
                    Important Information
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {infoCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className={`glass-strong rounded-2xl p-8 border-2 ${card.color} hover:scale-105 transition-transform duration-300`}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className={`p-4 rounded-full bg-white/10 border-2 ${card.color}`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="font-cinzel font-bold text-2xl md:text-3xl text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-cinzel text-base md:text-lg text-white/90 leading-relaxed">
                                        {card.content}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Footer */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="font-vibes text-3xl md:text-4xl text-amber-300 mb-4">
                        We can't wait to celebrate with you!
                    </p>
                    <p className="font-cinzel text-sm md:text-base text-white/60">
                        With love, Abhishek & Kanika
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default InfoSection;
