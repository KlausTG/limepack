import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const valuePropositionItems = [
  { label: "Design setup included" },
  { label: "Printed in EU" },
  { label: "No hidden fees" },
  { label: "Free shipping in UK" },
];

const valuePropositionAriaLabel = valuePropositionItems
  .map((item) => item.label)
  .join(", ");

export default function ValueProposition() {
  return (
    <>
      <div className="hidden md:flex justify-center items-center gap-8">
        {valuePropositionItems.map((item) => (
          <ValuePropositionItem key={item.label} label={item.label} />
        ))}
      </div>

      <div
        className="md:hidden w-full overflow-hidden motion-reduce:hidden"
        aria-label={valuePropositionAriaLabel}
      >
        <div
          className="flex w-max shrink-0 items-center gap-8 animate-value-proposition-marquee"
          aria-hidden="true"
        >
          {[...valuePropositionItems, ...valuePropositionItems].map(
            (item, index) => (
              <ValuePropositionItem
                key={`${index}-${item.label}`}
                label={item.label}
                className="shrink-0"
              />
            ),
          )}
        </div>
      </div>

      <div className="hidden flex-col items-center gap-2 md:hidden motion-reduce:flex">
        {valuePropositionItems.map((item) => (
          <ValuePropositionItem key={item.label} label={item.label} />
        ))}
      </div>
    </>
  );
}

type ValuePropositionItemProps = {
  label: string;
  className?: string;
};

const ValuePropositionItem = ({
  label,
  className,
}: ValuePropositionItemProps) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <CheckIcon className="size-5 shrink-0 text-accent-foreground" />
      <p className="text-sm font-semibold whitespace-nowrap">{label}</p>
    </div>
  );
};
