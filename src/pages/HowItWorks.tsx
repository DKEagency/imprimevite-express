
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, Clock, Printer, Package, Settings, Shield } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Comment fonctionne Imprimevite ?
        </h1>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-brand-blue/10 mb-4">
                <Upload className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Envoi du document</h3>
              <p className="text-gray-600">
                Téléchargez votre fichier ou copiez-collez votre texte. Formats acceptés : PDF, DOCX, TXT
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-brand-orange/10 mb-4">
                <Settings className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Personnalisation</h3>
              <p className="text-gray-600">
                Choisissez vos options d'impression : format, couleur, recto-verso, reliure...
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-brand-blue/10 mb-4">
                <Package className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Livraison rapide</h3>
              <p className="text-gray-600">
                Recevez vos documents en 24h directement chez vous ou au bureau
              </p>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Nos garanties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-green-100 mb-4">
                <Printer className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Qualité professionnelle</h3>
              <p className="text-gray-600">Impression haute définition sur papier premium</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-blue-100 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Livraison en 24h</h3>
              <p className="text-gray-600">Service express disponible partout en France</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-purple-100 mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Sécurité garantie</h3>
              <p className="text-gray-600">Vos documents sont protégés et confidentiels</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/register">
              Commencer maintenant
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
