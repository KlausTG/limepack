import type { ReactNode } from "react";
import { CATEGORY_PRODUCT_FILTERS } from "@/data/categoryProductFilters";
import type { Products } from "@/types/product";
import { FilterBar } from "./FilterBar";
import { GridList } from "./GridList";
import { GridItemTestimonial, GridItemVideo } from "./GridItems";
import GridItemProduct from "./GridItemProduct";

type GridHighlight = {
  afterProductCount: number;
  node: ReactNode;
};

const GRID_HIGHLIGHTS: GridHighlight[] = [
  {
    afterProductCount: 2,
    node: <GridItemVideo key="category-grid-video" />,
  },
  {
    afterProductCount: 2,
    node: (
      <GridItemTestimonial
        key="category-grid-testimonial"
        testimonialIndex={5}
      />
    ),
  },
];

type CategoryListProductsProps = {
  products: Products;
};

export default function CategoryListProducts({
  products,
}: CategoryListProductsProps) {
  const gridItems: ReactNode[] = [];

  products.forEach((product, index) => {
    gridItems.push(<GridItemProduct key={product.model} product={product} />);
    const productCount = index + 1;

    for (const { afterProductCount, node } of GRID_HIGHLIGHTS) {
      if (productCount === afterProductCount) {
        gridItems.push(node);
      }
    }
  });

  for (const { afterProductCount, node } of GRID_HIGHLIGHTS) {
    if (products.length < afterProductCount) {
      gridItems.push(node);
    }
  }

  return (
    <main className="flex flex-col w-full border-b border-border md:pb-24 pb-10">
      <section className="flex flex-col w-full max-w-6xl self-center py-4 px-4 xl:px-0">
        <FilterBar filters={CATEGORY_PRODUCT_FILTERS} />
        <GridList>{gridItems}</GridList>
      </section>
    </main>
  );
}
