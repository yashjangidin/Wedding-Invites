import { motion } from 'framer-motion';
import { Flower2, Sparkles, Heart } from 'lucide-react';

const EventsSection = () => {
    const events = [
        {
            name: 'Mehendi',
            icon: Flower2,
            iconColor: 'text-green-400',
            date: 'February 14, 2025',
            time: '4:00 PM onwards',
            venue: 'Garden Lawn, Grand Palace',
            description: 'An evening of henna, music, and celebration',
        },
        {
            name: 'Haldi',
            icon: Sparkles,
            iconColor: 'text-yellow-400',
            date: 'February 15, 2025',
            time: '10:00 AM',
            venue: 'Main Hall, Grand Palace',
            description: 'Traditional turmeric ceremony with family',
        },
        {
            name: 'Shaadi',
            icon: Heart,
            iconColor: 'text-red-400',
            date: 'February 16, 2025',
            time: '7:00 PM',
            venue: 'Royal Banquet Hall, Grand Palace',
            description: 'The sacred wedding ceremony',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-cinzel font-bold text-4xl md:text-6xl text-center text-white mb-16 text-glow-white"
                >
                    Celebrations
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative flex flex-col items-center"
                            >
                                {/* Golden Frame Placeholder as Background */}
                                <div className="relative w-full aspect-[3/4] max-w-md">
                                    <img
                                        src="/placeholder.png"
                                        alt={`${event.name} frame`}
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />

                                    {/* Text Overlay on Placeholder */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                        <div className={`p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4`}>
                                            <Icon className={`w-12 h-12 ${event.iconColor}`} />
                                        </div>

                                        <h3 className="font-cinzel font-bold text-3xl md:text-4xl text-gray-800 mb-2 text-glow-gold">
                                            {event.name}
                                        </h3>

                                        <p className="font-vibes text-xl md:text-2xl text-pink-600 mb-4">
                                            {event.description}
                                        </p>

                                        <div className="space-y-1 text-gray-700">
                                            <p className="text-base md:text-lg font-semibold">
                                                {event.date}
                                            </p>
                                            <p className="text-base md:text-lg">
                                                {event.time}
                                            </p>
                                            <p className="text-sm md:text-base">
                                                {event.venue}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default EventsSection;
