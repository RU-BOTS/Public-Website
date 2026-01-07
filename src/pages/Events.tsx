import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gift, Download, Trophy } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for exciting fundraising events and enter to win amazing prizes 
            while supporting our mission
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <Card className="shadow-medium">
            <CardContent className="pt-8 pb-8 text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground mb-6">
                Event calendar coming soon! Check back here for upcoming fundraisers, 
                demonstrations, and community events.
              </p>
              <div className="inline-block bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border max-w-md">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  [Event Calendar Integration]
                </p>
                <p className="text-xs text-muted-foreground">
                  Downloadable e-calendar invites for future dates to be added
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Active Raffles 
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Active Raffles & Incentives</h2>
          <Card className="shadow-medium bg-gradient-warm border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gift className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Donation Incentive Program</CardTitle>
                  <p className="text-muted-foreground mt-1">
                    Support RU HART and enter to win exciting prizes
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-background rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Trophy className="h-10 w-10 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Current Raffle</h3>
                    <Badge className="mb-3">Running Online</Badge>
                    <p className="text-muted-foreground mb-4">
                      Details about current raffle or donation incentive programs will be 
                      posted here. Every donation enters you for a chance to win!
                    </p>
                    <div className="inline-block bg-muted/50 rounded-lg p-6 border-2 border-dashed border-border w-full">
                      <p className="text-sm font-semibold text-muted-foreground">
                        [Raffle Details & Entry Information]
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Raffle details to be configured
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        */}

        {/* Prize Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Prize Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Grand Prize
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Major donors have the opportunity to have their name permanently 
                  engraved on our robot!
                </p>
                <div className="bg-muted/50 rounded p-4 text-sm">
                  <span className="font-semibold">Minimum donation:</span> $250+
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Additional Prizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  More prize tiers and raffle rewards to be announced. All donors 
                  will be recognized on our website!
                </p>
                <div className="bg-muted/50 rounded p-4 text-sm text-center">
                  <p className="text-muted-foreground">Prize details coming soon</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Event Calendar Download 
        <section className="mb-16">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Download className="h-6 w-6 text-primary" />
                Download Event Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Stay up to date with all our events! Download e-calendar invites for 
                upcoming fundraisers, demonstrations, and club meetings.
              </p>
              <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border text-center">
                <Calendar className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  [iCal / Google Calendar Integration]
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Downloadable calendar links to be added
                </p>
                <Button variant="outline" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        */}

        {/* CTA */}
        <Card className="shadow-medium bg-gradient-hero border-0">
          <CardContent className="pt-8 pb-8 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Follow us on social media and check back regularly for event updates, 
              raffle announcements, and more ways to support RU HART.
            </p>
            <a href="https://www.instagram.com/rutgers_hart/?hl=en">
            <Button variant="accent" size="lg">
              Stay Updated - Instagram Link
            </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
