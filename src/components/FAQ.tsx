import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is hospice care?",
    answer: "Hospice care is specialized medical care focused on providing comfort, support, and quality of life for individuals facing a life-limiting illness. Rather than curative treatment, hospice emphasizes pain management, symptom control, and emotional support for both patients and their families.",
    category: "General",
  },
  {
    question: "Who is eligible for hospice care?",
    answer: "Generally, hospice care is available to individuals with a life expectancy of six months or less if the illness runs its normal course. A physician must certify this prognosis. However, patients can continue receiving hospice care beyond six months if they still meet the criteria.",
    category: "Eligibility",
  },
  {
    question: "Where is hospice care provided?",
    answer: "Hospice care can be provided wherever the patient calls home—in a private residence, assisted living facility, nursing home, or in a dedicated hospice facility. Our team brings care directly to you, ensuring comfort in familiar surroundings.",
    category: "Services",
  },
  {
    question: "What services are included in hospice care?",
    answer: "Our comprehensive hospice care includes physician services, nursing care, pain and symptom management, medical equipment and supplies, medications related to the terminal diagnosis, counseling services, spiritual support, volunteer assistance, and bereavement support for families.",
    category: "Services",
  },
  {
    question: "How is hospice care paid for?",
    answer: "Medicare, Medicaid, and most private insurance plans cover hospice care. The Medicare Hospice Benefit covers virtually all costs related to the terminal illness, including medications, equipment, and 24/7 access to care. We also offer financial assistance programs for those who qualify.",
    category: "Financial",
  },
  {
    question: "Can a patient leave hospice care?",
    answer: "Yes, absolutely. Hospice care is voluntary, and patients can choose to leave at any time to pursue curative treatment. If circumstances change, patients can also return to hospice care when appropriate.",
    category: "General",
  },
  {
    question: "What support is available for family members?",
    answer: "We provide extensive family support including caregiver training, respite care, 24/7 phone support, family counseling, and bereavement services that continue for up to 13 months after a loved one's passing. Our social workers and chaplains are also available to provide emotional and spiritual support.",
    category: "Family Support",
  },
  {
    question: "How do I start the process of getting hospice care?",
    answer: "Simply contact us by phone or through our website. We'll arrange a free consultation to discuss your situation, answer questions, and determine if hospice is the right choice. We can coordinate with your physician to facilitate the referral process.",
    category: "Getting Started",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            We understand you may have many questions about hospice care. 
            Here are answers to some of the most common questions we receive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-hospice border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
