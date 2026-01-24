"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to bring your ideas to life."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card variant="gradient">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
                  <p className="text-muted-foreground">
                    I&apos;m currently open to freelance opportunities and interesting projects.
                    Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{siteConfig.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Follow me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={link.name}
                      >
                        {iconMap[link.icon]}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none",
                            errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none",
                            errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        className={cn(
                          "w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none",
                          errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                        {...register("subject")}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-500">{errors.subject.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Your message..."
                        className={cn(
                          "w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none",
                          errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={isLoading}
                    >
                      {!isLoading && <Send className="mr-2 h-5 w-5" />}
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
