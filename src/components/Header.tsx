import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
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
        <div className="flex items-center justify-between h-28 lg:h-24">
          {/* Logo - Improved Size & Design */}
          <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300 hover:scale-105 flex-shrink-0">
            {ORGANIZATION.logo.image ? (
              <div className="relative">
                <OptimizedImage 
                  src={ORGANIZATION.logo.image} 
                  alt={ORGANIZATION.name}
                  className="h-20 lg:h-16 w-auto object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all"
                  width={80}
                  height={80}
                  priority={true}
                />
              </div>
            ) : (
              <svg 
                viewBox="0 0 200 200" 
                className="h-20 lg:h-16 w-20 lg:w-16 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.2"/>
                  </filter>
                </defs>
                
                <circle cx="100" cy="100" r="95" fill="url(#bgGradient)" filter="url(#shadow)"/>
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                
                <path d="M 70 80 Q 65 90 70 100 Q 75 110 85 115" 
                      fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 68 85 Q 62 88 65 95" 
                      fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
                <path d="M 80 78 Q 75 82 78 92" 
                      fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
                
                <path d="M 100 95 C 100 85, 110 80, 115 80 C 120 80, 125 85, 125 90 C 125 100, 110 110, 100 120 C 90 110, 75 100, 75 90 C 75 85, 80 80, 85 80 C 90 80, 100 85, 100 95 Z"
                      fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="2"/>
                
                <path d="M 130 80 Q 135 90 130 100 Q 125 110 115 115" 
                      fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 132 85 Q 138 88 135 95" 
                      fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
                <path d="M 120 78 Q 125 82 122 92" 
                      fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
                
                <circle cx="90" cy="130" r="2" fill="white" opacity="0.6"/>
                <circle cx="100" cy="135" r="2" fill="white" opacity="0.6"/>
                <circle cx="110" cy="130" r="2" fill="white" opacity="0.6"/>
                
                <text x="50%" y="55%" fontFamily="'Playfair Display', serif" fontSize="36" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central" opacity="0.9">K</text>
                <text x="50%" y="75%" fontFamily="'Playfair Display', serif" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central" opacity="0.85">O</text>
              </svg>
            )}
            <div className="flex flex-col">
              <span className="font-display text-2xl lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{ORGANIZATION.name}</span>
              <span className="text-xs text-muted-foreground font-body leading-tight">{ORGANIZATION.tagline}</span>
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
