import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ORGANIZATION, CONTACT, ROUTES } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === ROUTES.home;

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to contact section
      const contactElement = document.getElementById("contact");
      contactElement?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other pages, navigate to home with contact hash
      navigate("/#contact");
    }
    
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: ROUTES.home, isRoute: true },
    { name: "Services", href: ROUTES.services, isRoute: true },
    { name: "About Us", href: ROUTES.about, isRoute: true },
    { name: "Resources", href: ROUTES.resources, isRoute: true },
    { name: "Blog", href: ROUTES.blog, isRoute: true },
    { name: "Contact", href: ROUTES.contact, isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-lg font-bold">{ORGANIZATION.logo.initials}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-semibold text-foreground">{ORGANIZATION.name}</span>
              <span className="text-xs text-muted-foreground font-body">{ORGANIZATION.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`link-nav text-sm ${location.pathname === link.href ? "text-primary" : ""}`}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="link-nav text-sm"
                  onClick={handleContactClick}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              <span>{CONTACT.phone}</span>
            </a>
            <a 
              href={ROUTES.contact}
              onClick={handleContactClick}
              className="cursor-pointer"
            >
              <Button className="btn-primary">Get Started</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`link-nav text-lg py-2 ${location.pathname === link.href ? "text-primary" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="link-nav text-lg py-2"
                    onClick={(e) => {
                      setIsMenuOpen(false);
                      handleContactClick(e);
                    }}
                  >
                    {link.name}
                  </a>
                )
              )}
              <div className="pt-4 border-t border-border">
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-primary font-medium mb-4">
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT.phone}</span>
                </a>
                <a 
                  href={ROUTES.contact}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleContactClick(e);
                  }}
                >
                  <Button className="btn-primary w-full">Get Started</Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
