import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";
import ruhart_img from "@/assets/ruhart_image.png";


const Footer = () => {
  return (
    <footer className="border-t border-border bg-gradient-warm mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
          <img
            src={ruhart_img}
            alt="RU HART Logo"
            className="h-20 w-20 object-contain"
          />

            </div>
            <p className="text-sm text-muted-foreground">
              Helping Autonomous Robotics Technology combat food insecurity in our community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</Link></li>
              <li><Link to="/workshops" className="text-muted-foreground hover:text-primary transition-colors">Workshops</Link></li>
              <li><Link to="/apply" className="text-muted-foreground hover:text-primary transition-colors">Apply</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Events & Raffles</Link></li>
              <li><Link to="/robot-design" className="text-muted-foreground hover:text-primary transition-colors">View CAD Model</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Rutgers University<br />New Brunswick, NJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>rutgershart@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RU HART. All rights reserved. In partnership with the Rutgers Food Pantry.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
