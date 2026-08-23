import type { AnnouncementData, FooterData } from "./content/homepage-interface";

export interface ContentData {
  MetaData: {
    homepage: {
      announcement: AnnouncementData;
      footer: FooterData;
    };
    forgotpage: {};
    loginpage: {};
    signupage: {};
    studiopage: {};
  };
}
