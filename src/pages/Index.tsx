
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, Clock, Printer, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange">
            Vos documents imprimés et livrés<br />en 24 heures
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Un service d'impression professionnel, rapide et fiable directement à votre porte
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/upload" className="flex items-center space-x-2">
              <span>Commander maintenant</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex p-4 rounded-full bg-brand-blue/10 mb-4">
                <Upload className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                1. Envoyez vos documents
              </h3>
              <p className="text-gray-600">
                Téléchargez vos fichiers ou copiez-collez votre texte directement
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex p-4 rounded-full bg-brand-orange/10 mb-4">
                <Printer className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                2. Nous imprimons
              </h3>
              <p className="text-gray-600">
                Impression professionnelle de haute qualité
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex p-4 rounded-full bg-brand-blue/10 mb-4">
                <Clock className="h-8 w-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                3. Livraison en 24h
              </h3>
              <p className="text-gray-600">
                Recevez vos documents imprimés directement chez vous
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Pourquoi choisir Imprimevite ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Rapide",
                description: "Livraison garantie en 24h"
              },
              {
                title: "Professionnel",
                description: "Qualité d'impression supérieure"
              },
              {
                title: "Simple",
                description: "Interface intuitive et facile à utiliser"
              },
              {
                title: "Sécurisé",
                description: "Vos documents sont entre de bonnes mains"
              }
            ].map((feature) => (
              <div key={feature.title} className="p-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-blue to-brand-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à imprimer ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Commencez dès maintenant et recevez vos documents demain
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90">
            <Link to="/register">
              Créer un compte gratuitement
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
