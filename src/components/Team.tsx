import teamDoctor from "@/assets/team-doctor.jpg";
import teamNurse from "@/assets/team-nurse.jpg";
import teamCaregiver from "@/assets/team-caregiver.jpg";
import teamSocialWorker from "@/assets/team-social-worker.jpg";

const teamMembers = [
  {
    name: "Dr. Elizabeth Chen",
    role: "Medical Director",
    specialty: "Palliative Medicine",
    bio: "With over 25 years of experience in hospice care, Dr. Chen leads our medical team with compassion and expertise. She is board-certified in both internal medicine and hospice/palliative care.",
    image: teamDoctor,
  },
  {
    name: "Michael Rodriguez, RN",
    role: "Nursing Director",
    specialty: "Hospice Nursing",
    bio: "Michael brings 15 years of hospice nursing experience to our team. His gentle approach and clinical expertise make him an invaluable member of our care staff.",
    image: teamNurse,
  },
  {
    name: "Aisha Johnson",
    role: "Lead Caregiver",
    specialty: "Patient Comfort Care",
    bio: "Aisha's dedication to patient comfort and dignity has made her one of our most beloved caregivers. She specializes in creating peaceful, nurturing environments for our patients.",
    image: teamCaregiver,
  },
  {
    name: "David Thompson, LCSW",
    role: "Social Services Director",
    specialty: "Family Counseling",
    bio: "David provides emotional support and counseling to patients and families. His expertise in grief counseling and family dynamics helps guide families through difficult times.",
    image: teamSocialWorker,
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
