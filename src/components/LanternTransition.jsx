import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LanternTransition = () => {
    const containerRef = useRef(null);

    // Track scroll progress through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Transform scroll progress to lantern movement
    // As we scroll down (0 to 1), lanterns move up (-100% to -200%)
    const lanternY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    // Generate random positions for lanterns
    const lanterns = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 15 + Math.random() * 10,
        scale: 0.8 + Math.random() * 0.6, // Larger lanterns (0.8 to 1.4)
    }));

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden pointer-events-none"
        >
            <motion.div
                className="absolute inset-0 w-full h-[200vh]"
                style={{ y: lanternY, opacity }}
            >
                {lanterns.map((lantern) => (
                    <motion.div
                        key={lantern.id}
                        className="absolute"
                        style={{
                            left: lantern.left,
                            bottom: `${Math.random() * 100}%`,
                        }}
                        initial={{
                            y: 0,
                            opacity: 0,
                            scale: lantern.scale,
                        }}
                        animate={{
                            y: -window.innerHeight * 2,
                            opacity: [0, 1, 1, 0],
                            scale: lantern.scale,
                        }}
                        transition={{
                            duration: lantern.duration,
                            delay: lantern.delay,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        <div className="relative">
                            <img
                                src="/lantern.png"
                                alt="Floating Lantern"
                                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain aspect-square"
                                style={{
                                    filter: 'drop-shadow(0 0 20px rgba(255, 165, 0, 0.6))',
                                }}
                            />
                            {/* Glow effect */}
                            <div
                                className="absolute inset-0 rounded-full blur-xl"
                                style={{
                                    background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%)',
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default LanternTransition;
