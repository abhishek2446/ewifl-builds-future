import { Building, Palette, Droplets, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Exterior Walls",
      description: "Professional exterior wall installation, repair, and maintenance using premium materials and modern techniques.",
      features: ["Siding Installation", "Stucco Work", "Brick & Stone", "Insulation Systems"],
      color: "bg-primary"
    },
    {
      icon: Palette,
      title: "Interior Finishes",
      description: "Transform your interior spaces with expert finishing work that combines functionality with aesthetic appeal.",
      features: ["Drywall Installation", "Ceiling Work", "Trim & Molding", "Texture Application"],
      color: "bg-accent"
    },
    {
      icon: Droplets,
      title: "Painting & Waterproofing",
      description: "Comprehensive painting services and waterproofing solutions to protect and beautify your property.",
      features: ["Interior Painting", "Exterior Painting", "Waterproof Coatings", "Pressure Washing"],
      color: "bg-primary"
    },
    {
      icon: Wrench,
      title: "Renovation & Repairs",
      description: "Complete renovation services and expert repairs to restore and upgrade your existing structures.",
      features: ["Home Renovations", "Structural Repairs", "Damage Restoration", "Maintenance Services"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-card border border-border rounded-xl p-8 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Service CTA */}
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. Contact us to discuss your specific requirements and get a personalized quote for your construction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;