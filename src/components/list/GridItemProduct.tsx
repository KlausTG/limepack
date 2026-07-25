import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { Badge } from "../ui/badge";
import { TruckIcon, PoundSterlingIcon, type LucideIcon } from "lucide-react";

type GridItemProductProps = {
  product: Product;
};

export default function GridItemProduct({
  product: {
    name,
    description,
    image,
    badge,
    previewThumbnails,
    moq,
    pricePerUnit,
    setupCost,
    deliveryTimeWeeks,
  },
}: GridItemProductProps) {
  const [previewIndex, setPreviewIndex] = useState<number>(0);
  const minTotalPrice = useMemo(() => {
    return `Min. £${(setupCost + pricePerUnit.max * moq.min)
      .toFixed(2)
      .toLocaleString()} total for ${moq.min.toLocaleString()} units`;
  }, [setupCost, pricePerUnit.max, moq.min]);

  const deliveryTime = !deliveryTimeWeeks.min
    ? `${deliveryTimeWeeks.max} weeks or less`
    : `${deliveryTimeWeeks.min}-${deliveryTimeWeeks.max} weeks`;

  return (
    <div className="group cursor-pointer relative bg-secondary border hover:border-primary transition-all duration-300 border-border rounded-lg overflow-hidden">
      <div className="absolute top-3 space-x-2 right-3 z-10 md:translate-y-[-150%] group-hover:translate-y-0 transition-all duration-300">
        {badge.map((badge) => (
          <Badge key={badge} variant="secondary">
            {badge}
          </Badge>
        ))}
      </div>
      <section className="relative overflow-hidden">
        <img
          className="w-full group-hover:scale-102 transition-all duration-300 h-full object-cover aspect-square pointer-events-none select-none"
          src={previewThumbnails[previewIndex].url ?? image}
          alt={name}
        />
        <div
          className="flex absolute inset-0"
          onMouseLeave={() => setPreviewIndex(0)}
        >
          {previewThumbnails.slice(1).map((_, i) => {
            const index = i + 1;
            return (
              <div
                key={index}
                onMouseEnter={() => setPreviewIndex(index)}
                className="flex-1"
              />
            );
          })}
        </div>
      </section>
      <section className="p-4 flex flex-col md:gap-1.5">
        <h5>
          {name}{" "}
          <span className="text-secondary-foreground font-normal text-sm">
            ({previewThumbnails[previewIndex]?.suffix ?? "4 sizes"})
          </span>
        </h5>
        <p className="text-secondary-foreground mb-2">{description}</p>
        <div className="space-y-2 text-xs font-semibold">
          <FooterItem icon={PoundSterlingIcon} label={minTotalPrice} />
          <FooterItem icon={TruckIcon} label={deliveryTime} />
        </div>
      </section>
    </div>
  );
}

const FooterItem = ({ icon, label }: { icon: LucideIcon; label: string }) => {
  const Icon = icon;
  return (
    <p>
      <span className="inline-block mr-1 align-text-bottom">
        <Icon className="size-4" />
      </span>
      {label}
    </p>
  );
};
