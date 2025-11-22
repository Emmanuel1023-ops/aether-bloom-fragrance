import { ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-primary">Aether & Bloom</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Collections
            </Link>
            <Link to="/scents" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Scents
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Our Story
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
