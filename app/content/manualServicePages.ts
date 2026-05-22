import { antiBirdNetPages } from "./services/anti-bird-nets";
import { balconyInvisibleGrillPages } from "./services/balcony-invisible-grills";
import { balconySafetyNetPages } from "./services/balcony-safety-nets";
import { birdSpikesInstallationPages } from "./services/bird-spikes-installation";
import { childrenSafetyNetPages } from "./services/children-safety-nets";
import { clothHangerInstallationPages } from "./services/cloth-hanger-installation";
import { cricketPracticeNetPages } from "./services/cricket-practice-nets";
import { buildingCoveringSafetyNetPages } from "./services/building-covering-safety-nets";
import { ductAreaSafetyNetPages } from "./services/duct-area-safety-nets";
import { footballSportsNetPages } from "./services/football-sports-nets";
import { invisibleGrillPages } from "./services/invisible-grills";
import { pigeonSafetyNetPages } from "./services/pigeon-safety-nets";
import { staircaseSafetyNetPages } from "./services/staircase-safety-nets";
import { swimmingPoolSafetyNetPages } from "./services/swimming-pool-safety-nets";
import { terraceSafetyNetPages } from "./services/terrace-safety-nets";
import { windowSafetyNetPages } from "./services/window-safety-nets";
import type { ManualServicePage } from "./types";
import { applyManualServicePageVisuals } from "./serviceVisuals";

const rawManualServicePages: ManualServicePage[] = [
  ...balconySafetyNetPages,
  ...childrenSafetyNetPages,
  ...antiBirdNetPages,
  ...pigeonSafetyNetPages,
  ...invisibleGrillPages,
  ...balconyInvisibleGrillPages,
  ...windowSafetyNetPages,
  ...ductAreaSafetyNetPages,
  ...buildingCoveringSafetyNetPages,
  ...terraceSafetyNetPages,
  ...staircaseSafetyNetPages,
  ...swimmingPoolSafetyNetPages,
  ...cricketPracticeNetPages,
  ...footballSportsNetPages,
  ...birdSpikesInstallationPages,
  ...clothHangerInstallationPages,
];

export const manualServicePages: ManualServicePage[] = rawManualServicePages.map(
  applyManualServicePageVisuals
);

export type { ManualServicePage };
