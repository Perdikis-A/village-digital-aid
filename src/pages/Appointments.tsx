import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Appointments = () => {
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
        description: "Το αίτημά σας για ραντεβού στάλθηκε επιτυχώς. / Your appointment request has been sent successfully.",
        duration: 5000,
      });
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-4 border-primary shadow-sm">
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
            <Calendar className="w-12 h-12 text-primary" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-foreground">
                Ιατρικά Ραντεβού
              </h1>
              <p className="text-accessible-base text-muted-foreground">
                Medical Appointments
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-8 border-2">
          <p className="text-accessible-base text-muted-foreground mb-8 leading-relaxed">
            Συμπληρώστε τα παρακάτω στοιχεία για να κλείσετε ραντεβού με γιατρό.
            <br />
            <span className="italic">Please fill in the details below to request a medical appointment.</span>
          </p>

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
              <Label htmlFor="date" className="text-accessible-base font-semibold">
                Προτιμώμενη Ημερομηνία / Preferred Date *
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                className="h-14 text-accessible-base border-2"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="reason" className="text-accessible-base font-semibold">
                Λόγος Επίσκεψης / Reason for Visit
              </Label>
              <Textarea
                id="reason"
                name="reason"
                className="min-h-32 text-accessible-base border-2 resize-none"
                placeholder="Περιγράψτε τον λόγο της επίσκεψής σας (προαιρετικό)"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full h-16 text-accessible-lg font-bold bg-primary hover:bg-primary/90"
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

export default Appointments;
