export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  title: string;
  descrip: string;
  img: string;
}

export interface InitialValues {
  name: string;
  mail: string;
  message: string;
}
