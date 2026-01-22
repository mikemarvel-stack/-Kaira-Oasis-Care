import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-hospice.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate("/#contact");
  };

  const handleLearnServices = () => {
    navigate("/services");
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Compassionate hospice care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container-section relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
            Serving families with dignity since 1995
          </span>
          
          <h1 className="heading-display text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Compassionate Care in Life's Most Precious Moments
          </h1>
          
          <p className="text-body text-primary-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            At kaira Oasis care, we believe every moment matters. Our dedicated team provides 
            comfort, dignity, and support for patients and families during their journey, 
            wherever they call home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              onClick={handleConsultation}
              className="btn-primary flex items-center gap-2 text-base"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              onClick={handleLearnServices}
              className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/30 px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Learn About Our Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-primary-foreground">25+</p>
                <p className="text-sm text-primary-foreground/80">Years of Service</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary-foreground">10,000+</p>
                <p className="text-sm text-primary-foreground/80">Families Served</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary-foreground">24/7</p>
                <p className="text-sm text-primary-foreground/80">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
