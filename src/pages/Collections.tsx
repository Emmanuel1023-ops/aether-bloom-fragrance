import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Ethereal Collection",
      description: "Light, airy scents inspired by morning mist and dreams",
      scents: ["Morning Dew", "Cloud Nine", "Whisper Wind", "Silver Lining"],
      image: collection1,
      notes: "Top: Bergamot, White Tea | Heart: Jasmine, Lily | Base: Musk, Amber",
    },
    {
      title: "Nocturne Collection",
      description: "Deep, mysterious fragrances for the evening soul",
      scents: ["Midnight Garden", "Velvet Moon", "Dark Romance", "Starlit Path"],
      image: collection2,
      notes: "Top: Black Currant, Plum | Heart: Rose, Violet | Base: Oud, Sandalwood",
    },
    {
      title: "Botanical Collection",
      description: "Fresh, green scents from nature's garden",
      scents: ["Green Reverie", "Bloom", "Wild Sage", "Meadow Walk"],
      image: collection3,
      notes: "Top: Basil, Mint | Heart: Geranium, Lavender | Base: Vetiver, Moss",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-sage/20 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                Our Collections
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Each collection is a curated journey through scent, emotion, and memory. 
                Discover fragrances that resonate with your soul.
              </p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 space-y-32">
            {collections.map((collection, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-square rounded-lg overflow-hidden hover-lift">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {collection.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                      Fragrance Notes
                    </h3>
                    <p className="text-foreground/80 italic">{collection.notes}</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                      Featured Scents
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {collection.scents.map((scent, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-sage/20 text-foreground rounded-full text-sm"
                        >
                          {scent}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Explore {collection.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
