import { getAllServiceAreaPaths } from "../content/serviceAreaCatalog";
import { chennaiConfig } from "./chennai.config";

export type CityStaticParam = {
  city: string;
};

export type CityChildStaticParam = CityStaticParam & {
  area: string;
};

export type ServiceAreaStaticParam = CityChildStaticParam & {
  service: string;
};

export function getCityStaticParams(): CityStaticParam[] {
  return [{ city: chennaiConfig.citySlug }];
}

export function getCityChildStaticParams(): CityChildStaticParam[] {
  return [
    ...chennaiConfig.areas.map((area) => ({
      city: chennaiConfig.citySlug,
      area: area.slug,
    })),
    ...chennaiConfig.services.map((service) => ({
      city: chennaiConfig.citySlug,
      area: service.slug,
    })),
  ];
}

export function getServiceAreaStaticParams(): ServiceAreaStaticParam[] {
  return getAllServiceAreaPaths().map((path) => ({
    city: path.city,
    // The segment names are [area]/[service], but the public route is /chennai/[service]/[area].
    area: path.service,
    service: path.area,
  }));
}
