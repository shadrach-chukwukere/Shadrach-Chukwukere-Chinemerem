/// <reference types="vite/client" />

declare module "*.webp";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.png";
declare module "*.avif";

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
