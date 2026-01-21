interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
