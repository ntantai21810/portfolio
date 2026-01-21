"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={itemVariants}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        hover
        className="group overflow-hidden h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          {/* Placeholder gradient when no image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary/30">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View source code"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* View Project Link */}
          <a
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View Project
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
