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
    title: "Understanding Hospice Care: A Complete Guide for Families",
    excerpt: "Hospice care is a compassionate approach to care for individuals with serious, life-limiting illnesses. This comprehensive guide explains what hospice is, who is eligible, and how it can support your family during this important transition.",
    author: "Dr. Elizabeth Chen",
    date: "January 18, 2026",
    category: "Education",
    image: blogComfort,
    slug: "understanding-hospice-care",
    featured: true,
    content: `Hospice care is a specialized medical service that focuses on providing comfort and support for individuals with life-limiting illnesses and their families. Unlike traditional medical care that emphasizes treatment and cure, hospice prioritizes quality of life, pain management, and emotional and spiritual support.

## What is Hospice Care?

Hospice is a philosophy of care rather than a place. It can be provided in a patient's home, a hospice facility, a hospital, or a nursing home. The focus is on helping patients live their final days as fully and comfortably as possible, surrounded by loved ones.

## Who Can Benefit from Hospice?

Patients with any life-limiting illness may be candidates for hospice care, including:
- Advanced cancer
- Heart disease
- COPD (Chronic Obstructive Pulmonary Disease)
- Alzheimer's disease and other dementias
- ALS (Amyotrophic Lateral Sclerosis)
- Advanced Parkinson's disease
- End-stage kidney or liver disease

Generally, a physician must certify that the patient has six months or less to live if the illness runs its normal course. However, patients can continue receiving hospice care beyond six months if they continue to meet the criteria.

## What Hospice Services Include

Comprehensive hospice services typically include:

**Medical Services**
- Physician oversight and care planning
- Skilled nursing care
- Medical equipment and supplies
- Medications related to the terminal diagnosis
- Pain and symptom management
- Lab services and diagnostic tests

**Support Services**
- Counseling and emotional support
- Spiritual care and chaplaincy services
- Social work and care coordination
- Volunteer assistance and companionship
- Bereavement support for family members

**Therapies**
- Physical therapy to maintain comfort and mobility
- Occupational therapy
- Speech-language pathology
- Dietary counseling

## The Hospice Team

A comprehensive hospice team includes physicians, registered nurses, nursing assistants, social workers, counselors, spiritual care providers, and trained volunteers. This interdisciplinary approach ensures that all aspects of the patient's care—physical, emotional, spiritual, and practical—are addressed.

## Making the Transition to Hospice

The decision to transition to hospice is deeply personal and often difficult. It's important to understand that choosing hospice is not "giving up" on care; rather, it's shifting the focus to what matters most during this time. Many families find that hospice care allows them to spend quality time together, free from the burden of intensive treatments.

Having open conversations with your healthcare team, family members, and loved ones can help ensure that hospice care aligns with your values and wishes.`,
  },
  {
    title: "Pain Management in Hospice Care: Ensuring Comfort",
    excerpt: "Effective pain management is essential to quality of life in hospice care. Learn about the various strategies, medications, and therapies used to manage pain and improve comfort.",
    author: "Michael Rodriguez, RN, BSN",
    date: "January 12, 2026",
    category: "Care Tips",
    image: blogGarden,
    slug: "pain-management-hospice",
    content: `Pain management is one of the most critical aspects of hospice care. The goal is not only to reduce pain but to optimize quality of life and comfort. Hospice providers use a multimodal approach combining medications, therapies, and comfort measures.

## Understanding Pain in Hospice

Pain is a subjective experience that extends beyond physical sensation. In hospice care, pain includes physical, emotional, social, and spiritual dimensions. Effective pain management addresses all of these aspects.

## Medication Options

**Opioids**: Often prescribed for moderate to severe pain, opioids are carefully managed to balance pain relief with side effects.

**Non-Opioid Medications**: Includes non-steroidal anti-inflammatory drugs (NSAIDs), acetaminophen, and adjuvant medications like antidepressants and anti-seizure medications.

**Topical Treatments**: Creams, patches, and gels applied directly to the skin for localized pain.

## Non-Medication Approaches

- Massage and gentle touch therapy
- Heat and cold applications
- Relaxation techniques and guided imagery
- Distraction through music, art, or activities
- Positioning and comfort aids
- Therapeutic touch

## Communication is Key

Regular assessment and open communication between patients, families, and the care team ensure that pain management strategies are effective and adjusted as needed. Patients should never hesitate to report pain or concerns about their comfort.`,
  },
  {
    title: "Creating Meaningful Moments: Quality Time with Loved Ones",
    excerpt: "Hospice care provides an opportunity to create lasting memories and meaningful connections. Discover ways to make the most of this precious time together.",
    author: "Aisha Johnson, LCSW",
    date: "January 8, 2026",
    category: "Family Support",
    image: careComfort,
    slug: "meaningful-moments",
    content: `One of the greatest gifts of hospice care is the opportunity to create meaningful moments and lasting memories with your loved one. While this time is bittersweet, many families find it to be profoundly valuable.

## Creating Comfortable Spaces

Design the patient's environment to reflect their preferences and personality. This might include:
- Favorite photos and meaningful mementos
- Natural light and plants
- Favorite music playing softly
- Comfortable bedding and pillows
- Colors and decorations that bring comfort

## Quality Time Activities

- Reading books or poems together
- Watching favorite movies or shows
- Sharing meals (adapted to the patient's abilities)
- Looking through old photo albums
- Recording messages or stories
- Simple crafts or art projects
- Taking gentle walks together
- Sitting quietly together

## Life Review and Legacy

Encourage your loved one to share their life story. This can involve:
- Recording oral histories
- Writing letters to family members
- Creating memory books or journals
- Discussing favorite memories
- Sharing advice or wisdom with younger generations
- Completing unfinished conversations

## Spiritual and Cultural Practices

Honor your loved one's spiritual and cultural traditions:
- Prayer or meditation
- Religious ceremonies or rituals
- Music that holds spiritual meaning
- Symbolic gestures or activities
- Time for reflection and peace

## Professional Support

Hospice counselors and spiritual care providers can help facilitate these conversations and activities, creating a supportive environment for family connection.`,
  },
  {
    title: "Supporting Your Loved One: A Caregiver's Guide",
    excerpt: "Caring for someone in hospice is both an honor and a challenge. Learn practical strategies for providing physical care, emotional support, and maintaining your own wellbeing.",
    author: "Dr. Sarah Mitchell, MD",
    date: "January 2, 2026",
    category: "Caregiver Support",
    image: familySupport,
    slug: "caregivers-guide",
    content: `Family caregiving during hospice is a profound responsibility. Whether you're assisting with daily care, emotional support, or both, it's important to understand what to expect and how to care for yourself while supporting your loved one.

## Physical Care Tasks

**Hygiene and Grooming**
- Gentle bathing or bed baths
- Oral care and mouth swabs
- Skin care and pressure relief
- Appropriate dressing for comfort

**Positioning and Mobility**
- Changing positions regularly to prevent pressure injuries
- Using pillows and support devices for comfort
- Gentle assistance with movement when needed
- Understanding proper body mechanics to protect your back

**Nutrition and Hydration**
- Offering small, frequent meals
- Respecting changing appetite and food preferences
- Providing ice chips or sips of water for comfort
- Understanding that reduced eating/drinking is normal

## Emotional and Spiritual Support

- Being present and listening without judgment
- Validating feelings and concerns
- Encouraging expression through conversation, writing, or art
- Facilitating spiritual practices and rituals
- Maintaining normalcy and connection

## Recognizing Signs and Symptoms

Understanding what's normal helps you provide better care:
- Changes in breathing patterns
- Skin changes and circulation
- Confusion or consciousness changes
- Restlessness or pain

Your hospice team will guide you through these changes.

## Taking Care of Yourself

**Practical Self-Care**
- Get adequate sleep and rest
- Eat healthy meals regularly
- Take breaks when possible
- Maintain personal hygiene

**Emotional Support**
- Seek counseling or support groups
- Stay connected with family and friends
- Allow yourself to experience emotions
- Don't hesitate to ask for help

**Respite Care**
- Take advantage of respite care services
- Allow other family members to help
- Maintain activities that bring you joy
- Remember that self-care is not selfish

## When to Call the Hospice Team

Contact your hospice team if:
- Pain increases or changes
- Breathing becomes labored
- New symptoms develop
- You're overwhelmed or struggling emotionally
- You have questions about care

Remember, you're not alone. Your hospice team is there to support both you and your loved one.`,
  },
  {
    title: "The Grief Journey: Understanding Loss and Healing",
    excerpt: "Grief is a natural response to loss that unfolds over time. This article explores the grief process, common experiences, and resources to support healing.",
    author: "David Thompson, LCSW, CCTP",
    date: "December 27, 2025",
    category: "Family Support",
    image: blogComfort,
    slug: "grief-journey",
    content: `Grief is the emotional response to loss. When we lose someone we love, we experience a range of emotions and reactions that are deeply personal and unique. Understanding grief can help you navigate this journey with greater compassion for yourself.

## The Grief Experience

Grief is not linear. It doesn't follow a predictable timeline, and there's no "right way" to grieve. Common experiences include:

**Emotional Responses**
- Deep sadness and longing
- Anger and frustration
- Guilt and regret
- Relief (which can bring guilt)
- Anxiety about the future
- Numbness or emotional detachment

**Physical Responses**
- Fatigue and exhaustion
- Sleep disturbances
- Changes in appetite
- Tension and aches
- Weakness

**Cognitive Effects**
- Difficulty concentrating
- Forgetfulness
- Intrusive thoughts about the deceased
- Preoccupation with memories

## The Grief Process

Grief often involves several phases, though people move through these at their own pace:

**Shock and Denial**: Initial numbness that protects you from overwhelming emotions.

**Acute Grief**: The peak of emotional pain, often involving crying, sadness, and intense emotions.

**Adaptation**: Gradually learning to live with the loss and remembering with less acute pain.

**Integration**: Honoring your loved one's memory while moving forward with life.

## Supporting Your Grief

**Allow Yourself to Feel**
Don't suppress emotions or feel you "should" be doing better. Emotions need expression.

**Create Rituals**
Memorial services, anniversaries, and personal rituals can honor your loved one and provide comfort.

**Connect with Others**
Share your experience with people who understand. Support groups can be invaluable.

**Maintain Memories**
Create memory books, plant trees, create charitable donations, or other meaningful tributes.

**Seek Professional Support**
Grief counseling or therapy can provide tools and support during difficult periods.

**Practice Self-Compassion**
Be gentle with yourself. Healing takes time, and grief is an expression of love.

## Professional Resources

Hospice bereavement programs, grief counselors, and support groups offer specialized help during this journey.`,
  },
  {
    title: "Advance Directives and End-of-Life Planning",
    excerpt: "Planning ahead ensures your wishes are known and respected. Learn about advance directives, living wills, and other important documents.",
    author: "kaira Oasis care Team",
    date: "December 20, 2025",
    category: "Education",
    image: blogGarden,
    slug: "advance-directives",
    content: `Having conversations about end-of-life care and documenting your wishes is one of the most important gifts you can give your loved ones. Advance directives and related documents ensure your values and preferences guide your care.

## What is an Advance Directive?

An advance directive is a legal document that communicates your healthcare wishes if you become unable to speak for yourself. It typically includes:

**Living Will**
Specifies what types of medical treatment you do or don't want, such as:
- Resuscitation
- Artificial nutrition and hydration
- Mechanical ventilation
- Medication for comfort

**Healthcare Power of Attorney**
Designates someone to make healthcare decisions on your behalf if you cannot make them yourself.

**HIPAA Authorization**
Allows healthcare providers to discuss your medical information with designated family members or friends.

## Important Conversations

**Talk with Your Healthcare Provider**
Discuss your health status, prognosis, and treatment options.

**Talk with Your Family**
Share your values, wishes, and any concerns. Make sure your designated healthcare proxy understands your wishes.

**Document Your Wishes**
Work with an attorney or use state-specific forms to create official documents.

**Review and Update**
Revisit your documents if your health changes or your wishes evolve.

## Why It Matters

Having clear advance directives:
- Reduces burden on family members
- Ensures your wishes are known and respected
- Reduces conflict among family members
- Provides peace of mind
- Honors your autonomy and values

## Resources

Your healthcare provider, hospice team, or an elder law attorney can help you create appropriate documents for your state.`,
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
                        className="card-hospice cursor-pointer hover:shadow-lg transition-shadow"
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
