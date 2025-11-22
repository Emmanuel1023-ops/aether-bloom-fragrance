import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";
import collection1 from "@/assets/collection-1.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={heroImage} 
              alt="Aether & Bloom Story" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/90 via-plum-dark/70 to-transparent" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-cream mb-6 animate-fade-in">
                Our Story
              </h1>
              <p className="text-xl text-cream/90 leading-relaxed">
                Where fragrance transcends the ordinary and becomes extraordinary
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                  The Beginning
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Aether & Bloom was born from a simple belief: that fragrance should be more than just a scent. 
                    It should be a portal to forgotten memories, a bridge to distant dreams, and a companion through life's most precious moments.
                  </p>
                  <p>
                    Founded in 2018 by perfumer Elena Moreau, our atelier began in a small studio overlooking the lavender fields of Provence. 
                    What started as a personal quest to capture the ineffable—those fleeting moments between sleep and waking, 
                    between memory and imagination—has grown into a collection beloved by dreamers worldwide.
                  </p>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden hover-lift">
                <img 
                  src={collection1} 
                  alt="Our Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Philosophy */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe in the poetry of scent. Every fragrance we create tells a story, evokes an emotion, 
                or unlocks a memory you didn't know you had. We work with the finest natural ingredients, 
                sourced ethically from around the world, and blend them with artistry and intention.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 glass rounded-lg">
                  <div className="text-4xl font-serif font-bold text-primary mb-4">98%</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider mb-2">Natural</div>
                  <p className="text-muted-foreground">Ingredients sourced from nature</p>
                </div>
                <div className="p-6 glass rounded-lg">
                  <div className="text-4xl font-serif font-bold text-primary mb-4">Zero</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider mb-2">Cruelty</div>
                  <p className="text-muted-foreground">Never tested on animals</p>
                </div>
                <div className="p-6 glass rounded-lg">
                  <div className="text-4xl font-serif font-bold text-primary mb-4">100%</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider mb-2">Artisan</div>
                  <p className="text-muted-foreground">Handcrafted in small batches</p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Artistry</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each fragrance is composed like a piece of music—with opening notes that captivate, 
                  a heart that sustains, and a base that lingers long after you've left the room.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Sustainability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to leaving the world more beautiful than we found it. 
                  Our packaging is recyclable, our ingredients are ethically sourced, 
                  and we partner with conservation initiatives worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Authenticity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't follow trends. We create timeless scents that speak to the soul. 
                  Every bottle contains not just fragrance, but intention, care, and a piece of our story.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Discover Our Collections
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
