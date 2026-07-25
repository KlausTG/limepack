import bulkPlasticCups from "@/assets/videos/bulk-plastic-cups.mp4";
import data from "@/data/content";
import { TestimonialCard } from "../Testimonials";

type GridItemVideoProps = {
  src?: string;
};

export function GridItemVideo({ src = bulkPlasticCups }: GridItemVideoProps) {
  return (
    <video
      className="rounded-lg border border-border h-full object-cover pointer-events-none select-none"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    />
  );
}

type GridItemTestimonialProps = {
  name?: string;
  quote?: string;
  /** Pick from `data.testimonials` when name/quote are omitted. */
  testimonialIndex?: number;
};

export function GridItemTestimonial({
  name,
  quote,
  testimonialIndex = 2,
}: GridItemTestimonialProps) {
  const fallback = data.testimonials[testimonialIndex] ?? data.testimonials[0];

  if (!fallback) {
    return null;
  }

  return (
    <TestimonialCard
      name={name ?? fallback.name}
      quote={quote ?? fallback.quote}
      className="h-full min-h-0 rounded-lg"
    />
  );
}
