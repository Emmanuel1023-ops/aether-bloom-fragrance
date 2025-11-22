const Footer = () => {
  return (
    <footer className="bg-plum-dark text-cream pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Aether & Bloom</h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Fragrance Beyond Memory. We craft ethereal scents that evoke emotion, memory, and imagination.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors">Ethereal</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Botanical</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Nocturne</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Care Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
          <p>© 2024 Aether & Bloom. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
