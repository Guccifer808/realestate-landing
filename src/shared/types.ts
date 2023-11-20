export enum SelectedPage {
  Home = "Home",
  Advantages = "advantages",
  About = "about",
  Services = "services",
  Contacts = "contact",
  Footer = "footer",
  Objects = "objects",
  Lifestyle = "lifestyle",
  Files = "files",
}

export interface AdvantagesType {
  image: { [key: string]: string };
  title: string;
  action: string;
}
export interface ServicesType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FaqType {
  title: string;
  description: string;
}

export interface PricingItem {
  service: string;
  price: string | JSX.Element;
}
export type PricingData = PricingItem[];
export interface FeaturesType {
  image: { [key: string]: string };
  title?: any;
  action?: string;
  path?: any;
}
