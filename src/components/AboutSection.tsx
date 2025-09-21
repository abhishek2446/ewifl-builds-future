import { CheckCircle, Target, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality, using only the best materials and proven techniques."
    },
    {
      icon: Shield,
      title: "Safety Priority",
      description: "All our projects follow strict safety protocols to protect our team and your property."
    },
    {
      icon: CheckCircle,
      title: "Reliable Service",
      description: "On-time delivery and clear communication throughout every project phase."
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description: "We respect your schedule and deliver projects within agreed timelines."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">EWIFL</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building excellence in Florida's construction industry for over a decade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Your Trusted Construction Partner
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in Florida with a vision to transform spaces through exceptional construction services, 
                EWIFL has grown into one of the region's most trusted construction companies. We specialize in 
                exterior walls, interior finishes, and comprehensive renovation solutions.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of skilled professionals brings together decades of combined experience, ensuring 
                every project meets the highest standards of quality, safety, and craftsmanship. From 
                residential homes to commercial buildings, we deliver results that exceed expectations.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Values */}
            <div className="space-y-6 animate-slide-up">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border hover-lift">
                  <div className="flex-shrink-0">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;