import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setProgress(latest);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return progress;
};
