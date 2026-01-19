import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Local Homeowner',
    role: 'Residential Customer, Nagpur',
    content: 'The service was neat and professional. The tank was cleaned properly and the process was explained clearly.',
    rating: 5,
  },
  {
    name: 'Apartment Resident',
    role: 'Home User',
    content: 'Good experience overall. The team arrived on time and completed the cleaning as discussed.',
    rating: 5,
  },
  {
    name: 'Family Customer',
    role: 'Household User',
    content: 'Satisfied with the cleaning work. The tank looked clean and there was no strong chemical smell.',
    rating: 5,
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            Customer Feedback
          </span>
          <h2 className="section-title">
            What Customers Say About Fixhubb
          </h2>
          <p className="section-subtitle">
            Feedback from customers who have used our water tank cleaning service in Nagpur.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-hover bg-card border-0 shadow-soft"
            >
              <CardContent className="p-5 sm:p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                
                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
