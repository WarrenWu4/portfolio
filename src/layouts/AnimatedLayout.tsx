import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface AnimatedLayoutProps {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

export default function AnimatedLayout({children, className}: AnimatedLayoutProps) {

    const variants = {
        visible: {opacity: 1, transform: `translateY(0)`},
        hidden: {opacity: 0, transform: `translateY(1rem)`}
    }
    const transition = { 
        duration: 1, 
        ease:"easeInOut",
    }

    return (
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            transition={transition} 
            variants={variants} 
            className={twMerge("w-full",className)}
        >

            {children}

        </motion.div>
    )
}