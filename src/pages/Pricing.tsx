
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basique",
      price: "0,15€",
      unit: "par page",
      features: [
        "Impression noir et blanc",
        "Format A4",
        "Recto simple",
        "Livraison 24h",
        "Paiement sécurisé"
      ],
      color: "bg-gray-100"
    },
    {
      name: "Pro",
      price: "0,25€",
      unit: "par page",
      features: [
        "Impression couleur",
        "Format A4/A3",
        "Recto-verso",
        "Livraison 24h",
        "Support prioritaire"
      ],
      color: "bg-brand-blue",
      recommended: true
    },
    {
      name: "Business",
      price: "Sur mesure",
      unit: "",
      features: [
        "Volume important",
        "Tous formats",
        "Options personnalisées",
        "Livraison programmée",
        "Account manager dédié"
      ],
      color: "bg-gray-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Tarifs simples et transparents
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choisissez la formule qui correspond à vos besoins. Pas de frais cachés, pas d'engagement.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.recommended ? 'border-brand-blue shadow-lg' : ''}`}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm">
                    Recommandé
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.unit && <span className="text-gray-600 ml-1">{plan.unit}</span>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-blue mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <Link to="/register">
                    Commencer
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-gray-600 mb-4">
            Besoin de plus d'informations ? Consultez notre FAQ ou contactez-nous directement.
          </p>
          <Button asChild variant="outline">
            <Link to="/faq">
              Voir la FAQ
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
