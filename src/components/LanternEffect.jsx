import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

const LanternEffect = () => {
    const { scrollYProgress } = useScroll();

    // Fade out lanterns quickly as user scrolls past hero section
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Generate random lanterns - using uploaded image
    const lanterns = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 12 + Math.random() * 10, // Slower for heavier feel
            size: 60 + Math.random() * 40, // Bigger lanterns (60-100px)
        }));
    }, []);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ opacity, zIndex: 5 }}
        >
            {lanterns.map((lantern) => (
                <motion.div
                    key={lantern.id}
                    className="absolute"
                    style={{
                        left: `${lantern.left}%`,
                        width: `${lantern.size}px`,
                        height: `${lantern.size}px`,
                        filter: 'drop-shadow(0 0 20px rgba(255, 149, 0, 0.8)) drop-shadow(0 0 40px rgba(255, 107, 0, 0.6))',
                    }}
                    animate={{
                        y: ['100vh', '-20vh'],
                        x: [0, Math.sin(lantern.id) * 60],
                    }}
                    transition={{
                        duration: lantern.duration,
                        delay: lantern.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <img
                        src="/lantern.png"
                        alt="Lantern"
                        className="w-full h-full object-contain"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default LanternEffect;
