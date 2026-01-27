import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import careComfortImage from "@/assets/care-comfort.jpg";
import familySupportImage from "@/assets/family-support.jpg";

const values = [
  "Compassion in every interaction",
  "Dignity and respect for all",
  "Excellence in clinical care",
  "Support for the whole family",
  "Honoring individual wishes",
  "Commitment to community",
];

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={careComfortImage}
                alt="Compassionate nurse with patient"
                className="rounded-3xl shadow-lg w-full max-w-md"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 z-20">
              <img
                src={familySupportImage}
                alt="Family support moment"
                className="rounded-3xl shadow-xl w-48 md:w-64 border-4 border-background"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -bottom-12 left-1/4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About kaira Oasis care
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Compassionate Residential Care Since 2021
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Since 2021, kaira Oasis Care has been a trusted partner for families 
              seeking quality residential care. Our mission is to provide exceptional 
              care that honors dignity, brings comfort, and supports families every step of the way.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              Our dedicated founder, Kaddy Gales, RN, BSN, works closely with each resident 
              to create personalized care plans that address physical, emotional, and spiritual needs.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button onClick={handleLearnMore} className="btn-primary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
