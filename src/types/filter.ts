export type FilterOption = {
  value: string;
  label: string;
};

export type FilterDefinition = {
  id: string;
  label: string;
  options: FilterOption[];
};

/** Selected option values keyed by filter id (prototype UI state only). */
export type FilterState = Record<string, string[]>;

export function createEmptyFilterState(filters: FilterDefinition[]): FilterState {
  return Object.fromEntries(filters.map((filter) => [filter.id, []]));
}
