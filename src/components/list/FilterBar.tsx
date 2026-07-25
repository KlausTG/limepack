import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import {
  createEmptyFilterState,
  type FilterDefinition,
  type FilterState,
} from "@/types/filter";
import { FilterChip } from "../ui/filter-chip";

export type FilterBarProps = {
  filters: FilterDefinition[];
  className?: string;
};

export function FilterBar({ filters, className }: FilterBarProps) {
  const initialState = useMemo(
    () => createEmptyFilterState(filters),
    [filters]
  );
  const [filterState, setFilterState] = useState<FilterState>(initialState);

  const updateFilter = (filterId: string, value: string[]) => {
    setFilterState((current) => ({ ...current, [filterId]: value }));
  };

  return (
    <div
      className={cn("flex w-full flex-wrap items-center gap-2 mb-4", className)}
    >
      {filters.map((filter) => (
        <FilterChip
          key={filter.id}
          label={filter.label}
          options={filter.options}
          value={filterState[filter.id] ?? []}
          onValueChange={(value) => updateFilter(filter.id, value)}
        />
      ))}
    </div>
  );
}
