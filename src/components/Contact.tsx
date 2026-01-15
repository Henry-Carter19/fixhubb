import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';


const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@watertankcleaning.com',
    link: 'mailto:contact@watertankcleaning.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Water Tank Street, Mumbai 400001',
    link: '#',
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      if (!validatePhone(cleanedPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number';
      } else {
        // Update form data with cleaned phone number
        setFormData(prev => ({ ...prev, phone: cleanedPhone }));
      }
    }

    // Email validation (only if provided)
    if (formData.email.trim() && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Please provide a complete address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clean phone input - allow only numbers
    if (name === 'phone') {
      const cleanedValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast({
      title: 'Request Submitted Successfully!',
      description: 'Our team will contact you within 30 minutes.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    });

  } catch (error) {
    console.error('EmailJS Error:', error);

    toast({
      title: 'Submission Failed',
      description: 'Please try again or contact us directly.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
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

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Why Choose Us?
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Same day service available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Certified professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-5 sm:p-6 lg:p-8 shadow-soft border border-border">
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-10 text-sm"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">
                    Mobile Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your 10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-10 text-sm"
                    maxLength={10}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-10 text-sm"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm">
                  Complete Address *
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete address with landmark"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="min-h-[80px] text-sm resize-none"
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "address-error" : undefined}
                />
                {errors.address && (
                  <p id="address-error" className="text-xs text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="text-xs text-muted-foreground">
                <p>* Required fields</p>
                <p className="mt-1">We guarantee a response within 30 minutes during business hours</p>
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Privacy Notice */}
            <div className="mt-6 p-3 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. We never share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;