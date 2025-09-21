import { Building, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Exterior Walls",
    "Interior Finishes", 
    "Painting & Waterproofing",
    "Renovation & Repairs",
    "Emergency Services",
    "Free Consultations"
  ];

  const serviceAreas = [
    "Miami",
    "Orlando", 
    "Tampa",
    "Jacksonville",
    "Fort Lauderdale",
    "Gainesville"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">EWIFL</h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Florida's trusted construction company specializing in exterior walls, interior finishes, and comprehensive renovation solutions for over 10 years.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-accent transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/80 hover:text-background transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <span className="text-background/80">
                    {area}, FL
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <a href="tel:+1-555-EWIFL-00" className="text-background/80 hover:text-background transition-colors duration-200">
                  +1 (555) EWIFL-00
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <a href="mailto:info@ewifl.com" className="text-background/80 hover:text-background transition-colors duration-200">
                  info@ewifl.com
                </a>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <div className="text-background/80">
                  <p>Statewide Service</p>
                  <p>Florida, USA</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-accent">Business Hours</h5>
              <div className="text-sm text-background/80 space-y-1">
                <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                <p>Sat: 8:00 AM - 4:00 PM</p>
                <p>Sun: Emergency calls only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} EWIFL - Exterior Walls Inc. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="mt-6 text-center">
            <p className="text-background/60 text-sm">
              Licensed & Insured | FL License #CBC1234567 | Certified Construction Professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;