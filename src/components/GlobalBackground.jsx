import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlobalBackground = () => {
    const { scrollYProgress } = useScroll();
    const [currentBg, setCurrentBg] = useState(0);

    // Define scroll thresholds for sudden transitions
    // Green (0-33%), Blue (33-66%), Yellow (66-100%)
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            if (latest < 0.33) {
                setCurrentBg(0); // Green
            } else if (latest < 0.66) {
                setCurrentBg(1); // Blue
            } else {
                setCurrentBg(2); // Yellow
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const backgrounds = [
        '/bg-green.jpg',
        '/bg-blue.jpg',
        '/bg-yellow.jpg',
    ];

    return (
        <>
            {backgrounds.map((bg, index) => (
                <motion.div
                    key={bg}
                    className="fixed inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg})`,
                        zIndex: -1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: currentBg === index ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.5, // Slightly longer for smoother transition
                        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smoothness
                    }}
                />
            ))}
        </>
    );
};

export default GlobalBackground;
