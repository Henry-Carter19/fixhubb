import { Droplets, Trash2, Bug, Sparkles, ShieldCheck, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Droplets,
    title: 'Water Tank Cleaning',
    description: 'Professional cleaning of overhead and plastic water tanks in Nagpur to remove dirt, algae, and impurities.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: Bug,
    title: 'Anti-Bacterial Disinfection',
    description: 'Safe disinfection process to reduce bacteria and improve overall water hygiene.',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: Trash2,
    title: 'Sludge & Sediment Removal',
    description: 'Removal of settled sludge, mud, and deposits from the bottom of water tanks.',
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Hygiene Treatment',
    description: 'Hygienic treatment using potable-water-safe methods to improve water safety.',
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    icon: Sparkles,
    title: 'Deep Tank Cleaning',
    description: 'High-pressure washing and manual scrubbing of tank walls for thorough internal cleaning.',
    color: 'bg-cyan-500/10 text-cyan-600',
  },
  {
    icon: Wrench,
    title: 'Basic Tank Maintenance',
    description: 'Preventive maintenance to help keep your water tank clean between scheduled cleanings.',
    color: 'bg-rose-500/10 text-rose-600',
  },
];


const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            Water Tank Cleaning Services
          </span>
          <h2 className="section-title">
            Professional Water Tank Cleaning Services in Nagpur
          </h2>
          <p className="section-subtitle">
            Reliable water tank cleaning services in Nagpur focused on hygiene, safety,
            and clean water for homes and residential buildings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-hover bg-card border-0 shadow-soft group cursor-pointer"
            >
              <CardContent className="p-5 sm:p-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-display font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
