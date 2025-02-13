
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 container mx-auto px-4">
        <Card className="max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Connexion
          </h1>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" />
            </div>

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-brand-blue hover:underline">
                Créer un compte
              </Link>
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Login;
