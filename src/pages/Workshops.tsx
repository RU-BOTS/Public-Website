import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Wrench, Code, Zap } from "lucide-react";
import WorkshopCalendar from "@/components/ui/WorkshopCalendar";

const Workshops = () => {
  const subteams = [
    {
      name: "Mechanical Engineering",
      icon: Wrench,
      color: "bg-blue-500",
      description: "Design and fabrication of robot chassis, drivetrain, and delivery mechanisms",
      topics: [
        "CAD Design & 3D Modeling",
        "Materials Selection & Testing",
        "Drivetrain Systems",
        "Payload Container Design",
        "Structural Analysis",
      ],
      difficulty: "Beginner to Advanced",
    },
    {
      name: "Electrical Engineering",
      icon: Zap,
      color: "bg-yellow-500",
      description: "Power systems, sensors, and electronic control systems",
      topics: [
        "Circuit Design & PCB Layout",
        "Motor Controllers & Drivers",
        "Sensor Integration (LIDAR, Cameras)",
        "Power Management Systems",
        "Embedded Systems",
      ],
      difficulty: "Intermediate to Advanced",
    },
    {
      name: "Software & Navigation",
      icon: Code,
      color: "bg-green-500",
      description: "Autonomous navigation, path planning, and control algorithms",
      topics: [
        "ROS (Robot Operating System)",
        "Computer Vision & Object Detection",
        "Path Planning Algorithms",
        "Obstacle Avoidance",
        "Machine Learning Integration",
      ],
      difficulty: "Intermediate to Advanced",
    },
    {
      name: "Systems Integration",
      icon: Cpu,
      color: "bg-purple-500",
      description: "Bringing all subsystems together for seamless operation",
      topics: [
        "System Architecture Design",
        "Hardware-Software Interface",
        "Testing & Validation",
        "Performance Optimization",
        "Documentation & Standards",
      ],
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Workshop Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn cutting-edge robotics skills while contributing to a meaningful cause. 
            Our workshops offer hands-on experience for all skill levels.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-16 shadow-medium bg-gradient-warm border-0">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">What You'll Gain</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Practical Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on experience with industry-standard tools and technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Portfolio Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Real-world projects that demonstrate your abilities to employers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Community Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Contribute to technology that helps students in need
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subteam Workshops */}
        <h2 className="text-3xl font-bold mb-8">Subteam Focus Areas</h2>
        <div className="grid gap-8 mb-16">
          {subteams.map((subteam, index) => {
            const Icon = subteam.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-glow transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-lg ${subteam.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{subteam.name}</CardTitle>
                        <Badge variant="secondary">{subteam.difficulty}</Badge>
                      </div>
                      <p className="text-muted-foreground">{subteam.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Workshop Topics:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {subteam.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Workshop Schedule Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Subteam Schedule</h2>
          <Card className="shadow-medium">
            <CardContent className="pt-8 pb-8 text-center">
              <p className="text-muted-foreground mb-6">
                Detailed subteam schedule and workshop calendar to be posted. Check back soon 
                for dates, times, and locations for each subteam's sessions.
              </p>
              <div className="inline-block bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border">
                <p className="text-sm font-semibold text-muted-foreground">
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                    <div>
                      <h1 className="text-3xl font-bold mb-6">Subteam Meetings</h1>
                      <WorkshopCalendar />
                    </div>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <Card className="shadow-medium bg-gradient-navy border-0">
          <CardContent className="pt-8 pb-8 text-center text-secondary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join our team and gain valuable experience while making a real difference. 
              Whether you're a beginner or have advanced skills, there's a place for you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/apply">
                <Button variant="accent" size="lg">
                  Apply to Join
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-background/10 hover:bg-background/20">
                  Learn More About RU HART
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workshops;
