import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Miami Commercial Plaza",
      category: "Exterior Walls",
      location: "Miami, FL",
      year: "2024",
      description: "Complete exterior wall renovation for a 5-story commercial building including modern siding installation and waterproofing.",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      results: ["40% improved insulation", "Modern aesthetic upgrade", "Enhanced weather resistance"]
    },
    {
      title: "Orlando Residential Complex",
      category: "Interior Finishes",
      location: "Orlando, FL",
      year: "2024",
      description: "Interior finishing work for a luxury residential complex including drywall, painting, and premium trim installation.",
      beforeImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      results: ["Premium finish quality", "Timely completion", "Client satisfaction: 100%"]
    },
    {
      title: "Tampa Bay Office Renovation",
      category: "Complete Renovation",
      location: "Tampa, FL",
      year: "2023",
      description: "Full office space renovation including structural modifications, new wall systems, and modern interior finishes.",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      results: ["Space optimization", "Modern work environment", "LEED certification achieved"]
    },
    {
      title: "Jacksonville Waterfront Home",
      category: "Painting & Waterproofing",
      location: "Jacksonville, FL",
      year: "2023",
      description: "Comprehensive exterior painting and waterproofing project for a waterfront property with special coastal considerations.",
      beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop",
      results: ["Hurricane-resistant coating", "5-year warranty", "Enhanced curb appeal"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our portfolio of successful construction projects across Florida
            </p>
          </div>

          {/* Project Showcase */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden animate-slide-up">
            {/* Project Images - Before & After */}
            <div className="grid md:grid-cols-2">
              {/* Before Image */}
              <div className="relative group">
                <img 
                  src={currentProj.beforeImage} 
                  alt={`${currentProj.title} - Before`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-medium">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <img 
                  src={currentProj.afterImage} 
                  alt={`${currentProj.title} - After`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                    AFTER
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Project Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {currentProj.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {currentProj.year}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {currentProj.location}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {currentProj.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {currentProj.description}
                  </p>

                  <Button className="gap-2">
                    View Full Case Study
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Project Results
                  </h4>
                  <ul className="space-y-3">
                    {currentProj.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              View All Projects
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;