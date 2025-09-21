import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Miami, FL",
      rating: 5,
      text: "EWIFL transformed our home's exterior completely. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
      project: "Exterior Wall Renovation"
    },
    {
      name: "Michael Chen",
      role: "Property Manager",
      location: "Orlando, FL",
      rating: 5,
      text: "We've worked with EWIFL on multiple commercial properties. Their quality of work is consistently outstanding, and their team is reliable and professional.",
      project: "Commercial Interior Finishes"
    },
    {
      name: "Jessica Martinez",
      role: "Restaurant Owner",
      location: "Tampa, FL",
      rating: 5,
      text: "The renovation of our restaurant was handled flawlessly. EWIFL worked around our business hours and delivered a stunning result that our customers love.",
      project: "Complete Restaurant Renovation"
    },
    {
      name: "David Thompson",
      role: "Facility Director",
      location: "Jacksonville, FL",
      rating: 5,
      text: "EWIFL's waterproofing work saved our building from potential water damage. Their expertise in coastal construction is unmatched in Florida.",
      project: "Waterproofing & Painting"
    },
    {
      name: "Amanda Rodriguez",
      role: "Homeowner",
      location: "Fort Lauderdale, FL",
      rating: 5,
      text: "From initial consultation to project completion, EWIFL provided excellent communication and superior craftsmanship. Highly recommended!",
      project: "Interior Finishing"
    },
    {
      name: "Robert Kim",
      role: "Business Owner",
      location: "Gainesville, FL",
      rating: 5,
      text: "The team at EWIFL is professional, punctual, and produces high-quality work. They've become our go-to contractor for all construction needs.",
      project: "Office Renovation"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-accent fill-accent" : "text-border"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Florida
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;