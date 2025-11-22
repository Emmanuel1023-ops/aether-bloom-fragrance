import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Midnight Garden",
      collection: "Nocturne",
      price: "$145",
      image: featured1,
      notes: "Jasmine, Amber, Sandalwood",
    },
    {
      name: "Dawn Mist",
      collection: "Ethereal",
      price: "$125",
      image: featured2,
      notes: "Bergamot, White Tea, Musk",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Featured Fragrances
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Handcrafted perfumes that blur the line between scent and emotion. Each bottle contains a universe of carefully selected notes.
            </p>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background transition-colors">
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-serif font-semibold text-foreground">{product.name}</h3>
                      <span className="text-lg font-semibold text-primary">{product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{product.collection} Collection</p>
                    <p className="text-sm text-foreground/70">Notes: {product.notes}</p>
                  </div>
                  <Button size="icon" variant="outline" className="shrink-0">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-[3/4] hover-lift"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
