import { Button } from "@/components/ui/button";
import giftSet from "@/assets/gift-set.jpg";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={giftSet} 
                alt="Luxury perfume gift set with elegant packaging"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Discover Your Signature Scent
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Take our fragrance quiz and let us guide you to the perfect scent that matches your essence. Complimentary samples with every order.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                Take the Quiz
              </Button>
              <Button size="lg" variant="outline">
                Shop Gift Sets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
