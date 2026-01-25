import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="home" />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
