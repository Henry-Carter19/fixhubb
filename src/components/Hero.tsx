import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, text: 'Certified Experts' },
    { icon: Clock, text: '24/7 Service' },
    { icon: Award, text: '10+ Years Experience' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] sm:min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Professional Tank Cleaning Services
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Crystal Clear Water,{' '}
              <span className="text-primary">Healthy Life</span>
            </h1>
            
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6">
              Expert water tank cleaning services to ensure your family gets the purest, 
              safest water. Trusted by 10,000+ households.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="btn-primary group text-sm"
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                className="btn-outline text-sm"
              >
                View Services
              </Button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-up delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center text-primary-foreground">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">Pure Water Guaranteed</h3>
                  <p className="text-sm opacity-90">100% satisfaction or your money back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
