
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, LogIn, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-brand-blue" />
            <span className="font-bold text-xl">Imprimevite</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tarifs
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              Comment ça marche
            </Link>
            <Button asChild variant="ghost">
              <Link to="/login" className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Connexion</span>
              </Link>
            </Button>
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/register">
                Créer un compte
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-6">
                <Link to="/pricing" className="text-lg">
                  Tarifs
                </Link>
                <Link to="/how-it-works" className="text-lg">
                  Comment ça marche
                </Link>
                <Link to="/login" className="text-lg">
                  Connexion
                </Link>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <Link to="/register">
                    Créer un compte
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
