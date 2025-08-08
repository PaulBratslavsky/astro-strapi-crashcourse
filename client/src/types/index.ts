export type TImage = {
  id: number;
  documentId: string;
  alternativeText: string | null;
  url: string;
};

export type TLink = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  type: string | null;
};

export type TLogoLink = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TImage;
};

export type TSocialLink = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TImage;
};

export type TBanner = {
  id: number;
  isVisible: boolean;
  description: string;
  link: TLink;
};

export type THeader = {
  id: number;
  logo: TLogoLink;
  navItems: TLink[];
  cta: TLink;
};

export type TFooter = {
  id: number;
  text: string;
  logo: TLogoLink;
  navItems: TLink[];
  socialLinks: TSocialLink[];
};
