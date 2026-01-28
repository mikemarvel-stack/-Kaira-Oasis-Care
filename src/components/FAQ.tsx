import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is residential care?",
    answer: "Residential care is personalized living support that provides assistance with daily activities, health management, and personal care. Our service focuses on maintaining independence while providing compassionate support for those who need help with activities of daily living and overall wellbeing.",
    category: "General",
  },
  {
    question: "Who can benefit from residential care?",
    answer: "Our residential care services are ideal for seniors, individuals recovering from illness, those with chronic conditions, or anyone who benefits from assistance with daily living activities while maintaining their independence and dignity in a comfortable home environment.",
    category: "Eligibility",
  },
  {
    question: "Where is residential care provided?",
    answer: "Residential care can be provided in your own home or in our comfortable residential facility. We bring professional care directly to you, ensuring comfort and support in familiar or safe surroundings tailored to your needs.",
    category: "Services",
  },
  {
    question: "What services are included in residential care?",
    answer: "Our comprehensive residential care includes assistance with daily living activities, health monitoring, medication management, meal preparation, housekeeping support, transportation assistance, social activities, 24/7 availability, and family coordination to ensure all aspects of care are addressed.",
    category: "Services",
  },
  {
    question: "How is residential care paid for?",
    answer: "Residential care can be covered through various means including Medicare, Medicaid (for qualified services), private insurance, long-term care insurance, or private payment. We work with families to understand coverage options and provide financial counseling to explore available resources.",
    category: "Financial",
  },
  {
    question: "Can a resident adjust their level of care?",
    answer: "Yes, absolutely. Residential care is flexible, and residents can adjust their level of services based on changing needs. As circumstances evolve, we work with residents and families to modify care plans to ensure we continue meeting your specific needs.",
    category: "General",
  },
  {
    question: "What support is available for family members?",
    answer: "We provide comprehensive family support including regular updates, care coordination meetings, caregiver resources, 24/7 communication, family counseling services, and educational programs. Our goal is to ensure families feel supported throughout the care journey.",
    category: "Family Support",
  },
  {
    question: "How do I start the process of getting residential care?",
    answer: "Simply contact us by phone or through our website to schedule a free consultation. We'll discuss your needs, tour our facilities if interested, answer all your questions, and work with you to create a personalized care plan that matches your requirements.",
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
            We understand you may have many questions about residential care. 
            Here are answers to some of the most common questions we receive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-care border-none"
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
