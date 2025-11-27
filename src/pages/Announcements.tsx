import { useNavigate } from "react-router-dom";
import { ArrowLeft, Megaphone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Announcements = () => {
  const navigate = useNavigate();

  // Mock announcements - in real app, these would come from a database
  const announcements = [
    {
      id: 1,
      title: "Εκδήλωση στην Πλατεία του Χωριού",
      subtitle: "Village Square Event",
      date: "15 Δεκεμβρίου 2024",
      location: "Κεντρική Πλατεία",
      description: "Παραδοσιακή γιορτή με μουσική και φαγητό. Όλοι είναι ευπρόσδεκτοι!",
      type: "event",
    },
    {
      id: 2,
      title: "Διακοπή Ρεύματος",
      subtitle: "Power Outage Notice",
      date: "10 Δεκεμβρίου 2024, 9:00-12:00",
      location: "Περιοχή Κέντρου",
      description: "Προγραμματισμένη διακοπή για συντήρηση δικτύου. Παρακαλούμε να προετοιμαστείτε.",
      type: "notice",
    },
    {
      id: 3,
      title: "Δωρεάν Ιατρικός Έλεγχος",
      subtitle: "Free Medical Check-up",
      date: "20 Δεκεμβρίου 2024",
      location: "Κοινοτικό Κέντρο",
      description: "Δωρεάν έλεγχος πίεσης και σακχάρου για όλους τους κατοίκους.",
      type: "health",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "event":
        return "bg-accent text-accent-foreground";
      case "notice":
        return "bg-primary text-primary-foreground";
      case "health":
        return "bg-success text-success-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "event":
        return "Εκδήλωση / Event";
      case "notice":
        return "Ανακοίνωση / Notice";
      case "health":
        return "Υγεία / Health";
      default:
        return "Γενικά / General";
    }
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
            <Megaphone className="w-12 h-12 text-primary" />
            <div>
              <h1 className="text-accessible-2xl font-bold text-foreground">
                Ανακοινώσεις Χωριού
              </h1>
              <p className="text-accessible-base text-muted-foreground">
                Village Announcements
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="p-8 mb-8 bg-card border-2">
          <p className="text-accessible-base text-muted-foreground leading-relaxed">
            Ενημερωθείτε για τα νέα και τις εκδηλώσεις του χωριού μας.
            <br />
            <span className="italic">Stay informed about news and events in our village.</span>
          </p>
        </Card>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="p-6 border-2 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Badge className={`${getTypeColor(announcement.type)} text-accessible-sm mb-3`}>
                  {getTypeLabel(announcement.type)}
                </Badge>
                <h2 className="text-accessible-lg font-bold text-foreground mb-1">
                  {announcement.title}
                </h2>
                <p className="text-accessible-base text-muted-foreground italic">
                  {announcement.subtitle}
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 text-accessible-base">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-semibold">{announcement.date}</span>
                </div>
                <div className="flex items-center gap-3 text-accessible-base">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>{announcement.location}</span>
                </div>
              </div>

              <p className="text-accessible-base text-foreground leading-relaxed bg-muted/50 p-4 rounded-lg">
                {announcement.description}
              </p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Announcements;
