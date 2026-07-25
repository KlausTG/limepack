import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItems } from "../types/faq";

type SectionFAQProps = {
  items: FAQItems;
};

export default function SectionFAQ({ items }: SectionFAQProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col w-full px-4 md:py-16 py-10 border-b border-border">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="md:mb-6 mb-4 text-center">Frequently asked questions</h2>
        <Accordion className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
