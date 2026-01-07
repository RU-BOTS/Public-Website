import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, Crown, FileText } from "lucide-react";

const Apply = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Join RU HART</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of something meaningful. Join our team or run for 
            an executive board position.
          </p>
        </div>

        {/* Application Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Club Member</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Join as a general member and contribute to any subteam
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Work on mechanical, electrical, or software projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Gain hands-on robotics experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Flexible time commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>All skill levels welcome</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-glow transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Crown className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">E-Board Position</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Lead the team and shape the future of RU HART
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Leadership and organizational experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Guide project direction and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Mentor team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Higher time commitment required</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Application Form Placeholders */}
        <div className="space-y-8">
          {/* Club Application */}
          

          {/* E-Board Application */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Crown className="h-6 w-6 text-accent" />
                E-Board Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-accent/5 rounded-lg p-8 border-2 border-dashed border-accent/20 text-center">
                <Crown className="h-16 w-16 mx-auto mb-4 text-accent/50" />
                <p className="font-semibold text-muted-foreground mb-2">
                  [E-Board Application Form Integration]
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Leadership position application form to be added
                </p>
                <a href = "https://www.youtube.com/watch?v=YiqIkSHSmyc&list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k&index=3">
                <Button variant="outline">
                  E-Board Application Form
                </Button>
                </a>
              </div>

              {/* Preview of form fields */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Expected E-Board Application Fields:</h3>
                <div className="space-y-4 opacity-50">
                  <div>
                    <Label>Position of Interest</Label>
                    <Input placeholder="President, VP, Treasurer, etc." disabled />
                  </div>
                  <div>
                    <Label>Leadership Experience</Label>
                    <Textarea placeholder="Describe relevant experience..." disabled />
                  </div>
                  <div>
                    <Label>Vision for RU HART</Label>
                    <Textarea placeholder="How would you contribute to the organization?" disabled />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 shadow-medium bg-gradient-warm border-0">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold">
                  1
                </div>
                <p className="text-sm text-muted-foreground">
                  Submit your application through the form
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold">
                  2
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll review and reach out within 1-2 weeks
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 font-bold">
                  3
                </div>
                <p className="text-sm text-muted-foreground">
                  Join the team and start making an impact!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
