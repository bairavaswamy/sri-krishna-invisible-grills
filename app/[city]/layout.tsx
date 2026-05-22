import type { ReactNode } from "react";
import { getManualServicePaths } from "../content/manualPageRegistry";

type CityLayoutProps = {
  children: ReactNode;
};

export const dynamicParams = true;

export default function CityLayout({ children }: CityLayoutProps) {
  return children;
}
