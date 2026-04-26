import type { Metadata } from "next";
import {
  generateHyderabadCityServiceMetadata,
  HyderabadCityServicePage,
} from "../_shared/HyderabadCityServicePage";

const serviceSlug = "bird-spikes-installation";

export async function generateMetadata(): Promise<Metadata> {
  return generateHyderabadCityServiceMetadata(serviceSlug);
}

export default function Page() {
  return <HyderabadCityServicePage serviceSlug={serviceSlug} />;
}
