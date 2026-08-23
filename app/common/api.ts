import { apiClient } from "#/lib";
import { ENDPOINTS } from "./endpoint";
import type { ContentData } from "./interface";

export const getHomepageData = async () => {
  return apiClient
    .get<ContentData>(ENDPOINTS.HOMEPAGE.COLLECTION("homepage"))
    .then((res) => res.MetaData.homepage);
};
export const getLoginPageData = async () => {
  return apiClient
    .get<ContentData>(ENDPOINTS.HOMEPAGE.COLLECTION("login"))
    .then((res) => res.MetaData.loginpage);
};
export const getRegisterPageData = async () => {
  return apiClient
    .get<ContentData>(ENDPOINTS.HOMEPAGE.COLLECTION("register"))
    .then((res) => res.MetaData.signupage);
};
export const getForgotPasswordPageData = async () => {
  return apiClient
    .get<ContentData>(ENDPOINTS.HOMEPAGE.COLLECTION("forgot-password"))
    .then((res) => res.MetaData.forgotpage);
};
export const getStudioPageData = async () => {
  return apiClient
    .get<ContentData>(ENDPOINTS.HOMEPAGE.COLLECTION("studio"))
    .then((res) => res.MetaData.studiopage);
};
