import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret Sullivan",
    relation: "Daughter of Patient",
    content: "The care team at kaira Oasis care became like family to us. They treated my mother with such dignity and compassion, and supported our entire family through the most difficult time of our lives.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    relation: "Son of Patient",
    content: "I cannot express enough gratitude for the 24/7 support we received. Whenever we had questions or concerns, someone was always there to help. They truly went above and beyond.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    relation: "Spouse of Patient",
    content: "kaira Oasis care allowed my husband to spend his final days at home, surrounded by family. The nurses were incredibly skilled and caring. We felt supported every moment.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Stories from Families We've Served
          </h2>
          <p className="text-body text-muted-foreground">
            The trust families place in us is our greatest honor. Here are some 
            of the experiences shared by those we've had the privilege to serve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-hospice relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-body-sm text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.relation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
