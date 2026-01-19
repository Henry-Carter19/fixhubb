import { CheckCircle2, Users, Award, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'Tanks Cleaned' },
  { icon: Award, value: '4-Step', label: 'Cleaning Process' },
  { icon: ThumbsUp, value: '30 Min', label: 'Cleaning Duration' },
];


const features = [
  'Safe and hygienic tank cleaning',
  'Potable-water-safe disinfectants',
  'Transparent and affordable pricing',
  'Professional cleaning equipment',
  'Detailed cleaning and rinsing',
  'Clean and safe water for homes',
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
              About Fixhubb
            </span>
            <h2 className="section-title text-left mb-4">
              Reliable Water Tank Cleaning Service in Nagpur
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Fixhubb is a Nagpur-based water tank cleaning service focused on providing
              clean, safe, and hygienic water for residential homes. We follow a
              systematic cleaning and disinfection process using professional equipment
              and safe methods to improve overall water quality.
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
