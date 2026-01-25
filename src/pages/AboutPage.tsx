import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import PageMeta from "@/components/PageMeta";
import { Heart, Award, Users, Clock } from "lucide-react";
import careComfortImage from "@/assets/care-comfort.jpg";
import familySupportImage from "@/assets/family-support.jpg";

const stats = [
  { icon: Heart, value: "2,500+", label: "Patients Served" },
  { icon: Award, value: "25+", label: "Years of Service" },
  { icon: Users, value: "150+", label: "Care Team Members" },
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
                  A Legacy of Compassionate Care
                </h1>
                <p className="text-body text-muted-foreground mb-6">
                  For over 25 years, kaira Oasis care has been providing exceptional 
                  end-of-life care to patients and families in our community. Our 
                  mission is to ensure that every person's final chapter is filled 
                  with comfort, dignity, and love.
                </p>
                <p className="text-body text-muted-foreground">
                  Founded by healthcare professionals who saw the need for more 
                  compassionate end-of-life care, we've grown from a small team to 
                  a comprehensive hospice organization serving thousands of families.
                </p>
              </div>
              <div className="relative">
                <img
                  src={careComfortImage}
                  alt="Compassionate hospice care"
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
              <div className="card-hospice">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To provide exceptional, compassionate hospice care that honors the 
                  dignity of every patient while supporting families through life's 
                  most challenging moments. We believe everyone deserves to experience 
                  comfort, peace, and love in their final days.
                </p>
              </div>
              <div className="card-hospice">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To be the leading hospice care provider in our region, recognized 
                  for excellence in patient care, innovation in palliative medicine, 
                  and unwavering commitment to the families we serve. We envision a 
                  community where end-of-life care is accessible, compassionate, and 
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
                <div key={value.title} className="card-hospice">
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
