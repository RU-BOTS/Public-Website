import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2, Clock } from "lucide-react";

const Timeline = () => {
  const timelineData = [
    {
      period: "Fall 2025",
      title: "Foundation & Planning",
      items: [
        { task: "Workshops", description: "RU Search for Drivetrain solutions" },
        { task: "RU HART Mission", description: "Building Payload systems" },
      ],
    },
    {
      period: "Winter 2025",
      title: "Development & Testing",
      items: [
        { task: "Workshops", description: "Drivetrain implementation and assembly" },
        { task: "RU HART Mission", description: "Comprehensive testing trials" },
      ],
    },
    {
      period: "Rutgers Day",
      title: "Launch & Demonstration",
      items: [
        { task: "Workshops", description: "Investor Presentation and showcase" },
        { task: "RU HART Mission", description: "Navigation Testing with Drivetrain" },
      ],
    },
    {
      period: "Spring 2026",
      title: "Expansion & Refinement",
      items: [
        { task: "Second Half", description: "Full deployment and service expansion" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Project Timeline</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our roadmap to revolutionizing campus food assistance through autonomous robotics
          </p>
        </div>

        {/* Rutgers Day Highlight */}
        <Card className="mb-12 shadow-medium bg-gradient-hero border-0">
          <CardContent className="pt-8 pb-8 text-center text-primary-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-2">Rutgers Day Milestone</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Rutgers Day represents a major milestone where we'll demonstrate our technology 
              to investors, showcase our progress to the community, and conduct critical 
              navigation testing with our complete drivetrain system.
            </p>
          </CardContent>
        </Card>

        {/* Timeline Grid */}
        <div className="space-y-8 mb-16">
          {timelineData.map((phase, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary mb-1">{phase.period}</div>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 ml-16">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold">{item.task}</div>
                        <div className="text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Timeline Table */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Executive Timeline Summary</h2>
          <Card className="shadow-medium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Phase</th>
                    <th className="px-6 py-4 text-left font-semibold">Fall 2025</th>
                    <th className="px-6 py-4 text-left font-semibold">Winter 2025</th>
                    <th className="px-6 py-4 text-left font-semibold">Rutgers Day</th>
                    <th className="px-6 py-4 text-left font-semibold">Spring 2026</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-6 py-4 font-medium">Workshops</td>
                    <td className="px-6 py-4 text-muted-foreground">RU Search for Drivetrain</td>
                    <td className="px-6 py-4 text-muted-foreground">Drivetrain Assembly</td>
                    <td className="px-6 py-4 text-muted-foreground">Investor Presentation</td>
                    <td className="px-6 py-4 text-muted-foreground">Second Half Operations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">RU HART Mission</td>
                    <td className="px-6 py-4 text-muted-foreground">Building Payload</td>
                    <td className="px-6 py-4 text-muted-foreground">Testing Trials</td>
                    <td className="px-6 py-4 text-muted-foreground">Navigation Testing with Drivetrain</td>
                    <td className="px-6 py-4 text-muted-foreground">Full Deployment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Future Vision */}
        <section className="mt-16">
          <Card className="shadow-medium bg-gradient-warm border-0">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Beyond Spring 2026</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Following our initial deployment, we plan to expand our fleet, enhance our 
                technology, and scale our impact across the entire Rutgers campus and beyond. 
                Stay tuned for updates on our progress!
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
