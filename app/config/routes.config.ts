import { chennaiConfig } from "./chennai.config";

export const cityPath = () => `/${chennaiConfig.citySlug}`;

export const servicePath = (serviceSlug: string) =>
  `/${chennaiConfig.citySlug}/${serviceSlug}`;

export const areaPath = (areaSlug: string) =>
  `/${chennaiConfig.citySlug}/${areaSlug}`;

export const serviceAreaPath = (serviceSlug: string, areaSlug: string) =>
  `/${chennaiConfig.citySlug}/${serviceSlug}/${areaSlug}`;
