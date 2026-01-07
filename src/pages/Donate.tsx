import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, Award, Star, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import team_img from "@/assets/team_pic.png";

//import GoFundMe from "../hooks/goFundMe";
const Donate = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  // Placeholder values - will be synced with GoFundMe
  const goalAmount = 50000;
  const currentAmount = 5;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const donationTiers = [
    { amount: 25, label: "Supporter", icon: Heart },
    { amount: 50, label: "Advocate", icon: Star },
    { amount: 100, label: "Champion", icon: Award },
    { amount: 250, label: "Hero", icon: Trophy },
  ];





  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Support RU HART</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation directly funds the development of life-changing technology 
            for students facing food insecurity. 
          </p>
        </div>
        
        {/* Progress Section */}
        <Card className="mb-12 shadow-medium">
          <CardContent className="pt-8">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h2 className="text-2xl font-bold">Campaign Progress</h2>
         


       
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    ${currentAmount.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    of ${goalAmount.toLocaleString()} goal
                  </div>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-4" />
              {/*<p className="text-sm text-muted-foreground text-center">
                Progress bar synced with GoFundMe campaign
              </p> */}
            </div>
          </CardContent>
        </Card>

        {/* Donation Form */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                <div>As a close-knit community of passionate, aspiring engineers, we invite you to become part of our family.

 </div>
              </CardHeader>
              <CardContent className="space-y-6">

        
                
               
                {/*  // Quick Select Amounts 
                <div>
                  <Label className="text-base mb-3 block">Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {donationTiers.map((tier) => {
                      const Icon = tier.icon;
                      return (
                        <Button
                          key={tier.amount}
                          variant={selectedAmount === tier.amount ? "default" : "outline"}
                          className="h-auto py-4 flex-col gap-2"
                          onClick={() => {
                            setSelectedAmount(tier.amount);
                            setCustomAmount("");
                          }}
                        >
                          <Icon className="h-5 w-5" />
                          <div className="text-lg font-bold">${tier.amount}</div>
                          <div className="text-xs">{tier.label}</div>
                        </Button>
                      );
                    })}
                  </div>
                </div>
                */}
            
               
             


            
               {/*   // Custom Amount 
                <div>
                  <Label htmlFor="custom-amount" className="text-base mb-2 block">
                    Or Enter Custom Amount
                  </Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="pl-7"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                      />
                    </div>
                  </div>
                </div>
                */}
                


                
                {/*// Payment Integration Placeholder */}
                <div className="border-t pt-6">
                  {/*<p className="text-sm text-muted-foreground mb-4">
                    Payment processing powered by Stripe (industry standard)
                  </p>*/}
                  <a href="https://www.gofundme.com/f/support-ru-bots-autonomous-food-delivery">
                  <Button variant="hero" size="lg" className="w-full" >
                    
                    <Heart className="mr-2" />
                    GoFundMe Link
                  </Button>
                  </a>
                  {/*<p className="text-xs text-center text-muted-foreground mt-3">
                    Stripe integration to be configured
                  </p>*/}
                </div>
              </CardContent>
            </Card>
          </div>
          
          

          {/* Donation Benefits */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Donation Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold flex items-center gap-2 mb-1">
                    <Heart className="h-4 w-4 text-primary" />
                    $25+ Supporter
                  </div>
                  <p className="text-muted-foreground">
                    Thank you message and social media recognition
                  </p>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-primary" />
                    $50+ Advocate
                  </div>
                  <p className="text-muted-foreground">
                    All above + project updates newsletter
                  </p>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-primary" />
                    $100+ Champion
                  </div>
                  <p className="text-muted-foreground">
                    All above + name on our website
                  </p>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2 mb-1">
                    <Trophy className="h-4 w-4 text-primary" />
                    $250+ Hero
                  </div>
                  <p className="text-muted-foreground">
                    All above + name engraved on the robot!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-gradient-warm border-0">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Your Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Every dollar helps us develop technology that will serve students 
                  for years to come. Your support makes a lasting difference!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/*  design pic stuff  */}
                      <Card className="shadow-medium  w-[620px] -mt-64 md:-mt-50">
                                    <CardContent className="pt-6 pb-8">
                                      <Carousel className="relative">
                                        <CarouselContent>
                                          {[
                                            { src:team_img, alt: "Motor Driver Circuit", caption: "" },
                                            
                                           
                                          ].map((item, index) => (
                                          <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3">
                                              <figure className="overflow-hidden rounded-xl shadow-medium bg-muted/10">
                                                <img 
                                                  src={item.src}
                                                  alt={item.alt}
                                                  className="object-over w-full h-[360px] object-cover hover:scale-[1.02] transition-transform duration-500"
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

        {/* Tax Information */}
        <Card className="shadow-soft">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              RU HART is a registered student organization. Tax deductibility information 
              to be confirmed. All donations support the development and deployment of 
              our autonomous food delivery system.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
