import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Heart, Users, Home, Clock, Stethoscope, HandHeart, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Comfort Care",
    description: "Our primary focus is ensuring your loved one experiences the highest level of comfort and dignity. We provide comprehensive pain management and symptom control using the latest medical approaches.",
    features: ["24/7 pain management", "Symptom monitoring", "Medication management", "Comfort measures"],
  },
  {
    icon: Users,
    title: "Family Support",
    description: "We understand that residential care affects the entire family. We provide emotional support, education, and resources to help family members adjust and participate in care.",
    features: ["Family counseling", "Caregiver training", "Support groups", "Respite care"],
  },
  {
    icon: Home,
    title: "Home-Based & Residential Care",
    description: "Comprehensive residential services delivered in the comfort of your residential home. Our team brings all necessary equipment, supplies, and compassionate care to ensure comfort.",
    features: ["In-home visits", "Medical equipment", "Supply delivery", "Safe facility care"],
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergencies don't follow a schedule. Our care team is available around the clock to address urgent needs, answer questions, and provide support whenever you need it.",
    features: ["Emergency response", "Phone support", "Crisis management", "After-hours visits"],
  },
  {
    icon: Stethoscope,
    title: "Medical Services",
    description: "Our founder, Kaddy Gales, RN, BSN, and her team provide comprehensive healthcare services, working closely with your personal healthcare provider.",
    features: ["Nursing oversight", "Skilled care", "Medication management", "Health coordination"],
  },
  {
    icon: HandHeart,
    title: "Spiritual Care",
    description: "Our chaplains provide spiritual support tailored to each patient's beliefs and values. We respect all faith traditions and also support those with no religious affiliation.",
    features: ["Chaplain visits", "Prayer support", "Rituals & ceremonies", "Meditation guidance"],
  },
  {
    icon: Shield,
    title: "Emotional & Social Support",
    description: "We help residents and families navigate changes and transitions. Our compassionate approach includes counseling, support groups, and resources for emotional well-being.",
    features: ["Counseling services", "Support groups", "Social connections", "Resource referrals"],
  },
  {
    icon: BookOpen,
    title: "Education & Resources",
    description: "We empower families with knowledge. Our team provides education about the disease process, what to expect, and how to provide the best care for your loved one.",
    features: ["Care education", "Disease information", "Resource guides", "Community referrals"],
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate("/#contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="services" />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-muted">
          <div className="container-section text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="heading-hero text-foreground mb-6">
              Comprehensive Residential Care Services
            </h1>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto mb-8">
              We provide a full range of residential care services designed to address the physical, 
              emotional, and spiritual needs of residents and their families. Every service is 
              delivered with compassion, dignity, and personalized attention.
            </p>
            <Button onClick={handleConsultation} className="btn-primary">Request a Consultation</Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="card-care group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-section text-center">
            <h2 className="heading-section text-primary-foreground mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Our compassionate team is here to answer your questions and help you 
              understand how residential care can support your family and loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Call 1-800-555-0199
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
