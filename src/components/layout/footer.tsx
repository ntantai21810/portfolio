"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              JD.
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </Container>
    </footer>
  );
}
