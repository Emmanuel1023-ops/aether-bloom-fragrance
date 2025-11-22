import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia Chen",
      role: "Writer & Dreamer",
      rating: 5,
      text: "Nocturne has become my signature scent. It's like wearing a piece of midnight — mysterious, alluring, and unforgettable. People always ask what I'm wearing.",
    },
    {
      name: "Marcus Thompson",
      role: "Creative Director",
      rating: 5,
      text: "I've never experienced perfumes like these. The Ethereal collection transported me to a place I'd forgotten existed. Pure artistry in a bottle.",
    },
    {
      name: "Elena Rodriguez",
      role: "Botanical Artist",
      rating: 5,
      text: "The Botanical collection is incredible. Fresh, green, alive. It feels like walking through a secret garden every morning. Worth every penny.",
    },
    {
      name: "James Liu",
      role: "Architect",
      rating: 5,
      text: "These aren't just fragrances — they're experiences. The attention to detail, the quality of ingredients, the storytelling. Aether & Bloom has redefined luxury for me.",
    },
  ];

  return (
    <section className="py-20 bg-sage/10" id="testimonials">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Souls Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories from those who've found their signature scent
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-glow text-gold-glow" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-serif font-bold text-primary mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-primary mb-2">2.5k+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-primary mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-primary mb-2">89%</div>
            <div className="text-sm text-muted-foreground">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
