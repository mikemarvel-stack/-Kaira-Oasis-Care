import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import PageMeta from "@/components/PageMeta";
import { Heart, Award, Users, Clock } from "lucide-react";
import careComfortImage from "@/assets/care-comfort.jpg";
import familySupportImage from "@/assets/family-support.jpg";

const stats = [
  { icon: Heart, value: "30+", label: "Residents Served" },
  { icon: Award, value: "~5", label: "Years of Service" },
  { icon: Users, value: "1", label: "Founder" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const values = [
  {
    title: "Compassion",
    description: "Every interaction is guided by genuine care and empathy for patients and families.",
  },
  {
    title: "Dignity",
    description: "We honor each person's unique life journey and respect their wishes and values.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in medical care and patient comfort.",
  },
  {
    title: "Integrity",
    description: "We act with honesty and transparency in all our relationships and decisions.",
  },
  {
    title: "Collaboration",
    description: "We work together as a team and partner with families to provide the best care.",
  },
  {
    title: "Innovation",
    description: "We continuously improve our practices to better serve our community.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="about" />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-muted">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  About Us
                </span>
                <h1 className="heading-hero text-foreground mb-6">
                  Compassionate Residential Care Since 2021
                </h1>
                <p className="text-body text-muted-foreground mb-6">
                  Since 2021, Kaira Oasis Care has been providing exceptional 
                  residential care to residents and families in our community. Our 
                  mission is to ensure that every resident experiences comfort, dignity, and love 
                  through personalized, compassionate care.
                </p>
                <p className="text-body text-muted-foreground">
                  Founded by Kaddy Gales, RN, BSN, our organization is dedicated to 
                  delivering quality residential care with a personal touch. We believe 
                  in building meaningful relationships with every resident and family we serve.
                </p>
              </div>
              <div className="relative">
                <img
                  src={careComfortImage}
                  alt="Compassionate residential care"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                  <img
                    src={familySupportImage}
                    alt="Family support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container-section">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-display text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="card-care">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To provide exceptional, compassionate residential care that honors the 
                  dignity of every resident while supporting families through their care journey. We believe everyone deserves to experience 
                  comfort, peace, and love in a safe, nurturing environment.
                </p>
              </div>
              <div className="card-care">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To be the leading residential care provider in our region, recognized 
                  for excellence in person-centered care, compassion, and dedication 
                  to the residents and families we serve. We envision a 
                  community where quality residential care is accessible, compassionate, and 
                  dignified for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">Our Core Values</h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                These values guide everything we do and shape the care we provide.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="card-care">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
