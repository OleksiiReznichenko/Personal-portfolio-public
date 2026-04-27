"use client"

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// export default function AnimationWrapper({ index, children }: { index: number, children: React.ReactNode }) {
export default function AnimationWrapper({ key, children }: { key: number | string, children: React.ReactNode }) {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const pathname = usePathname();

    return (
        <motion.div
            // key={pathname.split("/")[index + 1]}
            key={key}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 0.5 }}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </motion.div>
    )
}