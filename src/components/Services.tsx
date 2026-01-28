import { Heart, Users, Home, Clock, Stethoscope, HandHeart, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CONTACT } from "@/lib/constants";

const services = [
  {
    icon: Heart,
    title: "Comfort Care",
    description: "Pain management and symptom control to ensure your loved one remains comfortable and at peace.",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Counseling, education, and emotional support for families throughout their residential care journey and beyond.",
  },
  {
    icon: Home,
    title: "In-Home & Residential Care",
    description: "Comprehensive residential care services delivered in the comfort of your own home or our care facility.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support from our care team, ensuring help is always just a phone call away.",
  },
  {
    icon: Stethoscope,
    title: "Medical Expertise",
    description: "Skilled nurses, physicians, and specialists providing the highest quality medical care.",
  },
  {
    icon: HandHeart,
    title: "Spiritual Care",
    description: "Chaplain services and spiritual support honoring each patient's beliefs and traditions.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Comprehensive Residential Care Services
          </h2>
          <p className="text-body text-muted-foreground">
            We provide a complete range of services designed to bring comfort, dignity, 
            and peace to residents and their families with personalized, compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-care group hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to answer your questions and help you understand 
            how residential care can support your family and loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${CONTACT.phone}`}>
              <Button className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call {CONTACT.phone}
              </Button>
            </a>
            <Button 
              onClick={handleConsultation}
              className="btn-primary flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
