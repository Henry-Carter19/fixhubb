import { Phone, ClipboardCheck, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Book Service',
    description: 'Contact us by phone or WhatsApp to schedule your water tank cleaning.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'Tank Check',
    description: 'We check the tank condition and prepare it for the cleaning process.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Tank Cleaning',
    description: 'High-pressure cleaning, scrubbing, and safe disinfection of the tank.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Final Rinse',
    description: 'Thorough final rinse and visual check before refilling the tank.',
  },
];


const Process = () => {
  return (
    <section id="process" className="section-padding bg-primary text-primary-foreground">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-foreground/20 text-primary-foreground rounded-full mb-3">
            Our Cleaning Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3">
            Our Water Tank Cleaning Process
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto">
            A simple and reliable process for professional water tank cleaning in Nagpur.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
              )}
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              {/* Step number */}
              <span className="text-xs font-medium text-primary-foreground/60 mb-1 block">
                Step {item.step}
              </span>
              
              {/* Content */}
              <h3 className="text-base sm:text-lg font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
