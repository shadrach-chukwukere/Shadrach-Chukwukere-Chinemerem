export const generalYellow = "#EA7527";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function getDeviceOS(): "Android" | "IOS" | "Other" {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("android")) return "Android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "IOS";
  return "Other";
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export const baseURL = "https://api.shadrachs.app";
export const baseWebURL = "https://www.shadrachs.app";

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(name);
};
export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0;
};
export const isValidEnquiryType = (type: string): boolean => {
  const validTypes = ["app", "general"];
  return validTypes.includes(type) || type.trim().length > 0;
};

export const mail = "shadrachchukwukerechinemerem@gmail.com";
export const phone = "+2349038030895";
export const mail2 = "chispecialshadrach@gmail.com";
export const beekleandroid =
  "https://play.google.com/store/apps/details?id=io.beekle";
export const beekleios =
  "https://apps.apple.com/sn/app/beekle-utilities-gift-cards/id6478985552";

export const githubProfile = {
  username: "shadrach-chukwukere",
  url: "https://github.com/shadrach-chukwukere",
};
export const npmProfile = {
  usename: "~chispecial",
  url: "https://www.npmjs.com/~chispecial",
};

export const linkendinProfile = {
  username: "shadrach-chukwukere",
  url: "https://www.linkedin.com/in/shadrach-chukwukere-632290373/",
};

export const xProfile = {
  username: "Shadrach chukwukere",
  url: "https://x.com/ShadrachCh75389",
};

export const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" });
