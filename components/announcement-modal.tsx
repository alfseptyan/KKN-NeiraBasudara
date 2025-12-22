"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone } from "lucide-react";

export function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on first visit or always (for now, let's show it after a short delay)
    // We can use sessionStorage to show it only once per session if needed
    // const hasSeen = sessionStorage.getItem("hasSeenAnnouncement");
    // if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 1500); // Delay for better UX
      return () => clearTimeout(timer);
    // }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Dispatch event to notify chatbot
    window.dispatchEvent(new CustomEvent('announcementModalClosed'));
    // sessionStorage.setItem("hasSeenAnnouncement", "true");
  };

  useEffect(() => {
    // Dispatch event when modal opens
    if (isOpen) {
      window.dispatchEvent(new CustomEvent('announcementModalOpened'));
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-md bg-[#FDFBF7] rounded-2xl shadow-2xl overflow-hidden border-2 border-primary/20"
            >
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary via-orange-400 to-secondary opacity-10" />
                
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20 text-muted-foreground hover:text-foreground"
                >
                    <X size={20} />
                </button>

                <div className="relative z-10 p-6 pt-10 text-center">
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 text-primary ring-4 ring-primary/10">
                        <Megaphone size={32} />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-foreground mb-2">Salam, Kawan Neira!</h2>
                    
                    {/* Divider */}
                    <div className="w-16 h-1 bg-primary/30 mx-auto mb-6 rounded-full" />

                    {/* Content */}
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                        <p>
                            Bagi teman-teman yang telah mendaftar, Pengumuman Hasil Seleksi Berkas telah dikirimkan melalui email pendaftar masing-masing.
                        </p>
                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                            <p className="font-semibold text-foreground">
                                Silakan cek kotak masuk atau folder spam email kalian untuk informasi lebih lanjut.
                            </p>
                        </div>
                        <p>
                            Terima kasih atas antusiasme kalian untuk bergabung dengan Neira Basudara 2026!
                        </p>
                    </div>

                    {/* Footer / CTA */}
                    <div className="mt-8">
                        <button
                            onClick={handleClose}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
                        >
                            Siap, Mengerti!
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
