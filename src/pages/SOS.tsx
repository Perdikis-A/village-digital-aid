import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SOS = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleEmergency = () => {
    setIsSending(true);

    // Simulate emergency alert
    setTimeout(() => {
      toast({
        variant: "default",
        title: "ΕΚΤΑΚΤΗ ΑΝΑΓΚΗ / EMERGENCY ALERT SENT",
        description: "Το μήνυμα εκτάκτου ανάγκης στάλθηκε επιτυχώς. Βοήθεια έρχεται. / Emergency message sent successfully. Help is on the way.",
        duration: 8000,
      });
      setIsSending(false);
      setTimeout(() => navigate("/"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-destructive/5">
      {/* Header */}
      <header className="bg-destructive border-b-4 border-destructive shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            size="lg"
            className="mb-4 text-accessible-base text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-8 h-8 mr-2" />
            Πίσω / Back
          </Button>
          <div className="flex items-center gap-4">
            <AlertCircle className="w-12 h-12 text-white animate-pulse" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-white">
                ΕΚΤΑΚΤΗ ΑΝΑΓΚΗ
              </h1>
              <p className="text-accessible-base text-white/90">
                Emergency SOS
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 mb-6 bg-destructive/10 border-4 border-destructive">
          <div className="text-center mb-6">
            <AlertCircle className="w-24 h-24 text-destructive mx-auto mb-4 animate-pulse" />
            <h2 className="text-accessible-xl font-bold text-foreground mb-3">
              Κουμπί Έκτακτης Ανάγκης
            </h2>
            <p className="text-accessible-base text-foreground leading-relaxed">
              Πατήστε το παρακάτω κουμπί μόνο σε περίπτωση πραγματικής έκτακτης ανάγκης.
            </p>
            <p className="text-accessible-base text-muted-foreground italic mt-2">
              Press the button below only in case of a real emergency.
            </p>
          </div>

          <Button
            onClick={handleEmergency}
            disabled={isSending}
            size="lg"
            className="w-full h-24 text-accessible-xl font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg mb-6 animate-pulse hover:animate-none"
          >
            <AlertCircle className="w-12 h-12 mr-4" />
            {isSending ? "ΑΠΟΣΤΟΛΗ..." : "ΣΤΕΙΛΕ SOS / SEND SOS"}
          </Button>

          <div className="bg-card p-6 rounded-lg border-2">
            <p className="text-accessible-base text-foreground font-semibold mb-4">
              Τι θα συμβεί όταν πατήσετε το κουμπί:
            </p>
            <ul className="space-y-3 text-accessible-base text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Θα σταλεί μήνυμα έκτακτης ανάγκης στις αρχές</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Θα ειδοποιηθούν οι εθελοντές της κοινότητας</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Θα σταλεί η τοποθεσία σας (αν είναι διαθέσιμη)</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 border-2">
          <h3 className="text-accessible-lg font-bold text-foreground mb-4">
            Αριθμοί Έκτακτης Ανάγκης / Emergency Numbers
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Phone className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-accessible-base font-bold text-foreground">Αστυνομία / Police</p>
                <a href="tel:112" className="text-accessible-lg font-bold text-primary hover:underline">
                  112
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Phone className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-accessible-base font-bold text-foreground">Ασθενοφόρο / Ambulance</p>
                <a href="tel:112" className="text-accessible-lg font-bold text-primary hover:underline">
                  112
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Phone className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-accessible-base font-bold text-foreground">Πυροσβεστική / Fire</p>
                <a href="tel:112" className="text-accessible-lg font-bold text-primary hover:underline">
                  112
                </a>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default SOS;
