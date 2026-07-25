import type { FilterDefinition } from "@/types/filter";

/** Mock filter definitions for category product listing prototypes. */
export const CATEGORY_PRODUCT_FILTERS: FilterDefinition[] = [
  {
    id: "size",
    label: "Size",
    options: [
      { value: "250-ml", label: "250 ml" },
      { value: "350-ml", label: "350 ml" },
      { value: "450-ml", label: "450 ml" },
      { value: "500-ml", label: "500 ml" },
    ],
  },
  {
    id: "printing",
    label: "Printing option",
    options: [
      { value: "basic", label: "Basic (4 colors)" },
      { value: "advanced", label: "Advanced (6 colors)" },
    ],
  },
  {
    id: "properties",
    label: "Properties",
    options: [
      { value: "reusable", label: "Reusable" },
      { value: "dishwasher-safe", label: "Dishwasher safe" },
      { value: "freezer-safe", label: "Freezer safe" },
    ],
  },
];
