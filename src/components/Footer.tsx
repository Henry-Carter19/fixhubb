import { Droplets, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Tank Cleaning',
    'Anti-Bacterial Treatment',
    'Sludge Removal',
    'UV Treatment',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-section py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-lg">AquaClean</span>
            </div>
            <p className="text-xs sm:text-sm text-background/70 mb-4 max-w-xs">
              Professional water tank cleaning services ensuring clean and safe water for your family.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label="Social link"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-xs sm:text-sm text-background/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-xs sm:text-sm text-background/70">
              <p>+1 234 567 890</p>
              <p>info@aquaclean.com</p>
              <p>123 Water Street<br />Clean City, CC 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <p>&copy; {currentYear} AquaClean. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
