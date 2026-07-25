import { ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FilterOption } from "@/types/filter";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export type FilterChipProps = {
  label: string;
  value: string[];
  options: FilterOption[];
  className?: string;
  onValueChange: (value: string[]) => void;
};

export function FilterChip({
  label,
  value,
  options,
  className,
  onValueChange,
}: FilterChipProps) {
  const selectedLabels = value
    .map(
      (selected) =>
        options.find((option) => option.value === selected)?.label ?? selected,
    )
    .join(", ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted/50 px-3 text-sm transition-colors hover:border-border hover:bg-muted",
          className,
        )}
      >
        <span className="text-muted-foreground">{label}</span>
        {value.length > 0 && (
          <span className="font-semibold text-foreground">{selectedLabels}</span>
        )}
        {value.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="size-6 hover:bg-muted"
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onValueChange([]);
            }}
            aria-label={`Clear ${label} filter`}
          >
            <X className="size-4" />
          </Button>
        )}
        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuCheckboxItem
          checked={value.length === 0}
          onCheckedChange={(checked) => {
            if (checked) {
              onValueChange([]);
            }
          }}
        >
          All
        </DropdownMenuCheckboxItem>
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={value.includes(option.value)}
            onCheckedChange={(checked) => {
              if (checked) {
                onValueChange([...value, option.value]);
              } else {
                onValueChange(value.filter((v) => v !== option.value));
              }
            }}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
