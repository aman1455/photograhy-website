export interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export interface Package {
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  location?: string;
}
