import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT } from "@/lib/constants";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Anytime",
    content: CONTACT.phone,
    subContent: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: CONTACT.email,
    subContent: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    content: CONTACT.address,
    subContent: `${CONTACT.city}, ${CONTACT.state} ${CONTACT.zipCode}`,
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: `Mon - Fri: ${CONTACT.hours.weekday}`,
    subContent: `Care ${CONTACT.hours.weekend}`,
  },
];

const Contact = () => {
  const { submitForm, isSubmitting } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Spam prevention field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitForm(formData);
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="heading-section text-foreground mb-6">
              We're Here to Help
            </h2>
            <p className="text-body text-muted-foreground mb-10">
              Whether you have questions about our residential care services, need immediate support, 
              or want to learn more about how we can help, our compassionate team is 
              ready to assist you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subContent}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-hospice">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Request a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="bg-background border-border rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="bg-background border-border rounded-xl h-12"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background border-border rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="bg-background border-border rounded-xl h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  How Can We Help?
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your situation and how we can support you..."
                  required
                  className="bg-background border-border rounded-xl min-h-[120px] resize-none"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">
                    Minimum 10 characters required
                  </span>
                  <span className={`text-xs ${formData.message.length < 10 ? 'text-destructive' : 'text-green-600'}`}>
                    {formData.message.length}/100
                  </span>
                </div>
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
