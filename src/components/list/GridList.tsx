import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GridListProps = {
  children: ReactNode;
  className?: string;
};

export function GridList({ children, className }: GridListProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 w-full self-center max-w-6xl lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
