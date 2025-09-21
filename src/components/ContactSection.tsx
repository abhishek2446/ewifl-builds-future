import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectDetails: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and quote
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-32"
                    placeholder="Please describe your project, including type of work needed, timeline, and any specific requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-5 w-5" />
                  Send Quote Request
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) EWIFL-00</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@ewifl.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Service Area</h4>
                      <p className="text-muted-foreground">All of Florida</p>
                      <p className="text-sm text-muted-foreground">Miami, Orlando, Tampa, Jacksonville & more</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Our Location
                </h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Florida Statewide Service</p>
                    <p className="text-sm text-muted-foreground">Click to view service areas</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-destructive/5 border-2 border-destructive/20 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  24/7 Emergency Service
                </h4>
                <p className="text-muted-foreground mb-4">
                  Need urgent construction repairs? We offer emergency services for critical issues.
                </p>
                <Button variant="destructive" className="w-full">
                  Call Emergency Line: (555) 911-EWIFL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;