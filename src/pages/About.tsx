import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Clock, Shield, Package } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Reveal from "../components/ui/Reveal";

function useAnimatedNumber(target: number, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      setValue(target * progress);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function ImpactPanel() {
  // Placeholder dynamic data
  const acceptancePct = 71;
  const discretionLiftPct = 72;
  const weeklyPct = 68;
  const biWeeklyPct = 25;
  const rarelyPct = 7;
  const oppositionPct = 1.56;

  // Animations
  const acceptanceAnim = useAnimatedNumber(acceptancePct, 1200);
  const discretionAnim = useAnimatedNumber(discretionLiftPct, 1000);
  const weeklyAnim = useAnimatedNumber(weeklyPct, 1000);

  // Sparkline trend (placeholder)
  const trend = useMemo(() => [12, 14, 10, 16, 20, 18, 23, 19, 25, 28, 26, 31], []);
  const spark = useMemo(() => {
    const width = 220;
    const height = 60;
    const max = Math.max(...trend);
    const min = Math.min(...trend);
    const range = Math.max(1, max - min);
    const stepX = width / (trend.length - 1);
    const points = trend.map((v, i) => {
      const x = i * stepX;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    });
    return { width, height, d: `M ${points.join(" L ")}` };
  }, [trend]);

  return (
    <Card className="shadow-large overflow-hidden">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Radial acceptance gauge */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-44 h-44 mb-4">
              <div
                className="absolute inset-0 rounded-full transition-[background] duration-700"
                style={{
                  background: `conic-gradient(hsl(var(--primary)) 0% ${acceptanceAnim}%, hsl(var(--muted)) ${acceptanceAnim}% 100%)`,
                }}
              />
              <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                <div>
                  <div className="text-4xl font-extrabold leading-none">{Math.round(acceptanceAnim)}%</div>
                  <div className="text-xs text-muted-foreground mt-1">Strongly want delivery</div>
                </div>
              </div>
            </div>
            <div className="text-xs px-3 py-1.5 rounded-full bg-destructive/10 text-destructive" >
              Opposition against robot delivery: {oppositionPct}%
            </div>
          </div>

          {/* KPI tiles */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-5 text-center shadow-soft">
              <div className="text-5xl font-extrabold">{Math.round(discretionAnim)}%</div>
              <div className="text-sm text-muted-foreground mt-1">More usage with discreet delivery</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-5 text-center shadow-soft">
              <div className="text-5xl font-extrabold">{Math.round(weeklyAnim)}%</div>
              <div className="text-sm text-muted-foreground mt-1">Would use weekly or more</div>
            </div>
            <div className="col-span-2 rounded-xl border p-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">Usage Frequency</span>
                <span className="text-muted-foreground">Total 100%</span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Weekly or more</span><span>{weeklyPct}%</span></div>
                  <div className="h-2 rounded bg-muted overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-700" style={{ width: `${weeklyAnim}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Bi-weekly</span><span>{biWeeklyPct}%</span></div>
                  <div className="h-2 rounded bg-muted overflow-hidden">
                    <div className="h-full bg-primary/70 transition-all duration-700 delay-150" style={{ width: `${biWeeklyPct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span>Rarely / Never</span><span>{rarelyPct}%</span></div>
                  <div className="h-2 rounded bg-muted overflow-hidden">
                    <div className="h-full bg-primary/40 transition-all duration-700 delay-300" style={{ width: `${rarelyPct}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sparkline trend */}
          <div className="rounded-xl bg-gradient-to-br from-background to-muted p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">Requests Trend</div>
              <div className="text-xs text-muted-foreground">Sample last 12 periods</div>
            </div>
            <svg width={spark.width} height={spark.height} className="block">
              <defs>
                <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path d={spark.d} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              {/* simple area fill */}
              <path d={`${spark.d} L ${spark.width},${spark.height} L 0,${spark.height} Z`} fill="url(#spark)" opacity={0.15} />
            </svg>
            <div className="mt-2 text-xs text-muted-foreground">+18% vs prior period (placeholder)</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Reveal>
          <h1 className="text-5xl font-bold mb-6">About RU HART</h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Helping Autonomous Robotics Technology - Innovation meets compassion 
            to address food insecurity at Rutgers University
          </p>
          </Reveal>
        </div>

        {/* What We Do */}
        <section className="mb-20">
          <Reveal>
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          </Reveal>
          <Card className="shadow-medium">
            <CardContent className="pt-6">
              <Reveal>
              <p className="text-lg text-muted-foreground mb-6">
                RU HART is developing autonomous delivery robots to bring food assistance 
                directly to students experiencing food insecurity. Our solution addresses 
                critical gaps in existing food pantry services by providing:
              </p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <Reveal>
                    <h3 className="font-semibold mb-2">Complete Discretion</h3>
                    <p className="text-muted-foreground">
                      Automated delivery protects student privacy and removes the stigma 
                      often associated with seeking food assistance
                    </p>
                    </Reveal>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <Reveal>
                    <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      24/7 delivery capability accommodates students with challenging 
                      work schedules or class conflicts
                    </p>
                    </Reveal>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Cpu className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <Reveal>
                    <h3 className="font-semibold mb-2">Accessibility Services</h3>
                    <p className="text-muted-foreground">
                      Direct-to-location delivery assists students with mobility challenges 
                      or disabilities
                    </p>
                    </Reveal>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Package className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <Reveal>
                    <h3 className="font-semibold mb-2">Perishable Items</h3>
                    <p className="text-muted-foreground">
                      Temperature-controlled compartments enable safe delivery of fresh 
                      produce and perishable goods
                    </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partnership Section */}
        <section className="mb-20">
          <Reveal>
          <h2 className="text-3xl font-bold mb-8">Our Partnership</h2>
          </Reveal>
          <Card className="shadow-medium bg-gradient-warm border-0">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <Reveal>
                <p className="text-muted-foreground">
                  
                  RU HART proudly partners with the <strong>Rutgers Food Pantry</strong>, enhancing 
                  rather than replacing their essential services. While the food pantry provides 
                  an invaluable resource through their physical location and truck delivery program, 
                  RU HART's autonomous robots complement these efforts by solving specific challenges:
                </p>
                </Reveal>
                <ul className="space-y-3 text-muted-foreground mt-4">
                  <li>
                    Extending service hours beyond traditional pantry operating times
                  </li>
                  <li>
                    Reaching students who face barriers accessing the physical pantry location
                  </li>
                  <li>
                    Providing on-demand delivery for urgent food needs
                  </li>
                  <li>
                    Maintaining cold chain integrity for perishable items during delivery
                  </li>
                  <li>
                    Offering a fully private option for students concerned about visibility
                  </li>
                </ul>
                <Reveal>
                <p className="text-muted-foreground mt-4">
                  Together, we're building a comprehensive food security network that serves 
                  all students, regardless of their unique circumstances or challenges.
                </p>
                </Reveal>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impact / Stats Graphics - Composite Impact Panel */}
        <section className="mb-20">
          <Reveal>
          <h2 className="text-3xl font-bold mb-8">Impact at a Glance</h2>
          </Reveal>
          <ImpactPanel />
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <Reveal>
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <Reveal>
                <CardTitle>Request Delivery</CardTitle>
                </Reveal>
              </CardHeader>
              <CardContent>
                <Reveal>
                <p className="text-muted-foreground">
                  Students submit a confidential request through our secure platform, 
                  specifying their location and dietary needs
                </p>
                </Reveal>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <Reveal>
                <CardTitle>Autonomous Navigation</CardTitle>
                </Reveal>
              </CardHeader>
              <CardContent>
                <Reveal>
                <p className="text-muted-foreground">
                  Our robot autonomously navigates campus pathways, avoiding obstacles 
                  and optimizing routes for efficient delivery
                </p>
                </Reveal>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <Reveal>
                <CardTitle>Secure Receipt</CardTitle>
                </Reveal>
              </CardHeader>
              <CardContent>
                <Reveal>
                <p className="text-muted-foreground">
                  Students receive a notification upon arrival and securely retrieve 
                  their items from the robot's compartment
                </p>
                </Reveal>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="shadow-medium bg-gradient-navy border-0">
            <CardContent className="pt-8 pb-8 text-secondary-foreground">
              <Reveal>
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Whether through donations, joining our team, or spreading awareness, 
                you can help make a difference in the lives of students facing food insecurity
              </p>
              </Reveal>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/donate">
                  <Button variant="accent" size="lg">Support Us</Button>
                </Link>
                <Link to="/apply">
                  <Button variant="outline" size="lg" className="bg-background/10 hover:bg-background/20">
                    Apply to Join
                  </Button>
                </Link>
                <Link to="/timeline">
                  <Button variant="ghost" size="lg" className="hover:bg-background/10">
                    View Timeline
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
