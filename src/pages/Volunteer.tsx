import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HandHeart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Επιτυχία! / Success!",
        description: "Το αίτημά σας στάλθηκε. Ένας εθελοντής θα επικοινωνήσει σύντομα μαζί σας. / Your request has been sent. A volunteer will contact you soon.",
        duration: 5000,
      });
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-4 border-accent shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            size="lg"
            className="mb-4 text-accessible-base"
          >
            <ArrowLeft className="w-8 h-8 mr-2" />
            Πίσω / Back
          </Button>
          <div className="flex items-center gap-4">
            <HandHeart className="w-12 h-12 text-accent" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-foreground">
                Βοήθεια από Εθελοντή
              </h1>
              <p className="text-accessible-base text-muted-foreground">
                Volunteer Help Request
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 border-2">
          <div className="mb-8 space-y-4">
            <p className="text-accessible-base text-muted-foreground leading-relaxed">
              Χρειάζεστε βοήθεια με ψηφιακές υπηρεσίες; Ένας εθελοντής μπορεί να σας βοηθήσει!
            </p>
            <p className="text-accessible-base text-muted-foreground italic leading-relaxed">
              Need help with digital services? A volunteer can assist you!
            </p>
            <div className="bg-accent/10 p-4 rounded-lg border-2 border-accent/30">
              <p className="text-accessible-base font-semibold text-foreground">
                Τι μπορεί να σας βοηθήσει ένας εθελοντής:
              </p>
              <ul className="mt-2 space-y-2 text-accessible-base text-foreground">
                <li>• Χρήση υπολογιστή ή smartphone</li>
                <li>• Συμπλήρωση ηλεκτρονικών φορμών</li>
                <li>• Online πληρωμές</li>
                <li>• Γενικές ψηφιακές δεξιότητες</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-accessible-base font-semibold">
                Ονοματεπώνυμο / Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                className="h-14 text-accessible-base border-2"
                placeholder="Γράψτε το όνομά σας"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-accessible-base font-semibold">
                Τηλέφωνο / Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                className="h-14 text-accessible-base border-2"
                placeholder="Γράψτε το τηλέφωνό σας"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="address" className="text-accessible-base font-semibold">
                Διεύθυνση / Address
              </Label>
              <Input
                id="address"
                name="address"
                className="h-14 text-accessible-base border-2"
                placeholder="Γράψτε τη διεύθυνσή σας (προαιρετικό)"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="help" className="text-accessible-base font-semibold">
                Με τι χρειάζεστε βοήθεια; / What do you need help with? *
              </Label>
              <Textarea
                id="help"
                name="help"
                required
                className="min-h-32 text-accessible-base border-2 resize-none"
                placeholder="Περιγράψτε τι θέλετε να μάθετε ή με τι χρειάζεστε βοήθεια"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-16 text-accessible-lg font-bold bg-accent hover:bg-accent/90"
            >
              <Send className="w-8 h-8 mr-3" />
              {isSubmitting ? "Αποστολή..." : "Αποστολή Αιτήματος / Submit Request"}
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Volunteer;
