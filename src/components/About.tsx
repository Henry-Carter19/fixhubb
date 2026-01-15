import { CheckCircle2, Users, Award, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate' },
];

const features = [
  'Certified and trained professionals',
  'Eco-friendly cleaning solutions',
  'Same-day service available',
  'Affordable pricing plans',
  'Insurance covered services',
  'Post-cleaning quality check',
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-6">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-90" />
                        <div className="text-xl sm:text-2xl lg:text-3xl font-display font-bold">{stat.value}</div>
                        <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
              About Us
            </span>
            <h2 className="section-title text-left mb-4">
              Your Trusted Partner for Clean Water
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              With over 15 years of experience, we've established ourselves as the 
              leading water tank cleaning service. Our commitment to quality and 
              customer satisfaction has made us the preferred choice for thousands 
              of households.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
