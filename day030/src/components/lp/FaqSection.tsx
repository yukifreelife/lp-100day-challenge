import { useState } from 'react';
import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { AccordionItem } from '../ui/lp/AccordionItem';
import { Button } from '../ui/lp/Button';
import { SectionHeading } from '../ui/lp/SectionHeading';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-lp-panel py-lp-section">
      <div className="lp-shell">
        <SectionHeading
          label={lpContent.faq.label}
          title={lpContent.faq.title}
          description={lpContent.faq.description}
        />

        <div className="mt-lp-2xl flex flex-col gap-lp-md">
          {lpContent.faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              id={`faq-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-lp-2xl rounded-lp-card border border-lp-border bg-lp-surface p-lp-card text-center shadow-lp-card">
          <p className="text-lp-lead text-lp-text">{lpContent.faq.contactDescription}</p>
          <div className="mt-lp-lg flex justify-center">
            <Button href={lpLinks.cta.faqContact} variant="secondary">
              {lpContent.faq.contactLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
