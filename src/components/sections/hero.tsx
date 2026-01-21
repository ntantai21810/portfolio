"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MotionButton } from "@/components/ui/button";
import { Scene } from "@/components/three/scene";
import { siteConfig } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <Scene className="absolute inset-0" />
        </Suspense>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <Container>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            👋 Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-6"
          >
            {siteConfig.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MotionButton
              variant="primary"
              size="lg"
              onClick={handleScrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </MotionButton>
            <MotionButton
              variant="outline"
              size="lg"
              onClick={handleScrollToContact}
            >
              Get In Touch
            </MotionButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Download Resume"
            >
              <FileText className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
