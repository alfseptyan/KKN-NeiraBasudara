"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFBF7]"
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
            <Image
              src="/Logo neira circle.png"
              alt="Loading..."
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="h-1 w-32 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <p className="text-secondary text-sm font-medium tracking-widest animate-pulse">MEMUAT...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
