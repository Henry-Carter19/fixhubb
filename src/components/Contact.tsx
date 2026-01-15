import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 234 567 890',
    link: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@aquaclean.com',
    link: 'mailto:info@aquaclean.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Water Street, Clean City',
    link: '#',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
              Contact Us
            </span>
            <h2 className="section-title text-left mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Ready to experience clean, safe water? Reach out to us for a free 
              consultation and quote. We're here to help!
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.title}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-5 sm:p-6 lg:p-8 shadow-soft border border-border">
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-10 text-sm"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-10 text-sm"
                  />
                </div>
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-10 text-sm"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[100px] text-sm resize-none"
                />
              </div>
              <Button type="submit" className="w-full btn-primary group">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
