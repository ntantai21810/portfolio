"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionButton } from "@/components/ui/button";
import { siteConfig, skills, experiences } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into who I am, my skills, and my journey"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Bio & Skills */}
          <div className="space-y-8">
            {/* Bio Card */}
            <motion.div variants={itemVariants}>
              <Card variant="gradient" className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo placeholder */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl md:text-5xl text-white font-bold mx-auto md:mx-0">
                        JD
                      </div>
                    </div>
                    {/* Bio text */}
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">{siteConfig.name}</h3>
                      <p className="text-primary font-medium mb-2">{siteConfig.title}</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{siteConfig.location}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        I&apos;m a passionate developer with 5+ years of experience building
                        scalable web applications. I love turning complex problems into
                        simple, beautiful solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillTag key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <MotionButton variant="outline" size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </MotionButton>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Experience & Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function SkillTag({ skill }: { skill: { name: string; level: number } }) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
        {skill.name}
      </span>
      {/* Tooltip showing skill level */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {skill.level}% proficiency
      </span>
    </motion.div>
  );
}

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const isWork = experience.type === "work";

  return (
    <motion.div
      className="relative pl-10 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Icon */}
      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        {isWork ? (
          <Briefcase className="h-4 w-4 text-primary" />
        ) : (
          <GraduationCap className="h-4 w-4 text-primary" />
        )}
      </div>

      <Card hover className="overflow-hidden">
        <CardContent className="p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <div>
              <h4 className="font-semibold">{experience.title}</h4>
              <p className="text-primary text-sm">{experience.company}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {experience.startDate} - {experience.endDate}
            </div>
          </div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
