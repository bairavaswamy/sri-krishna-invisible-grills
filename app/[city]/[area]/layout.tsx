import type { ReactNode } from "react";
import { getManualServicePaths } from "../../content/manualPageRegistry";

type AreaLayoutProps = {
  children: ReactNode;
};

export const dynamicParams = true;

export default function AreaLayout({ children }: AreaLayoutProps) {
  return children;
}
