import { chennaiManualServiceAreaEntries } from "./chennai-manual-service-areas";
import type { ManualServiceAreaEntry } from "../types";
import { isActiveManualServiceSlug, refreshManualServiceAreaEntry } from "../manualCopy";

export const manualServiceAreaEntries: ManualServiceAreaEntry[] =
  chennaiManualServiceAreaEntries
    .filter((entry) => isActiveManualServiceSlug(entry.serviceSlug))
    .map(refreshManualServiceAreaEntry);
