import type { ReactNode } from "react";
import { getManualServicePaths } from "../../../content/manualPageRegistry";

type ServiceLayoutProps = {
  children: ReactNode;
};

export const dynamicParams = true;

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return children;
}
