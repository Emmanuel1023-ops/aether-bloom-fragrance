import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Ethereal perfume collection with botanical elements" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/80 via-plum-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-cream mb-6 animate-fade-in">
            Fragrance Beyond Memory
          </h1>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover ethereal scents that transport you to forgotten dreams and uncharted emotions.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gold-glow hover:bg-gold-glow/90 text-plum-dark font-semibold shadow-glow">
              Explore Collections
            </Button>
            <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-plum-dark/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold-glow mb-1">350+</div>
              <div className="text-sm text-cream/70">Unique Scents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold-glow mb-1">15k+</div>
              <div className="text-sm text-cream/70">Happy Souls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold-glow mb-1">98%</div>
              <div className="text-sm text-cream/70">Natural Ingredients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-gold-glow mb-1">25+</div>
              <div className="text-sm text-cream/70">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
