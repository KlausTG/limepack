import data from "@/data/content";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const BENTO_SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-2",
] as const;

export default function Testimonials() {
  const { testimonials } = data;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col w-full px-4 md:py-16 py-10 border-b border-border">
      <div className="mx-auto md:space-y-3 space-y-1 w-full max-w-6xl">
        <h2 className="text-center">Trusted by 7.765 companies</h2>
        <p className="text-center md:mb-10 mb-4 text-secondary-foreground">
          Here's what some of our customers have to say about us
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(8rem,auto)]">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={`${item.name}-${index}`}
              name={item.name}
              quote={item.quote}
              className={BENTO_SPANS[index] ?? "md:col-span-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export type TestimonialCardProps = {
  name: string;
  quote: string;
  className?: string;
};

export function TestimonialCard({
  name,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col border border-border rounded-xl bg-secondary p-6",
        className
      )}
    >
      <div className="flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="mt-3 text-pretty">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="mt-auto pt-4 text-sm font-semibold">- {name}</p>
    </article>
  );
}
