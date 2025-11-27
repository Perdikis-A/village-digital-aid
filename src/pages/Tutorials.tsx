import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Tutorials = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: "Πώς να χρησιμοποιήσετε το Gov.cy",
      subtitle: "How to use Gov.cy",
      embedId: "dQw4w9WgXcQ", // Replace with actual tutorial video IDs
    },
    {
      title: "Πώς να κάνετε online πληρωμές",
      subtitle: "How to make online payments",
      embedId: "dQw4w9WgXcQ", // Replace with actual tutorial video IDs
    },
    {
      title: "Βασική χρήση smartphone",
      subtitle: "Basic smartphone usage",
      embedId: "dQw4w9WgXcQ", // Replace with actual tutorial video IDs
    },
  ];

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
            <GraduationCap className="w-12 h-12 text-accent" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-foreground">
                Ψηφιακές Δεξιότητες
              </h1>
              <p className="text-accessible-base text-muted-foreground">
                Digital Skills Tutorials
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Card className="p-8 mb-8 bg-card border-2">
          <p className="text-accessible-base text-muted-foreground leading-relaxed">
            Παρακολουθήστε βίντεο για να μάθετε πώς να χρησιμοποιείτε ψηφιακές υπηρεσίες.
            <br />
            <span className="italic">Watch videos to learn how to use digital services.</span>
          </p>
        </Card>

        <div className="space-y-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="p-6 border-2">
              <div className="flex items-start gap-4 mb-4">
                <Youtube className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h2 className="text-accessible-lg font-bold text-foreground mb-1">
                    {tutorial.title}
                  </h2>
                  <p className="text-accessible-base text-muted-foreground italic">
                    {tutorial.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${tutorial.embedId}`}
                  title={tutorial.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-8 bg-accent/10 border-2 border-accent">
          <h3 className="text-accessible-lg font-bold text-foreground mb-3">
            Χρειάζεστε βοήθεια; / Need help?
          </h3>
          <p className="text-accessible-base text-foreground mb-4">
            Αν δυσκολεύεστε να παρακολουθήσετε τα βίντεο, ζητήστε τη βοήθεια ενός εθελοντή.
          </p>
          <Button
            onClick={() => navigate("/volunteer")}
            size="lg"
            className="h-14 text-accessible-base bg-accent hover:bg-accent/90"
          >
            Ζητήστε Βοήθεια / Request Help
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default Tutorials;
