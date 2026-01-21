"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MotionButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[150px] md:text-[200px] font-bold leading-none gradient-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/">
              <MotionButton variant="primary" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </MotionButton>
            </Link>
            <MotionButton
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </MotionButton>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
