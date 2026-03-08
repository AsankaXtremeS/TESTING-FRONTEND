"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex-1 flex min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
