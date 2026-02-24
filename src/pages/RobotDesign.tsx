import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, RotateCcw, ZoomIn, Download, Info, Cpu, Wrench, Zap, Package } from "lucide-react";
import { Canvas, useLoader, useFrame} from '@react-three/fiber'
import { useGLTF, OrbitControls} from '@react-three/drei'
import { STLLoader } from 'three-stdlib';
import { MeshStandardMaterial } from 'three';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import * as THREE from 'three';

import { Mesh } from "three";


import mdriver_img from "@/assets/motorD_circuit.jpg";
import chassis_img from "@/assets/prototype.webp";




const RobotDesign = () => {



   const BotModel = ({ url }: { url: string }) => {
    const { scene } = useGLTF(url);

    scene.traverse((child) => {
    if (child.isMesh && child) {
      child.material.color.set('gray') // or new THREE.Color('#ff0000')
    }
    })

    return <primitive object={scene} scale={0.05} />;
  };


  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">Robot Design & Technical Specifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our autonomous delivery robot design, CAD models, and complete parts list
          </p>
        </div>

        {/* Interactive 3D Viewer Placeholder */}
        <section className="mb-16">
          <Card className="shadow-medium overflow-hidden">
            <CardHeader className="bg-gradient-warm">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Box className="h-6 w-6 text-primary" />
                  Interactive 3D CAD Model
                </CardTitle>
         
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted/30 flex items-center justify-center border-t border-b border-border relative">
                <div className="text-center p-8">
                  <Box className="h-24 w-24 mx-auto mb-6 text-muted-foreground/50" />
                  <p className="text-lg font-semibold text-muted-foreground mb-2">
                    Dynamic 3D CAD Model Viewer
                  </p>
                   <div className="canvas-container">
              <Canvas 
              camera={{ position: [0, 0, 5] }}
              style={{width: '500px', height: '500px'}}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 5]} intensity={3} />
                <BotModel url="/3D_images/ruhart_frame.glb" />
                <OrbitControls 

                maxPolarAngle={Math.PI / 2}/>
                
              </Canvas>
            </div>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                    Interactive 3D model 
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button variant="outline" size="sm" disabled>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Rotate
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ZoomIn className="mr-2 h-4 w-4" />
                      Zoom
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <Info className="mr-2 h-4 w-4" />
                      Component Info
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Model Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Design Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Chassis & Drivetrain</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Specifications based on finalized drivetrain design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Four-wheel drive system for campus terrain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Weather-resistant enclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Modular component design for easy maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/*  design pic stuff  */}
            <Card className="shadow-medium">
                          <CardContent className="pt-6 pb-8">
                            <Carousel className="relative">
                              <CarouselContent>
                                {[
                                  { src:mdriver_img, altinstall: "Motor Driver Circuit", caption: "Motor Driver Circuit" },
                                  { src:chassis_img, alt: "Motor Driver Circuit", caption: "Chassis Design" },

                                  
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

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Payload System</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Temperature-controlled storage compartment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Secure locking mechanism for privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Multiple compartments for various items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Food-safe interior materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Navigation Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>LIDAR sensor array for obstacle detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>GPS module for campus navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Multiple cameras for environment perception</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Autonomous path planning capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Electronics & Power</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>High-capacity battery system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Redundant safety systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time telemetry and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Emergency stop capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Evolution */}
        <section className="mb-16">
          <Card className="shadow-medium bg-gradient-warm border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Design Evolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our robot design is continuously refined based on testing feedback and 
                technical requirements. The final CAD model will reflect our optimized 
                design following comprehensive testing phases.
              </p>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h4 className="font-semibold mb-3">Key Design Considerations:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Campus terrain navigation capability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Food safety and temperature control</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Weather resistance and durability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">User-friendly interface for recipients</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Safety systems and fail-safes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span className="text-muted-foreground">Scalable and maintainable design</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Parts List Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Parts List</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based on RU HART Electrical and Mechanical Parts Lists, finalized according to our selected chassis and drivetrain specifications.
            </p>
          </div>

          <Card className="mb-12 shadow-medium bg-gradient-warm border-0">
            <CardContent className="pt-8 pb-8">
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Our parts list is based on the RU HART Electrical and Mechanical Parts Lists, 
                finalized according to our selected chassis and drivetrain specifications.
              </p>
            </CardContent>
          </Card>

          {/* Parts Categories */}
          <div className="space-y-8">
            {/* Mechanical Parts */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Mechanical Components</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Chassis, drivetrain, and structural elements
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border text-center">
                  <Package className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-semibold text-muted-foreground mb-2">
                    [Mechanical Parts List]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Complete list based on finalized chassis and drivetrain design
                  </p>
                  <div className="mt-4 text-sm text-left max-w-md mx-auto space-y-1">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Frame components</span>
                      <Badge variant="outline">IXGNIJ 4PCS T Slot 4040 Aluminum Extrusion</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Wheel assemblies</span>
                      <Badge variant="outline">L-faster 6X2 Inflation Tire Wheel</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Drive motors</span>
                      <Badge variant="outline"> Metal Gearmotor 37Dx52L mm 12V (Helical Pinion)</Badge>
                    </div>
                   
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Fasteners & hardware</span>
                      <Badge variant="outline">4040 Corner Bracket Joint</Badge>
                      <Badge variant="outline">Pololu Aluminum Scooter Wheel Adapter</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Electrical Parts */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Electrical Components</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Power systems, controllers, and wiring
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border text-center">
                  <Zap className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-semibold text-muted-foreground mb-2">
                    [Electrical Parts List]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Based on RU HART Electrical Parts List standards
                  </p>
                  <div className="mt-4 text-sm text-left max-w-md mx-auto space-y-1">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Battery system</span>
                      <Badge variant="outline">MIGHTY MAX 12-Volt 100Ah SLA Battery</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Motor controllers</span>
                      <Badge variant="outline">BTS7960 43A High Power Motor Driver</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Power distribution</span>
                      <Badge variant="outline">Custom Made Power Distribution Board</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Voltage Converter</span>
                      <Badge variant="outline"> XL6009 Buck Boost Power Module </Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Microcontrollers</span>
                      <Badge variant="outline"> CP2102 ESP-32</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Electronics & Sensors */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Electronics & Sensors</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Computing, navigation, and sensor systems
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border text-center">
                  <Cpu className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-semibold text-muted-foreground mb-2">
                    [Electronics & Sensors List]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Navigation and control electronics specifications
                  </p>
                  <div className="mt-4 text-sm text-left max-w-md mx-auto space-y-1">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Main computer</span>
                      <Badge variant="outline">Orange Pi 5 16GB Rockchip RK3588S</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• LIDAR sensors</span>
                      <Badge variant="outline">YouYeeToo LD20 Lidar</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• Camera modules</span>
                      <Badge variant="outline">Intel RealSense D435i</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• GPS module</span>
                      <Badge variant="outline">Tracfone Motorola Moto g Play 2024</Badge>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">• IMU sensors</span>
                      <Badge variant="outline">BNO085 Adafruit 9-DOF Orientation IMU</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download Section */}
        <section>
          <Card className="shadow-medium bg-gradient-navy border-0">
            <CardContent className="pt-8 pb-8 text-secondary-foreground">
              <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
                <Download className="h-6 w-6" />
                Download Technical Documents
              </h2>
              <p className="text-center opacity-90 max-w-2xl mx-auto mb-6">
                Complete parts list and CAD files will be available once we finalize the chassis and 
                drivetrain design. Downloads will include detailed specifications, quantities, 
                part numbers, supplier information, and technical drawings.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="/3D_Images/RU HART PantryBot v3.stl" download="Robot File" className="download-btn">
                <Button variant="outline" size="lg" className="bg-background/10 hover:bg-background/20" >
                  <Download className="mr-2 h-4 w-4" />
                  Download CAD Files 
                </Button>
                </a>

                <Button variant="outline" size="lg" className="bg-background/10 hover:bg-background/20" >
                  <Download className="mr-2 h-4 w-4" />
                  Download Parts List 
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default RobotDesign;
