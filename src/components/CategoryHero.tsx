import ValueProposition from "./ValueProposition";
import BreadcrumbListComponent from "./BreadcrumbListComponent";
import type { Breadcrumbs } from "@/types/breadcrumb";

type CategoryHeroProps = {
  breadcrumbs: Breadcrumbs;
  title: string;
  description: string;
};

export default function CategoryHero({
  breadcrumbs,
  title,
  description,
}: CategoryHeroProps) {
  return (
    <div className="text-center flex flex-col border-b border-border pt-3 pb-4">
      <main className="flex flex-col items-center self-center max-w-6xl w-full gap-2 md:gap-4">
        <BreadcrumbListComponent breadcrumbs={breadcrumbs} />
        <h1 className="capitalize mx-3 mt-4">{title}</h1>
        <p className="text-secondary-foreground mx-3 mb-8 md:text-lg text-sm max-w-3xl">
          {description}
        </p>
        <ValueProposition />
      </main>
    </div>
  );
}
