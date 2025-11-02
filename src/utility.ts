export function getDeviceOS(): "Android" | "IOS" | "Other" {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("android")) return "Android";
  if (/iphone|ipad|ipod/.test(userAgent)) return "IOS";
  return "Other";
}
