import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Building the Future of
            <span className="text-accent block mt-2">Walls & Interiors</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional construction services in Florida with over 10 years of experience. 
            Quality, reliability, and safety in every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-4 text-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-accent mb-2" />
              <h3 className="font-semibold text-lg">Licensed & Insured</h3>
              <p className="text-white/80 text-sm">Fully certified contractors</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-accent mb-2" />
              <h3 className="font-semibold text-lg">10+ Years Experience</h3>
              <p className="text-white/80 text-sm">Proven track record</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-accent mb-2" />
              <h3 className="font-semibold text-lg">500+ Projects</h3>
              <p className="text-white/80 text-sm">Satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;