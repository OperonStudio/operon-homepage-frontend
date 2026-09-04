import type {
  AnnouncementData,
  FooterData,
} from "./content/homepage-interface";

/** A page whose CMS collection exists but carries no fields yet. */
export type EmptyPageContent = Record<string, never>;

export interface ContentData {
  MetaData: {
    homepage: {
      announcement: AnnouncementData;
      footer: FooterData;
    };
    forgotpage: EmptyPageContent;
    loginpage: EmptyPageContent;
    signupage: EmptyPageContent;
    studiopage: EmptyPageContent;
  };
}

/**
 * The failure shape thrown by `@operonstudio/request`: a normal Error whose
 * `body` is the decoded JSON response, when the server sent one.
 */
export interface ApiError extends Error {
  status?: number;
  body?: { message?: string };
}
