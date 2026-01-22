import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogComfort from "@/assets/blog-comfort.jpg";
import blogGarden from "@/assets/blog-garden.jpg";
import careComfort from "@/assets/care-comfort.jpg";

const blogPosts = [
  {
    title: "Understanding the Hospice Journey: What to Expect",
    excerpt: "A comprehensive guide to help families understand what hospice care entails and how to prepare for this important transition.",
    author: "Dr. Elizabeth Chen",
    date: "January 15, 2026",
    category: "Education",
    image: blogComfort,
    slug: "understanding-hospice-journey",
  },
  {
    title: "Creating a Peaceful Environment for Your Loved One",
    excerpt: "Practical tips for transforming any space into a comfortable, calming environment that promotes healing and tranquility.",
    author: "Aisha Johnson",
    date: "January 10, 2026",
    category: "Care Tips",
    image: blogGarden,
    slug: "creating-peaceful-environment",
  },
  {
    title: "Supporting Children Through Grief and Loss",
    excerpt: "Age-appropriate strategies for helping children understand and cope with the loss of a family member.",
    author: "David Thompson, LCSW",
    date: "January 5, 2026",
    category: "Family Support",
    image: careComfort,
    slug: "supporting-children-grief",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="section-padding bg-muted">
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Insights & Guidance
            </h2>
            <p className="text-body text-muted-foreground max-w-xl">
              Helpful articles and resources to support you and your family 
              through every step of the hospice journey.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="mt-6 md:mt-0 group">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="card-hospice group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {post.category}
                </span>
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
