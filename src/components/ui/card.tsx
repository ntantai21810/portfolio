import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const baseStyles = "rounded-2xl transition-all duration-300";

    const variants = {
      default: "bg-card border border-border",
      glass: "glass",
      gradient:
        "bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border/50",
    };

    const hoverStyles = hover
      ? "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  )
);

CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);

CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
