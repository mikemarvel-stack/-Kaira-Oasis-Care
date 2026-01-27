const teamMembers = [
  {
    name: "Kaddy Gales, RN, BSN",
    role: "CEO & Founder",
    specialty: "Residential Care",
    bio: "Kaddy Gales, RN, BSN, founded Kaira Oasis Care in 2021 with a passion for providing compassionate residential care. With her nursing background and dedication to personalized service, she leads every aspect of our organization to ensure our residents receive the highest quality care and support.",
    image: "/Kaddy Gales.jpeg",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-muted">
      <div className="container-section">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Meet Our Compassionate Caregivers
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of healthcare professionals brings years of experience 
            and heartfelt compassion to every patient and family we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="card-hospice text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{member.specialty}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
