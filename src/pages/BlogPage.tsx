import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogComfort from "@/assets/blog-comfort.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import careComfort from "@/assets/care-comfort.jpg";
import familySupport from "@/assets/family-support.jpg";

const blogPosts = [
  {
    title: "Understanding Residential Care: A Complete Guide for Families",
    excerpt: "Residential care provides a supportive living environment for those who need assistance with daily activities. This comprehensive guide explains residential care services, benefits, and how to find the right fit for your family.",
    author: "Dr. Elizabeth Chen, MD",
    date: "January 18, 2026",
    category: "Education",
    image: blogComfort,
    slug: "understanding-residential-care",
    featured: true,
    content: `Residential care provides a compassionate, supportive living environment for individuals who need assistance with daily activities and personal care. Our residential care model prioritizes quality of life, independence with support, and meaningful community connections.

## What is Residential Care?

Residential care is a philosophy of supportive living rather than institutional care. It provides assistance in a home-like setting where residents receive personalized support with activities of daily living while maintaining their dignity and independence. The focus is on helping residents live fulfilling lives surrounded by professional support and community.

## Who Benefits from Residential Care?

Individuals who may benefit from residential care include those:
- Needing assistance with activities of daily living (bathing, dressing, medication management)
- Seeking social connection and community engagement
- Requiring 24/7 supervision for safety and security
- Wanting to age in place with professional support
- Experiencing memory challenges and seeking structured support
- Recovering from hospitalization or illness
- Seeking an alternative to traditional nursing home environments
- Requiring specialized care for chronic conditions

## Types of Residential Care Services

**Personal Care Assistance**
- Help with bathing, dressing, and grooming
- Medication management and reminders
- Mobility assistance and fall prevention
- Meal preparation and nutritional support

**Health and Wellness Support**
- Regular health monitoring and assessments
- Coordination with healthcare providers
- Physical therapy and rehabilitation services
- Mental health and emotional support

**Social and Recreational Activities**
- Group activities and social events
- Educational programs and workshops
- Arts, crafts, and creative therapies
- Outdoor activities and community outings

## Choosing the Right Residential Care

When selecting residential care, consider:
- Level of care needed and services provided
- Staff qualifications and training
- Safety measures and emergency protocols
- Community atmosphere and social opportunities
- Location and accessibility for family visits
- Cost and insurance coverage options

Residential care is appropriate for individuals at any stage of life who value community, independence, and personalized support.`,
  },
  {
    title: "Transitioning to Residential Care: A Step-by-Step Guide",
    excerpt: "Making the transition to residential care can feel overwhelming. This guide provides practical steps to help families navigate the process with confidence and ensure a smooth adjustment.",
    author: "Sarah Johnson, LCSW",
    date: "January 15, 2026",
    category: "Family Support",
    image: familySupport,
    slug: "transitioning-residential-care",
    content: `The transition to residential care is a significant life change that requires careful planning and emotional preparation. With the right approach, this transition can be positive and empowering for both residents and their families.

## Before the Move: Preparation Steps

**1. Have Open Conversations**
- Discuss the decision openly with your loved one
- Address concerns and fears honestly
- Involve them in the decision-making process
- Explain the benefits and support available

**2. Visit Potential Communities**
- Tour facilities during different times of day
- Meet with staff and ask detailed questions
- Observe the atmosphere and resident interactions
- Review care plans and service offerings

**3. Prepare Important Documents**
- Medical records and medication lists
- Insurance information and financial documents
- Legal documents (power of attorney, advance directives)
- Emergency contact information

## Making the Move Comfortable

**Personalizing the Living Space**
- Bring familiar furniture and decorations
- Display family photos and meaningful items
- Include favorite books, music, or hobbies
- Create a comfortable, home-like environment

**First Week Strategies**
- Visit frequently during the initial adjustment period
- Participate in activities together
- Meet other residents and their families
- Establish routines and familiar patterns

## Supporting Emotional Adjustment

**Common Feelings During Transition**
- Anxiety about change and new environment
- Grief over loss of independence
- Excitement about new opportunities
- Uncertainty about the future

**Ways to Provide Support**
- Listen to concerns without judgment
- Celebrate small victories and positive moments
- Maintain regular communication and visits
- Encourage participation in activities
- Be patient with the adjustment process

## Building Relationships

**With Care Staff**
- Introduce yourself and share important information
- Communicate preferences and care needs clearly
- Express appreciation for good care
- Address concerns promptly and respectfully

**With Other Residents**
- Encourage participation in group activities
- Facilitate introductions when appropriate
- Support development of new friendships
- Respect individual preferences for social interaction

## Long-term Success Strategies

- Maintain regular family involvement
- Advocate for your loved one's needs
- Stay informed about care plans and changes
- Celebrate milestones and achievements
- Focus on quality of life and happiness

Remember, adjustment takes time. With patience, support, and open communication, the transition to residential care can lead to improved quality of life and peace of mind for the entire family.`,
  },
  {
    title: "Wellness & Comfort: Ensuring Quality of Life in Residential Care",
    excerpt: "Quality of life is central to residential care. Learn about the strategies, activities, and support systems that help residents stay healthy, engaged, and comfortable.",
    author: "Michael Rodriguez, RN, BSN",
    date: "January 12, 2026",
    category: "Care Tips",
    image: blogGarden,
    slug: "wellness-quality-life",
    content: `Quality of life and wellness are at the heart of residential care. The goal is to support residents in maintaining their physical health, emotional wellbeing, and social connections. Residential care providers use a holistic approach combining health management, activities, and community engagement.

## Understanding Wellness in Residential Care

Wellness extends beyond physical health—it encompasses physical, mental, emotional, and social wellbeing. Effective residential care addresses all dimensions of wellness to help residents thrive.

## Physical Wellness

**Exercise and Mobility**
- Chair exercises and gentle stretching
- Walking programs and outdoor activities
- Physical therapy and rehabilitation
- Balance and fall prevention programs

**Nutrition and Hydration**
- Nutritious, well-balanced meals
- Accommodation for dietary restrictions
- Regular hydration monitoring
- Social dining experiences

**Health Monitoring**
- Regular vital sign checks
- Medication management
- Coordination with healthcare providers
- Preventive care and screenings

## Mental and Emotional Wellness

**Cognitive Stimulation**
- Memory games and puzzles
- Reading and discussion groups
- Educational programs and lectures
- Creative arts and crafts

**Emotional Support**
- Individual counseling services
- Support groups and peer connections
- Spiritual care and chaplain services
- Grief and loss support

## Social Wellness

**Community Activities**
- Group outings and excursions
- Holiday celebrations and special events
- Intergenerational programs
- Volunteer opportunities

**Family Involvement**
- Regular family visits and communication
- Family education and support groups
- Participation in care planning
- Special family events and celebrations

## Creating a Comfortable Environment

**Physical Comfort**
- Temperature control and lighting
- Comfortable furniture and bedding
- Noise reduction and quiet spaces
- Safety features and accessibility

**Emotional Comfort**
- Respectful, compassionate care
- Privacy and dignity preservation
- Cultural sensitivity and inclusion
- Personal choice and autonomy

## Measuring Quality of Life

Regular assessments help ensure residents are thriving:
- Physical health and functional ability
- Emotional wellbeing and mood
- Social engagement and relationships
- Satisfaction with care and services
- Overall happiness and life satisfaction

By focusing on all aspects of wellness, residential care can provide an environment where residents not only receive excellent care but also continue to grow, learn, and find joy in daily life.`,
  },
  {
    title: "Memory Care: Specialized Support for Cognitive Challenges",
    excerpt: "Memory care provides specialized support for individuals with dementia and Alzheimer's disease. Learn about memory care approaches, activities, and how families can stay involved.",
    author: "Dr. Patricia Williams, Geriatrician",
    date: "January 10, 2026",
    category: "Specialized Care",
    image: careComfort,
    slug: "memory-care-support",
    content: `Memory care is a specialized form of residential care designed specifically for individuals with dementia, Alzheimer's disease, and other cognitive impairments. This type of care focuses on creating a safe, structured environment that supports cognitive function while maintaining dignity and quality of life.

## Understanding Memory Care

Memory care differs from general residential care in several important ways:
- Specialized staff training in dementia care
- Secure environments designed for safety
- Structured daily routines and activities
- Therapeutic approaches to behavioral challenges
- Family education and support services

## Key Components of Memory Care

**Environmental Design**
- Secure, enclosed outdoor spaces
- Clear sight lines and way-finding cues
- Familiar, home-like settings
- Reduced noise and overstimulation
- Safety features and monitoring systems

**Specialized Programming**
- Cognitive stimulation activities
- Music and art therapy
- Reminiscence and life story work
- Sensory stimulation programs
- Physical exercise adapted for abilities

**Person-Centered Care**
- Individual care plans based on life history
- Respect for personal preferences and routines
- Validation therapy and emotional support
- Maintenance of existing abilities
- Dignity preservation in all interactions

## Daily Life in Memory Care

**Structured Routines**
- Consistent daily schedules
- Familiar activities and mealtimes
- Regular sleep and wake cycles
- Predictable care routines

**Meaningful Activities**
- Activities based on past interests and abilities
- Social interaction and community building
- Creative expression through arts and crafts
- Gentle exercise and movement
- Spiritual and cultural activities

## Supporting Families

**Education and Resources**
- Understanding dementia progression
- Communication strategies
- Coping with behavioral changes
- Legal and financial planning
- Support groups and counseling

**Staying Connected**
- Regular family meetings and updates
- Participation in care planning
- Visiting strategies and tips
- Special events and celebrations
- Technology for remote connection

## Managing Challenging Behaviors

Memory care staff are trained to handle:
- Agitation and restlessness
- Wandering and exit-seeking
- Sundowning and sleep disturbances
- Resistance to care
- Communication difficulties

**Therapeutic Approaches**
- Redirection and distraction techniques
- Validation and emotional support
- Environmental modifications
- Medication management when appropriate
- Non-pharmacological interventions

## Choosing Memory Care

When selecting memory care, consider:
- Staff training and expertise
- Safety and security measures
- Activity programs and therapies
- Family involvement opportunities
- Progression planning for changing needs

Memory care provides specialized support that can significantly improve quality of life for individuals with cognitive challenges while offering peace of mind for families.`,
  },
  {
    title: "Creating Meaningful Moments: Daily Life in Residential Care",
    excerpt: "Residential care provides opportunities to create lasting memories and maintain social connections. Discover how daily activities and family involvement enrich life in residential communities.",
    author: "Aisha Johnson, LCSW",
    date: "January 8, 2026",
    category: "Family Support",
    image: careComfort,
    slug: "meaningful-moments-residential",
    content: `One of the greatest aspects of residential care is the opportunity to maintain a rich, engaged lifestyle while receiving professional support. Residents and families can create meaningful moments and lasting memories together.

## Creating a Comfortable Living Space

Personalize your residential living space to reflect your identity and preferences:
- Favorite photos and meaningful mementos
- Personal furnishings and decorations
- Plants and natural elements
- Artwork and meaningful displays
- Colors and décor that bring comfort

## Meaningful Daily Activities

**Individual Pursuits**
- Reading and writing
- Arts and crafts projects
- Gardening and plant care
- Music and singing
- Puzzles and games

**Community Engagement**
- Group activities and social events
- Educational programs and lectures
- Religious or spiritual services
- Volunteer opportunities
- Intergenerational programs

**Physical Activities**
- Gentle exercise classes
- Walking groups
- Dancing and movement
- Outdoor activities
- Adaptive sports and games

## Family Involvement

**Regular Visits**
- Scheduled family time
- Shared meals and celebrations
- Participation in activities
- One-on-one quality time
- Special occasion visits

**Creating New Traditions**
- Holiday celebrations in the community
- Birthday parties and anniversaries
- Family game nights
- Cooking or baking together
- Storytelling and reminiscing

## Spiritual and Cultural Practices

Honor your loved one's spiritual and cultural traditions:
- Prayer or meditation
- Religious ceremonies or rituals
- Music that holds spiritual meaning
- Cultural celebrations and foods
- Time for reflection and peace

## Building Friendships

Residential care provides natural opportunities for social connection:
- Shared meals and conversation
- Group activities and outings
- Common interests and hobbies
- Mutual support and companionship
- Celebrating milestones together

## Celebrating Life Milestones

- Birthdays and anniversaries
- Holidays and seasonal celebrations
- Personal achievements
- Family milestones
- Community recognition

## Professional Support

Our care coordinators and activity specialists can help facilitate:
- Activity planning and coordination
- Family visit arrangements
- Special event planning
- Connection with community resources
- Individual interest development

The goal is to create an environment where every day offers opportunities for joy, connection, and meaningful experiences.`,
  },
  {
    title: "Health Planning and Wellness Goals in Residential Care",
    excerpt: "Proactive health planning ensures you receive the right support. Learn about wellness assessments, health goals, and coordinating with healthcare providers.",
    author: "Kaira Oasis Care Team",
    date: "December 20, 2025",
    category: "Education",
    image: blogGarden,
    slug: "health-planning",
    content: `Planning for your health and wellness in residential care ensures you receive personalized support aligned with your values and goals. Proactive health management leads to better outcomes and quality of life.

## Initial Health Assessment

When entering residential care, you'll receive a comprehensive health assessment that includes:
- Complete medical history review
- Current medications and treatments
- Functional ability assessment
- Cognitive and mental health evaluation
- Nutritional and dietary needs
- Social and emotional wellbeing

## Developing Wellness Goals

Work with your care team to establish realistic, meaningful wellness goals:

**Physical Wellness Goals**
- Maintaining mobility and independence
- Managing chronic conditions effectively
- Preventing falls and injuries
- Optimizing nutrition and hydration

**Mental and Emotional Wellness Goals**
- Staying cognitively engaged
- Managing stress and anxiety
- Maintaining positive relationships
- Finding purpose and meaning

**Social Wellness Goals**
- Building friendships and connections
- Participating in community activities
- Maintaining family relationships
- Contributing to the community

## Healthcare Coordination

Residential care staff work with your healthcare providers to:
- Manage medications effectively
- Monitor chronic conditions
- Coordinate specialist care
- Ensure continuity of care
- Communicate changes in health status

## Regular Health Monitoring

**Daily Observations**
- Vital signs and general wellbeing
- Medication effects and side effects
- Changes in appetite or sleep
- Mood and cognitive function
- Physical symptoms or concerns

**Periodic Assessments**
- Comprehensive health reviews
- Functional ability evaluations
- Medication reviews and adjustments
- Care plan updates
- Goal progress evaluation

## Emergency Preparedness

Residential care facilities maintain:
- 24/7 nursing coverage
- Emergency response protocols
- Relationships with local hospitals
- Communication with family members
- Documentation of preferences and directives

## Advance Care Planning

Important documents to have in place:
- Advance directives
- Healthcare power of attorney
- POLST (Physician Orders for Life-Sustaining Treatment)
- Emergency contact information
- Insurance and financial information

Proactive health planning ensures you receive care that aligns with your values and supports your best quality of life.`,
  },
];

const categories = ["All", "Education", "Care Tips", "Family Support", "Specialized Care", "Caregiver Support"];

const BlogPage = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="blog" />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-muted">
          <div className="container-section text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="heading-hero text-foreground mb-6">
              Insights & Resources
            </h1>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Helpful articles, guides, and resources to support you and your family 
              through residential care and quality of life.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container-section">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="section-padding bg-background">
            <div className="container-section">
              <article className="card-care overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-video lg:aspect-auto overflow-hidden rounded-xl">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                      Featured
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="section-padding bg-muted">
          <div className="container-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className="card-care group overflow-hidden cursor-pointer transition-all hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <article>
                    <div className="aspect-video overflow-hidden rounded-xl mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
