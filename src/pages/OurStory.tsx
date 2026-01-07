import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import workshop_image from "@/assets/workshop.png";
import pres_img from "@/assets/presentation_img.png";
import communityImage from "@/assets/community-impact.jpg";
import accomplishment1 from "@/assets/accomplishment-1.jpg";
import accomplishment2 from "@/assets/accomplishment-2.jpg";
import accomplishment3 from "@/assets/accomplishment-3.jpg";
import dhruv_img from "@/assets/dhruv_image.png";
import apollo_img from "@/assets/apollo_image.png";
import advik_img from "@/assets/advik_image.png";
import kajol_img from "@/assets/kajol_image.png";
import rohan_img from "@/assets/rohan_image.png";
import bridget_img from "@/assets/bridget_image.png";
import shubham_img from "@/assets/shubham_image.png";
import ilan_img from "@/assets/ilan_image.png";
import gav_img from "@/assets/gavril_image.png";
import proto_img from "@/assets/prototypeDev_img.png";

const OurStory = () => {
  const donationGoal = 5000;
  const raisedAmount = 5; // current amount raised
  const raisedPct = Math.round((raisedAmount / donationGoal) * 100);
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The journey of RU HART and our mission to combat food insecurity
          </p>
        </div>

        {/* Founding Story */}
        <section className="mb-20">
          <Card className="shadow-medium">
            <CardContent className="pt-10 pb-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                It all started with a simple question: What if technology could make kindness move on wheels?
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                During their time at Rutgers, Dhruv and Advik noticed something that too often went unseen — students quietly struggling with food insecurity. 
                Between classes, jobs, and commutes, many found it difficult to access the Rutgers Food Pantry during open hours, and even when they did, they often felt self-conscious about seeking help. 
                The founders envisioned a way to bring the pantry to them — safely, reliably, and with discretion.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                From that spark, RU HART, Rutgers’ chapter of the Human Factors and Ergonomics Society (HFES), was born — a team of engineers, designers, and dreamers determined to use robotics for good. 
                Together, they began building PantryBot, an autonomous delivery robot designed to carry pantry essentials directly to students across campus.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                What began as late-night brainstorming sessions soon became a mission: to prove that technology doesn’t just have to be smart — it can be compassionate.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, RU HART brings together students from various disciplines including engineering, business, law and software, united by a 
                  common goal: to ensure that no student goes hungry and that everyone has equal access to food.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Board Hierarchy */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="h-10 w-10 text-primary" />
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team driving RU HART's mission forward
            </p>
          </div>

          {/* Executive Board */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Executive Board</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center">
                    <img 
                    
                  src={dhruv_img} 
                 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-xl">Dhruv Nagpal</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">President</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Industrial and Systems Engineering, Class of 2028</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center">
                    <img 
                    
                  src={advik_img} 
                  alt="Community outreach event" 
                  className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-xl">Advik Lall</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Vice President</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Computer Science and Data Science, Class of 2027</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center">
                    <img 
                    
                  src={kajol_img} 
                  alt="Community outreach event" 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-xl">Kajol LastName</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Secretary</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Computer Science and Data Science, Class of 2028</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team Leads */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Team Leads</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="">
                    <img 
                    
                  src={ilan_img} 
                  alt="Community outreach event" 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Illan Zarge</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Mechanical Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Industrial and Systems Engineering, Class of 2028</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="">
                    <img 
                    
                  src={rohan_img} 
                  alt="Community outreach event" 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Rohan Shrivastava</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Electrical Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Electrical Engineering, Class of 2028</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center">
                    <img 
                    
                  src={apollo_img} 
                  alt="Community outreach event" 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Apollo Touch</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Software Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Computer Science, Class of 2029</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="">
                    <img 
                    
                  src={shubham_img} 
                  alt="Community outreach event" 
                  className="= object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Shubham Agarwal</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Business Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Aerospace Engineering, Class of 2029</p>
                </CardContent>
              </Card>
            </div>
            {/* Second Team Leads */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="">
                    <img 
                    
                  src={bridget_img} 
                  alt="Community outreach event" 
                  className="w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Bridget Filan</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Marketing Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Industrial and Systems Engineering, Class of 2028</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-full bg-yellow-500 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">TZ</span>
                  </div>
                  <CardTitle className="text-lg">Taha Zaidi </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Electrical Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Electrical Engineering, Class of 2028</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="">
                    <img 
                    
                  src={gav_img} 
                  alt="Community outreach event" 
                  className="object-cover w-24 h-24 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center"
                />
                  </div>
                  <CardTitle className="text-lg">Gavril Lomotey</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">Software Lead</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>Electrical Engineering, Class of 2028</p>
                </CardContent>
              </Card>

             
            </div>
          </div>

          {/* Team Progress - Slideshow */
          }
          <section className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold">Team Progress</h3>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                A glimpse into our journey building PantryBot — prototyping, testing, and community outreach
              </p>
            </div>
            <Card className="shadow-medium">
              <CardContent className="pt-6 pb-8">
                <Carousel className="relative">
                  <CarouselContent>
                    {[
                      { src: workshop_image, alt: "Robot hero shot", caption: "Workshops for training members" },
                      { src: pres_img, alt: "Prototype build", caption: "Engaging students in our project" },
                      { src: proto_img, alt: "Campus delivery test", caption: "Construction of our prototype" },
                      //{ src: accomplishment3, alt: "Community outreach event", caption: "Sharing our work with students" },
                      //{ src: communityImage, alt: "Community impact", caption: "Partnering to improve food access" },
                    ].map((item, index) => (
                    <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3">
                        <figure className="overflow-hidden rounded-xl shadow-medium bg-muted/10">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-[360px] object-cover hover:scale-[1.02] transition-transform duration-500"
                          />
                        <figcaption className="text-sm font-semibold tracking-tight text-foreground p-3 text-center">
                            {item.caption}
                          </figcaption>
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                <CarouselPrevious className="hidden md:flex h-12 w-12 scale-[1.1] transition duration-300 hover:scale-125 hover:ring-2 hover:ring-primary/60 hover:ring-offset-2 hover:ring-offset-background" />
                <CarouselNext className="hidden md:flex h-12 w-12 scale-[1.1] transition duration-300 hover:scale-125 hover:ring-2 hover:ring-primary/60 hover:ring-offset-2 hover:ring-offset-background" />
                </Carousel>
              </CardContent>
            </Card>
          </section>

          {/* Support Our Mission - Distinct Donation CTAs */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold">Support Our Mission</h3>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Your gift fuels engineering, outreach, and the delivery of dignity on campus
              </p>
            </div>

            <div className="space-y-8">
              {/* 1) Gradient glow CTA banner */}
              <Card className="relative shadow-large overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl" />
                <div className="absolute inset-0 rounded-xl pointer-events-none border border-primary/30" />
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-3">Help PantryBot reach more students</div>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Every contribution powers parts, testing, and safe delivery pilots</p>
                  <Link to="/donate">
                    <Button size="lg" className="px-8 text-lg shadow-md hover:shadow-primary/40">
                      <Heart className="h-5 w-5 mr-2" /> Donate Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* 2a) Donation goal meter - energetic */}
              <Card className="shadow-medium bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold">Donation Goal (Energetic)</div>
                      <div className="text-sm text-muted-foreground">${raisedAmount.toLocaleString()} of ${donationGoal.toLocaleString()}</div>
                    </div>
                    <Link to="/donate">
                      <Button className="group">
                        <Sparkles className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Boost the Mission
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-background overflow-hidden">
                    <div className="h-full bg-primary relative" style={{ width: `${raisedPct}%` }}>
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] animate-[pulse_2s_ease_infinite]" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{raisedPct}% to $ {donationGoal.toLocaleString()}</div>
                </CardContent>
              </Card>
              
            </div>
          </section>

          {/* Organization Chart Visual */}
  
        </section>
      </div>
    </div>
  );
};

export default OurStory;