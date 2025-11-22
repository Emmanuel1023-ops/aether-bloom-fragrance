import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Ethereal Collection",
      description: "Light, airy scents inspired by morning mist and dreams",
      image: collection1,
    },
    {
      title: "Nocturne Collection",
      description: "Deep, mysterious fragrances for the evening soul",
      image: collection2,
    },
    {
      title: "Botanical Collection",
      description: "Fresh, green scents from nature's garden",
      image: collection3,
    },
  ];

  return (
    <section className="py-20 bg-background" id="collections">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Signature Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each collection tells a story, evokes a memory, and awakens your senses
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={index} 
              className="group cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {collection.title}
              </h3>
              <p className="text-muted-foreground">
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
