import type { ManualServicePage } from "./types";
import { createManualServicePageFromEntry } from "./manualCopy";
import { manualServiceAreaEntries } from "./service-areas";
import { applyManualServicePageVisuals } from "./serviceVisuals";

export const manualServicePages: ManualServicePage[] = manualServiceAreaEntries
  .map(createManualServicePageFromEntry)
  .map(applyManualServicePageVisuals);

export type { ManualServicePage };
