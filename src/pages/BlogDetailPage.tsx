import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import blogComfort from "@/assets/blog-comfort.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import careComfort from "@/assets/care-comfort.jpg";
import familySupport from "@/assets/family-support.jpg";

const blogPosts = [
  {
    title: "Understanding Residential Care: A Complete Guide for Families",
    excerpt: "Residential care provides a supportive living environment for those who need assistance with daily activities. This comprehensive guide explains residential care services, benefits, and how to find the right fit for your family.",
    author: "Dr. Elizabeth Chen",
    date: "January 18, 2026",
    category: "Education",
    image: blogComfort,
    slug: "understanding-residential-care",
    featured: true,
    content: `Residential care provides a compassionate, supportive living environment for individuals who need assistance with daily activities and personal care. Our residential care model prioritizes quality of life, independence with support, and meaningful community connections.

## What is Residential Care?

Residential care is a philosophy of supportive living rather than institutional care. It can be provided in a home-like setting where residents receive personalized assistance with activities of daily living while maintaining their dignity and independence. The focus is on helping residents live fulfilling lives surrounded by professional support and community.

## Who Benefits from Residential Care?

Individuals who may benefit from residential care include those:
- Needing assistance with activities of daily living
- Seeking social connection and community engagement
- Requiring medication management and health monitoring
- Wanting to age in place with professional support
- Experiencing memory challenges and seeking structured support
- Recovering from hospitalization or illness
- Seeking an alternative to traditional nursing home environments

Residential care is appropriate for individuals at any stage of life who value community, independence, and personalized support.

## What Residential Care Services Include

Comprehensive residential care services typically include:

**Daily Living Support**
- Assistance with bathing, dressing, and personal hygiene
- Meal planning and preparation
- Housekeeping and laundry services
- Medication management and reminders
- Transportation assistance

**Health & Wellness**
- Regular wellness check-ins
- Coordination with healthcare providers
- Assistance with medical appointments
- Health education and wellness programs
- 24/7 availability for health concerns

**Social & Recreational Activities**
- Community outings and activities
- Social gatherings and events
- Hobby and interest groups
- Educational programs
- Volunteer opportunities

## The Residential Care Team

Our residential care team includes trained care coordinators, nursing staff, activity specialists, and support personnel. This collaborative approach ensures that residents receive comprehensive support across all aspects of daily living.

## Making the Transition to Residential Care

Choosing residential care is a positive step toward maintaining independence with professional support. Many families find that residential care allows their loved ones to thrive in a community setting while ensuring their health and safety needs are met.

Having open conversations with family, healthcare providers, and care professionals helps ensure that residential care aligns with your values and goals.`,
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

## Health & Wellness Management

**Preventive Care**: Regular health screenings, exercise, and nutrition programs to maintain wellness.

**Chronic Condition Management**: Support and monitoring for managing ongoing health conditions.

**Mental Health Support**: Access to counseling, social activities, and community connections.

**Medication Management**: Careful coordination of medications and health treatments.

## Wellness Activities & Engagement

- Regular physical activity and exercise programs
- Nutrition education and healthy meal preparation
- Cognitive activities and mental stimulation
- Hobby and interest-based activities
- Social and community connections
- Volunteer and meaningful purpose opportunities
- Spiritual and cultural activities

## Building Social Connections

Strong social connections are vital to wellness. Residential care communities foster:
- Friendships among residents
- Family involvement and visits
- Community outreach and engagement
- Support groups and peer networks
- Mentorship and intergenerational activities

## Communication is Key

Regular check-ins and open communication between residents, families, and the care team ensure that wellness goals are met and adjusted as needed. Residents are encouraged to voice their preferences and concerns.`,
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

- Participating in community events and activities
- Pursuing hobbies and interests
- Engaging in educational programs
- Volunteering and contributing to the community
- Enjoying meals with friends and community members
- Attending outings and community activities
- Celebrating special occasions with loved ones
- Spending quality time with family and friends

## Maintaining Connections

Build and maintain strong relationships:
- Regular visits and calls with family members
- Participation in family-centered events
- Sharing stories and memories with other residents
- Contributing to community traditions
- Mentoring and supporting newer residents
- Engaging in intergenerational activities
- Maintaining external community connections

## Spiritual and Cultural Practices

Honor your loved one's spiritual and cultural traditions:
- Prayer or meditation
- Religious ceremonies or rituals
- Music that holds spiritual meaning
- Symbolic gestures or activities
- Time for reflection and peace

## Professional Support

Our care coordinators and wellness specialists can help facilitate activities and connections, creating a supportive environment for meaningful living.`,
    index: 2,
  },
  {
    title: "Supporting Your Loved One: A Family Guide to Residential Care",
    excerpt: "Supporting a loved one in residential care is both rewarding and important. Learn practical strategies for staying involved, advocating for their needs, and maintaining your relationship.",
    author: "Dr. Sarah Mitchell, MD",
    date: "January 2, 2026",
    category: "Caregiver Support",
    image: familySupport,
    slug: "family-support-guide",
    content: `Family involvement is essential to quality life in residential care. Whether you're helping with activities, providing emotional support, or simply staying connected, your involvement makes a real difference.

## Staying Actively Involved

**Regular Visits and Communication**
- Schedule regular visits that work for both you and your loved one
- Maintain phone calls or video chats between visits
- Involve them in family decisions and updates
- Share family photos and news
- Participate in community events together

**Activities Together**
- Enjoying meals and outings together
- Participating in community activities
- Pursuing shared hobbies and interests
- Taking walks or spending time outdoors
- Attending special events and celebrations

## Advocating for Your Loved One

- Communicate needs and preferences to the care team
- Review care plans and wellness goals regularly
- Ask questions about medications and treatments
- Voice concerns promptly and professionally
- Work collaboratively with staff for best outcomes

## Building Relationships with Care Staff

- Introduce yourself and build rapport
- Express appreciation for care provided
- Share relevant health history and preferences
- Understand staff schedules and communication channels
- Participate in care planning discussions

## Maintaining Connection and Identity

**Honoring Their Interests and Values**
- Support participation in hobbies and interests
- Help maintain spiritual or religious practices
- Celebrate cultural traditions
- Keep them connected to their community
- Encourage meaningful activities

**Supporting Their Goals**
- Understand their wellness goals
- Help identify meaningful activities
- Support their independence and choices
- Celebrate achievements and milestones
- Encourage continued learning and growth

## Taking Care of Yourself

**Family Caregiver Wellness**
- Maintain your own health and wellbeing
- Set healthy boundaries
- Seek support from other family members
- Consider counseling or support groups
- Don't hesitate to ask for help

**Managing Expectations**
- Understand that care staff share responsibilities
- Accept that some changes are normal
- Focus on quality of time together
- Find realistic ways to stay involved
- Celebrate positive changes

## Communication Tips

- Be respectful and professional with staff
- Address concerns calmly and directly
- Listen to professional recommendations
- Share observations about your loved one
- Work as a team for the best outcomes

## When to Speak Up

Contact the care team or management if:
- Your loved one seems unhappy or unwell
- Concerns about care quality arise
- Medications or treatments seem problematic
Remember, the care team is there to support both you and your loved one. Together, we can create a meaningful residential care experience.`,
    index: 3,
  },
  {
    title: "Building Community: Social Connection in Residential Care",
    excerpt: "Strong social connections are essential to wellness and happiness. Learn how residential care communities foster meaningful relationships and community belonging.",
    author: "David Thompson, LCSW, CCTP",
    date: "December 27, 2025",
    category: "Family Support",
    image: blogComfort,
    slug: "building-community",
    content: `Social connection and community belonging are fundamental to quality of life. Residential care communities provide unique opportunities to build meaningful relationships and feel part of something larger.

## Why Community Matters

Research shows that strong social connections:
- Improve mental and physical health
- Reduce anxiety and depression
- Increase sense of purpose and belonging
- Enhance overall quality of life
- Support cognitive wellness
- Create meaning and fulfillment

## Building Friendships in Residential Care

**Shared Experiences**
- Attending community activities and events
- Participating in group meals and social gatherings
- Joining interest-based clubs and groups
- Volunteering together in community service
- Enjoying recreational activities

**Deep Connections**
- Finding kindred spirits with shared interests
- Building meaningful one-on-one relationships
- Mentoring and supporting other residents
- Sharing life stories and experiences
- Creating inside jokes and traditions

## Community Activities and Engagement

**Recreational Activities**
- Games, arts, crafts, and creative pursuits
- Music, performances, and cultural events
- Educational workshops and learning groups
- Physical activities and exercise classes
- Outdoor activities and nature appreciation

**Meaningful Participation**
- Volunteer opportunities within the community
- Leadership roles in resident councils
- Planning and organizing events
- Contributing skills and talents
- Intergenerational activities with visitors

## Family Integration

Strong communities welcome family involvement:
- Family visits and participation in events
- Multi-generational activities
- Sharing traditions and celebrations
- Involving family in resident leadership
- Building relationships with other families

## Maintaining Broader Community Connections

- Staying connected to external community organizations
- Participating in volunteer work and causes
- Maintaining long-standing friendships
- Engaging with religious or spiritual communities
- Contributing to society and making a difference

## Overcoming Social Barriers

**Shyness or Social Anxiety**
- Start with smaller group activities
- Find interest-based groups
- Volunteer to build connections
- Work with activity staff for introductions

**Mobility or Health Challenges**
- Participate in adapted activities
- Join virtual or in-room programs
- Engage in one-on-one connections
- Contribute skills that don't require mobility

## Creating Your Community Niche

- Identify your interests and passions
- Try different activities and groups
- Connect with people who share interests
- Develop regular participation patterns
- Lead or organize activities you care about

Community is built one connection at a time. Your residential care home is a place to thrive, grow, and belong.`,
  },
  {
    title: "Health Planning and Wellness Goals in Residential Care",
    excerpt: "Proactive health planning ensures you receive the right support. Learn about wellness assessments, health goals, and coordinating with healthcare providers.",
    author: "Kaira Oasis Care Team",
    date: "December 20, 2025",
    category: "Education",
    image: blogGarden,
    slug: "health-planning",
    Content: `Planning for your health and wellness in residential care ensures you receive personalized support aligned with your values and goals. Proactive health management leads to better outcomes and quality of life.

## Initial Health Assessment

When entering residential care, you'll receive a comprehensive health assessment that includes:
- Medical history review
- Current medications and conditions
- Functional abilities and limitations
- Nutritional and dietary needs
- Mental health and wellness history
- Social and support network

This assessment forms the foundation of your personalized care plan.

## Developing Wellness Goals

Work with your care team to establish realistic, meaningful wellness goals:

**Physical Wellness**
- Maintaining or improving mobility
- Managing chronic conditions effectively
- Achieving adequate nutrition and hydration
- Getting quality sleep
- Engaging in appropriate physical activity

**Mental and Emotional Wellness**
- Managing stress and anxiety
- Maintaining cognitive engagement
- Addressing depression or mental health concerns
- Building meaningful relationships
- Finding purpose and fulfillment

**Social Wellness**
- Maintaining family connections
- Building friendships within community
- Participating in group activities
- Contributing to community life
- Staying connected to broader community

## Healthcare Coordination

Residential care staff work with your healthcare providers to:
- Manage medications effectively
- Monitor chronic conditions
- Coordinate specialist care
- Document health changes
- Communicate with your family
- Ensure continuity of care

## Regular Wellness Reviews

Your care plan should be reviewed regularly to:
- Assess progress toward wellness goals
- Adjust support as health changes
- Address new concerns promptly
- Celebrate achievements
- Modify goals as appropriate

## Your Role in Health Planning

- Communicate your values and preferences
- Ask questions about your care
- Report health concerns promptly
- Participate in care decisions
- Share feedback about your experience
- Work collaboratively with staff

## Important Health Conversations

**With Your Doctor**
- Discuss your health status and concerns
- Ask about preventive care and screenings
- Understand your conditions and treatments
- Discuss goals and preferences

**With Your Care Team**
- Review your care plan regularly
- Share how you're feeling
- Discuss any difficulties or concerns
- Collaborate on wellness strategies

**With Your Family**
- Keep them informed about your health
- Involve them in important decisions
- Share your wellness goals
- Maintain open communication

Proactive health planning ensures you receive care that aligns with your values and supports your best quality of life.`,
  },
];

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <PageMeta page="blog" />
        <Header />
        <main className="pt-20">
          <section className="section-padding">
            <div className="container-section text-center">
              <h1 className="heading-hero text-foreground mb-4">Article Not Found</h1>
              <p className="text-body text-muted-foreground mb-8">
                Sorry, the article you're looking for doesn't exist.
              </p>
              <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageMeta page="blog" />
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <article>
          {/* Featured Image */}
          <div className="relative w-full h-96 overflow-hidden bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* Content */}
          <section className="section-padding">
            <div className="container-section max-w-3xl">
              {/* Navigation */}
              <button
                onClick={() => navigate("/blog")}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>

              {/* Title and Meta */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h1 className="heading-hero text-foreground mb-6">{post.title}</h1>

                {/* Author Info */}
                <div className="flex items-center gap-6 pb-8 border-b border-border">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none mb-12">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("##")) {
                    return (
                      <h2
                        key={index}
                        className="heading-section text-foreground mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold text-foreground mb-3">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (paragraph.startsWith("-")) {
                    const items = paragraph.split("\n");
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-body text-muted-foreground mb-4">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-body text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Related Articles */}
              <div className="border-t border-border pt-12">
                <h3 className="heading-section text-foreground mb-6">More Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <div
                        key={relatedPost.slug}
                        className="card-care cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                      >
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{relatedPost.date}</span>
                          <span className="text-xs text-primary font-medium">Read More →</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
