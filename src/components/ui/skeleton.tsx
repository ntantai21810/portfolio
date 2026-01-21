import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-muted",
        className
      )}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="space-y-6 text-center">
        <Skeleton className="h-16 w-[400px] mx-auto" />
        <Skeleton className="h-8 w-[300px] mx-auto" />
        <Skeleton className="h-6 w-[500px] mx-auto" />
        <div className="flex gap-4 justify-center pt-4">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
