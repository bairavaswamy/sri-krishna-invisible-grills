import { chennaiManualServiceAreaEntries } from "./chennai-manual-service-areas";
import { chennaiConfig } from "../../config/chennai.config";
import type { ManualServiceAreaEntry } from "../types";
import { isActiveManualServiceSlug, refreshManualServiceAreaEntry } from "../manualCopy";

const activeChennaiAreaSlugs = new Set<string>(chennaiConfig.areas.map((area) => area.slug));

export const manualServiceAreaEntries: ManualServiceAreaEntry[] =
  chennaiManualServiceAreaEntries
    .filter((entry) => activeChennaiAreaSlugs.has(entry.areaSlug))
    .filter((entry) => isActiveManualServiceSlug(entry.serviceSlug))
    .map(refreshManualServiceAreaEntry);
