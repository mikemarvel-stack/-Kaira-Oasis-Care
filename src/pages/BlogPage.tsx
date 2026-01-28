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

Residential care is appropriate for individuals at any stage of life who value community, independence, and personalized support.`,
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

**Medication Management**: Careful coordination of medications and health treatments.`,
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

## Spiritual and Cultural Practices

Honor your loved one's spiritual and cultural traditions:
- Prayer or meditation
- Religious ceremonies or rituals
- Music that holds spiritual meaning
- Symbolic gestures or activities
- Time for reflection and peace

## Professional Support

Our care coordinators and wellness specialists can help facilitate activities and connections, creating a supportive environment for meaningful living.`,
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

Remember, the care team is there to support both you and your loved one. Together, we can create a meaningful residential care experience.`,
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

Building strong relationships with other residents creates a sense of belonging and community. Activities, shared meals, and group programs provide natural opportunities for connection and friendship.`,
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

When entering residential care, you'll receive a comprehensive health assessment that includes medical history, current medications, functional abilities, and wellness goals.

## Developing Wellness Goals

Work with your care team to establish realistic, meaningful wellness goals focused on physical wellness, mental and emotional wellness, and social wellness.

## Healthcare Coordination

Residential care staff work with your healthcare providers to manage medications effectively, monitor chronic conditions, coordinate specialist care, and ensure continuity of care.

Proactive health planning ensures you receive care that aligns with your values and supports your best quality of life.`,
  },
];

const categories = ["All", "Education", "Care Tips", "Family Support", "Therapies", "Financial", "Caregiver Support"];

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
