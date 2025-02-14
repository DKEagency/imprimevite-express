
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Upload as UploadIcon, FileText, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStep(2);
    }
  };

  const handleTextSubmit = () => {
    if (text.trim()) {
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 container mx-auto px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Commander une impression
        </h1>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step === 1 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className="w-16 h-1 bg-gray-200" />
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step === 2 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <div className="w-16 h-1 bg-gray-200" />
            <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step === 3 ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}>
              3
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Télécharger un fichier</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                />
                <Label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <UploadIcon className="h-12 w-12 text-gray-400 mb-4" />
                  <span className="text-sm text-gray-600">
                    Glissez-déposez votre fichier ici ou cliquez pour parcourir
                  </span>
                  <span className="text-xs text-gray-500 mt-2">
                    Formats acceptés : PDF, DOC, DOCX, TXT
                  </span>
                </Label>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Ou collez votre texte</h2>
              <Textarea
                placeholder="Collez votre texte ici..."
                className="min-h-[200px] mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                onClick={handleTextSubmit}
                disabled={!text.trim()}
                className="w-full bg-brand-blue hover:bg-brand-blue/90"
              >
                Continuer
              </Button>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Options d'impression</h2>
              
              {file && (
                <Alert className="mb-6">
                  <FileText className="h-4 w-4" />
                  <AlertTitle>Fichier sélectionné</AlertTitle>
                  <AlertDescription>
                    {file.name}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Format</Label>
                  <Select defaultValue="a4">
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a4">A4</SelectItem>
                      <SelectItem value="a3">A3</SelectItem>
                      <SelectItem value="letter">Letter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Couleur</Label>
                  <Select defaultValue="nb">
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir le mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nb">Noir et blanc</SelectItem>
                      <SelectItem value="color">Couleur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Recto/Verso</Label>
                  <Select defaultValue="recto">
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir le mode d'impression" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recto">Recto simple</SelectItem>
                      <SelectItem value="rectoverso">Recto-verso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Nombre de copies</Label>
                  <Input type="number" min="1" defaultValue="1" />
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={() => setStep(3)}
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  >
                    Continuer
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Récapitulatif et livraison</h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Adresse de livraison</Label>
                  <Input placeholder="Numéro et rue" />
                  <Input placeholder="Complément d'adresse" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Code postal" />
                    <Input placeholder="Ville" />
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Délai de livraison</AlertTitle>
                  <AlertDescription>
                    Livraison garantie en 24h ouvrées
                  </AlertDescription>
                </Alert>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  >
                    Payer et commander
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Upload;
