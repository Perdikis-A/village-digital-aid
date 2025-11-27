import { Link } from "react-router-dom";
import { 
  Calendar, 
  GraduationCap, 
  Megaphone, 
  HandHeart, 
  AlertCircle,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigationCards = [
    {
      to: "/appointments",
      icon: Calendar,
      title: "Ιατρικά Ραντεβού",
      subtitle: "Medical Appointments",
      description: "Κλείστε ραντεβού με γιατρό",
      bgColor: "bg-primary",
    },
    {
      to: "/tutorials",
      icon: GraduationCap,
      title: "Ψηφιακές Δεξιότητες",
      subtitle: "Digital Skills",
      description: "Μάθετε να χρησιμοποιείτε υπηρεσίες",
      bgColor: "bg-accent",
    },
    {
      to: "/announcements",
      icon: Megaphone,
      title: "Ανακοινώσεις",
      subtitle: "Village News",
      description: "Νέα και εκδηλώσεις του χωριού",
      bgColor: "bg-primary",
    },
    {
      to: "/volunteer",
      icon: HandHeart,
      title: "Βοήθεια Εθελοντή",
      subtitle: "Volunteer Help",
      description: "Ζητήστε βοήθεια από εθελοντή",
      bgColor: "bg-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-4 border-primary shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Heart className="w-12 h-12 text-primary" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-foreground">
                DigitalCare
              </h1>
              <p className="text-accessible-base text-muted-foreground">
                Ο Ψηφιακός σας Βοηθός
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <Card className="p-8 mb-8 bg-card border-2">
          <h2 className="text-accessible-xl font-semibold mb-3 text-foreground">
            Καλώς ήρθατε! / Welcome!
          </h2>
          <p className="text-accessible-base text-muted-foreground leading-relaxed">
            Επιλέξτε τι θέλετε να κάνετε πατώντας σε ένα από τα παρακάτω κουμπιά.
          </p>
        </Card>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {navigationCards.map((card) => (
            <Link key={card.to} to={card.to}>
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary group h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`${card.bgColor} p-6 rounded-2xl group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-16 h-16 text-white" />
                  </div>
                  <div>
                    <h3 className="text-accessible-lg font-bold text-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="text-accessible-sm text-muted-foreground mb-2 italic">
                      {card.subtitle}
                    </p>
                    <p className="text-accessible-base text-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Emergency SOS Button */}
        <Card className="p-6 bg-destructive/10 border-2 border-destructive">
          <Link to="/sos">
            <Button 
              size="lg" 
              className="w-full h-24 text-accessible-xl font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg"
            >
              <AlertCircle className="w-12 h-12 mr-4" />
              ΚΟΥΜΠΙ ΕΚΤΑΚΤΗΣ ΑΝΑΓΚΗΣ / SOS EMERGENCY
            </Button>
          </Link>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 bg-card border-t-2 border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accessible-base text-muted-foreground">
            DigitalCare - Ψηφιακός Βοηθός για την Κοινότητά μας
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
