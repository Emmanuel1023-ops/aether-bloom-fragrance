import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";

const Scents = () => {
  const products = [
    {
      name: "Midnight Garden",
      collection: "Nocturne",
      description: "A mysterious blend of night-blooming jasmine and dark woods",
      price: 145,
      size: "50ml",
      image: featured1,
      notes: {
        top: ["Black Currant", "Bergamot", "Pink Pepper"],
        heart: ["Night Jasmine", "Rose Absolute", "Violet"],
        base: ["Oud", "Sandalwood", "Vanilla", "Musk"],
      },
    },
    {
      name: "Cloud Nine",
      collection: "Ethereal",
      description: "An airy, weightless scent that captures pure joy",
      price: 135,
      size: "50ml",
      image: featured2,
      notes: {
        top: ["White Tea", "Neroli", "Citrus"],
        heart: ["Jasmine", "Lily of the Valley", "Peony"],
        base: ["White Musk", "Amber", "Cashmere Wood"],
      },
    },
    {
      name: "Green Reverie",
      collection: "Botanical",
      description: "Fresh garden greens with a hint of morning dew",
      price: 130,
      size: "50ml",
      image: featured1,
      notes: {
        top: ["Basil", "Mint", "Green Apple"],
        heart: ["Geranium", "Lavender", "Sage"],
        base: ["Vetiver", "Oak Moss", "Cedar"],
      },
    },
    {
      name: "Velvet Moon",
      collection: "Nocturne",
      description: "Sultry and smooth like moonlight on velvet",
      price: 150,
      size: "50ml",
      image: featured2,
      notes: {
        top: ["Plum", "Saffron", "Cardamom"],
        heart: ["Turkish Rose", "Iris", "Patchouli"],
        base: ["Leather", "Amber", "Tonka Bean"],
      },
    },
    {
      name: "Morning Dew",
      collection: "Ethereal",
      description: "Crisp and clean, like the first light of dawn",
      price: 125,
      size: "50ml",
      image: featured1,
      notes: {
        top: ["Cucumber", "Aquatic Notes", "Lemon"],
        heart: ["White Peony", "Freesia", "Green Tea"],
        base: ["Driftwood", "Clean Musk"],
      },
    },
    {
      name: "Wild Sage",
      collection: "Botanical",
      description: "Earthy and aromatic with wild herb undertones",
      price: 140,
      size: "50ml",
      image: featured2,
      notes: {
        top: ["Clary Sage", "Eucalyptus", "Rosemary"],
        heart: ["Lavender", "Thyme", "Wild Herbs"],
        base: ["Cedarwood", "Amber", "Patchouli"],
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-plum-dark/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
                All Scents
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our complete fragrance library. Each scent is a story waiting to be told.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={index} 
                  className="hover-lift overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {product.collection} Collection
                    </div>
                    <CardTitle className="text-2xl font-serif">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-foreground/60 mb-1">TOP NOTES</div>
                        <div className="text-sm text-foreground/80">{product.notes.top.join(", ")}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground/60 mb-1">HEART NOTES</div>
                        <div className="text-sm text-foreground/80">{product.notes.heart.join(", ")}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground/60 mb-1">BASE NOTES</div>
                        <div className="text-sm text-foreground/80">{product.notes.base.join(", ")}</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-serif font-bold text-foreground">${product.price}</div>
                      <div className="text-xs text-muted-foreground">{product.size}</div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Scents;
