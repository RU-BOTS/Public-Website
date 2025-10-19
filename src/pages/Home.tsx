import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-robot.jpg";
import communityImage from "@/assets/community-impact.jpg";
import accomplishment1 from "@/assets/accomplishment-1.jpg";
import accomplishment2 from "@/assets/accomplishment-2.jpg";
import accomplishment3 from "@/assets/accomplishment-3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(16, 90, 58, 0.9) 0%, rgba(16, 100, 68, 0.85) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 text-center text-primary-foreground py-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Fighting Food Insecurity
            <span className="block mt-2 text-accent">Through Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            RU HART uses autonomous robotics to deliver food assistance with dignity, 
            discretion, and efficiency to those who need it most.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate">
              <Button variant="accent" size="lg" className="text-lg px-8 animate-scale-in">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-background/90 hover:bg-background animate-scale-in">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">[DATA]</div>
                <p className="text-muted-foreground">Students Affected</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">[DATA]</div>
                <p className="text-muted-foreground">Deliveries Made</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">[DATA]</div>
                <p className="text-muted-foreground">Hours Saved</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">[DATA]</div>
                <p className="text-muted-foreground">Partner Organizations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">The Challenge We're Solving</h2>
              <div className="prose prose-lg">
                <p className="text-muted-foreground">
                  Food insecurity affects countless students on campus, creating barriers to 
                  academic success and wellbeing. Traditional food assistance programs face challenges:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Limited discretion:</strong> Students fear stigma when accessing help</li>
                  <li><strong>Schedule conflicts:</strong> Many can't reach pantry during operating hours</li>
                  <li><strong>Accessibility issues:</strong> Physical barriers prevent some from accessing services</li>
                  <li><strong>Perishable items:</strong> Current systems struggle with fresh food delivery</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Community Impact" 
                className="rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-navy text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 opacity-90">
            RU HART develops autonomous delivery robots that bring food assistance directly 
            to students in need, preserving dignity while solving logistical challenges that 
            traditional pantries cannot address.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <Target className="h-12 w-12 mx-auto text-accent" />
              <h3 className="text-xl font-semibold">Discretion First</h3>
              <p className="opacity-90">
                Private, automated delivery removes stigma and preserves student dignity
              </p>
            </div>
            <div className="space-y-4">
              <Users className="h-12 w-12 mx-auto text-accent" />
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <p className="opacity-90">
                24/7 service for students with disabilities or schedule conflicts
              </p>
            </div>
            <div className="space-y-4">
              <TrendingUp className="h-12 w-12 mx-auto text-accent" />
              <h3 className="text-xl font-semibold">Fresh Food</h3>
              <p className="opacity-90">
                Reliable perishable item delivery that complements existing services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-20">
        <div className="container text-center">
          <Card className="max-w-4xl mx-auto shadow-medium">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Partnering for Impact</h2>
              <p className="text-lg text-muted-foreground mb-6">
                RU HART works hand-in-hand with the Rutgers Food Pantry, enhancing their 
                vital services with innovative technology. Together, we're building a 
                comprehensive solution to campus food insecurity.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link to="/about">
                  <Button variant="default">Learn About Our Partnership</Button>
                </Link>
                <Link to="/timeline">
                  <Button variant="outline">View Project Timeline</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Be Part of the Solution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Your support helps us develop life-changing technology for students in need
          </p>
          <Link to="/donate">
            <Button variant="accent" size="lg" className="text-lg px-12">
              Donate Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey So Far</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to reality, see the milestones we've achieved in our mission 
              to revolutionize food assistance delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={accomplishment1} 
                  alt="Team building robot prototype" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Prototype Development</h3>
                <p className="text-muted-foreground mb-4">
                  [YEAR] - Our dedicated team of engineers and volunteers successfully 
                  developed and tested our first autonomous delivery robot prototype, 
                  marking a major milestone in our mission.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1 w-12 bg-primary rounded"></div>
                  <span>[XX] hours of development</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={accomplishment2} 
                  alt="Robot making campus delivery" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Campus Trials</h3>
                <p className="text-muted-foreground mb-4">
                  [YEAR] - Completed [XX] successful test deliveries across campus, 
                  demonstrating the viability of our autonomous system and gathering 
                  valuable feedback from the community.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1 w-12 bg-primary rounded"></div>
                  <span>[XX] test deliveries completed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={accomplishment3} 
                  alt="Community outreach event" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">Community Engagement</h3>
                <p className="text-muted-foreground mb-4">
                  [YEAR] - Hosted [XX] workshops and outreach events, educating 
                  [XXX] students about food insecurity and recruiting passionate 
                  volunteers to join our cause.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1 w-12 bg-primary rounded"></div>
                  <span>[XX] events organized</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
