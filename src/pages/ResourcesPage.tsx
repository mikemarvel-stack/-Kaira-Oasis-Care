import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import PageMeta from "@/components/PageMeta";
import { FileText, Download, ExternalLink, BookOpen, Heart, Users, ClipboardList, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloadableForms = [
  {
    icon: ClipboardList,
    title: "Employment Application",
    description: "Comprehensive employment application form for job applicants.",
    fileName: "Employment-Application.pdf",
    category: "Employment",
  },
  {
    icon: CheckSquare,
    title: "Background Consent Form",
    description: "Authorization form for background checks and screening.",
    fileName: "Background-Consent-Form.pdf",
    category: "Compliance",
  },
  {
    icon: FileText,
    title: "Central Registry Check",
    description: "Form to authorize central registry criminal background check.",
    fileName: "Central-Registry-Check.pdf",
    category: "Compliance",
  },
  {
    icon: CheckSquare,
    title: "Drug Testing Consent",
    description: "Consent form for pre-employment and random drug screening.",
    fileName: "Drug-Testing-Consent.pdf",
    category: "Compliance",
  },
  {
    icon: FileText,
    title: "Employment Verification",
    description: "Verification of employment history and previous work experience.",
    fileName: "Employment-Verification.pdf",
    category: "Employment",
  },
  {
    icon: ClipboardList,
    title: "Job Questionnaire",
    description: "Detailed questionnaire to assess job fitness and experience.",
    fileName: "Job-Questionnaire.pdf",
    category: "Employment",
  },
  {
    icon: BookOpen,
    title: "College of Direct Support",
    description: "Information and enrollment for direct support professional training.",
    fileName: "College-Direct-Support.pdf",
    category: "Training",
  },
  {
    icon: Heart,
    title: "Grievance Procedure Form",
    description: "Form to file and track workplace grievances and concerns.",
    fileName: "Grievance-Procedure.pdf",
    category: "HR",
  },
  {
    icon: Users,
    title: "Reference Request Form",
    description: "Request form for professional references from previous employers.",
    fileName: "Reference-Request.pdf",
    category: "Employment",
  },
  {
    icon: FileText,
    title: "Direct Deposit Authorization",
    description: "Form to set up automatic direct deposit for payroll.",
    fileName: "Direct-Deposit-Authorization.pdf",
    category: "Payroll",
  },
  {
    icon: CheckSquare,
    title: "Code of Conduct Agreement",
    description: "Employee agreement to company policies and ethical standards.",
    fileName: "Code-of-Conduct-Agreement.pdf",
    category: "Compliance",
  },
  {
    icon: Heart,
    title: "Confidentiality Agreement",
    description: "Non-disclosure and confidentiality agreement for staff.",
    fileName: "Confidentiality-Agreement.pdf",
    category: "Compliance",
  },
];

const resourceGuides = [
  {
    icon: FileText,
    title: "Hospice Care Guide",
    description: "A comprehensive guide to understanding hospice care, eligibility, and what to expect.",
    type: "PDF Download",
    fileName: "Hospice-Care-Guide.pdf",
  },
  {
    icon: BookOpen,
    title: "Family Caregiver Handbook",
    description: "Essential information and tips for family members providing care at home.",
    type: "PDF Download",
    fileName: "Family-Caregiver-Handbook.pdf",
  },
  {
    icon: Heart,
    title: "Grief Support Resources",
    description: "Resources and strategies for coping with grief and supporting grieving loved ones.",
    type: "PDF Download",
    fileName: "Grief-Support-Resources.pdf",
  },
  {
    icon: Users,
    title: "Children & Grief",
    description: "Age-appropriate ways to help children understand and process grief.",
    type: "PDF Download",
    fileName: "Children-and-Grief.pdf",
  },
];

const externalResources = [
  {
    title: "National Hospice and Palliative Care Organization",
    url: "https://www.nhpco.org",
    description: "Leading organization for hospice and palliative care resources.",
  },
  {
    title: "CaringInfo",
    url: "https://www.caringinfo.org",
    description: "Free resources on advance care planning and end-of-life care.",
  },
  {
    title: "Medicare Hospice Benefits",
    url: "https://www.medicare.gov",
    description: "Official information about Medicare coverage for hospice care.",
  },
];

const handleDownload = (fileName: string) => {
  // Create a link element and trigger download
  const link = document.createElement("a");
  link.href = `/forms/${fileName}`;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ResourcesPage = () => {
  // Group forms by category
  const formsByCategory = downloadableForms.reduce(
    (acc, form) => {
      if (!acc[form.category]) {
        acc[form.category] = [];
      }
      acc[form.category].push(form);
      return acc;
    },
    {} as Record<string, typeof downloadableForms>
  );

  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="resources" />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-muted">
          <div className="container-section text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </span>
            <h1 className="heading-hero text-foreground mb-6">
              Helpful Resources & Forms
            </h1>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Download employment forms, compliance documents, and comprehensive 
              guides to help you and your family navigate the hospice journey.
            </p>
          </div>
        </section>

        {/* Downloadable Forms by Category */}
        {Object.entries(formsByCategory).map(([category, forms]) => (
          <section key={category} className="section-padding bg-background border-b border-border">
            <div className="container-section">
              <h2 className="heading-section text-foreground mb-8">{category} Forms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {forms.map((form) => (
                  <div key={form.title} className="card-hospice group">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <form.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/20 text-primary">
                        {form.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {form.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {form.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(form.fileName)}
                      className="w-full group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download PDF
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Resource Guides */}
        <section className="section-padding bg-muted">
          <div className="container-section">
            <h2 className="heading-section text-foreground mb-8 text-center">
              Comprehensive Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resourceGuides.map((resource) => (
                <div key={resource.title} className="card-hospice group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(resource.fileName)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {resource.type}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* External Resources */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <h2 className="heading-section text-foreground mb-8 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {externalResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hospice group hover:border-primary/50"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-section text-center">
            <h2 className="heading-section text-primary-foreground mb-4">
              Need Help with Forms or Resources?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our HR team is here to assist with any questions about employment forms 
              or to provide personalized guidance for your family's unique situation.
            </p>
            <Button variant="secondary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
