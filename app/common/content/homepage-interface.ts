export interface AnnouncementData {
  badge: {
    show: boolean;
    content: string;
  };
  message: {
    show: boolean;
    content: string;
  };
  link: {
    label: string;
    to: string;
  };
  show: boolean;
}
interface FooterLink {
  label: string;
  to: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  show: boolean;
  columns: FooterColumn[];
  legalLinks: FooterLink[];
  title: string;
}
