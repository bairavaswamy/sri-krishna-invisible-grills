import { siteConfig } from "../../config/site.config";

export const socialProfiles = siteConfig.socialProfiles;
export const socialProfileUrls = socialProfiles.map((profile) => profile.href);
