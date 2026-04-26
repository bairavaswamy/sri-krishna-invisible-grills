export const SERVICE_LOCATION_CONTENT_HARD_RULES = {
  wordCount: {
    min: 2200,
    max: 2900,
    varyNaturally: true,
  },
  structure: {
    keepJsonShapeSameAsRegistry: true,
    keepRouteParamsMetadataLayoutKeysStable: true,
    allowNarrativeRotationInsideSections: true,
  },
  writing: {
    uniqueContentPerLocation: true,
    uniquePatternPerLocation: true,
    ultraEliteQualityBar: true,
    localGroundingRequired: true,
    noAreaNameSwapWriting: true,
    noThinFiller: true,
    noBrokenSentencesOrDanglingClauses: true,
    noGenericLocationShellWriting: true,
  },
  repetitionControl: {
    avoidPhraseDNA: [
      "why this happens",
      "this is why",
      "the difference is",
      "the contradiction shows up",
      "we do not treat",
      "we plan around",
      "the goal is not",
      "what usually fails",
    ],
    avoidLoopingIdeas: [
      "bird route explanation repeated with minor wording changes",
      "failure explanation repeated with minor wording changes",
      "same emotional frustration described twice without new proof",
      "same balcony-use insight repeated in multiple sections",
    ],
    compressWhenConceptAlreadyLanded: true,
  },
  narrativeRotation: {
    doNotDefaultToSingleFlow: "problem -> explanation -> solution",
    allowedPrimaryPatterns: [
      "story-first",
      "mistake-first",
      "contrast-first",
      "problem-first",
    ],
    perLocationGuidance: [
      "At least one section should open with a lived case or installation situation.",
      "At least one section should foreground a failed earlier fix or common buyer mistake.",
      "At least one section should use contrast: cheap vs premium, front-only vs route-aware, before vs after.",
      "Do not let every page use the same section rhythm even if the section headings remain structurally similar.",
    ],
  },
  proof: {
    preferSpecificSituationsOverGenericClaims: true,
    includeBeforeAfterShift: true,
    includeFailureRecoveryAngle: true,
    includeBalconyVariationDetail: true,
    includeMicroLocalSignals: true,
    includeDetailedCaseStory: true,
    includeEmotionalShift: true,
    includeDailyUsePsychology: true,
    includeMissedRouteCorrectionLine: true,
  },
  seo: {
    intentsRequired: [
      "commercial",
      "transactional",
      "informational",
      "navigational",
      "problem-solution",
      "hyperlocal",
    ],
    keywordsMustBeNatural: true,
    eachLocationNeedsOwnKeywordMix: true,
  },
} as const;

export const SERVICE_LOCATION_SECTION_FLOW_ROTATION = [
  {
    name: "story-first",
    openingOrder: [
      "local-case-story",
      "home-pattern-reading",
      "bird-route-behaviour",
      "failed-fix-analysis",
      "layout-variation",
      "before-after-shift",
      "premium-positioning",
    ],
  },
  {
    name: "mistake-first",
    openingOrder: [
      "failed-fix-analysis",
      "real-problem-context",
      "home-pattern-reading",
      "local-case-story",
      "layout-variation",
      "before-after-shift",
      "premium-positioning",
    ],
  },
  {
    name: "contrast-first",
    openingOrder: [
      "cheap-vs-premium-contrast",
      "real-problem-context",
      "local-case-story",
      "bird-route-behaviour",
      "layout-variation",
      "before-after-shift",
      "premium-positioning",
    ],
  },
  {
    name: "problem-first",
    openingOrder: [
      "real-problem-context",
      "bird-route-behaviour",
      "local-case-story",
      "failed-fix-analysis",
      "layout-variation",
      "before-after-shift",
      "premium-positioning",
    ],
  },
] as const;

export const SERVICE_LOCATION_COMPRESSION_RULES = [
  "If the bird-route logic is already clear, the next section must add a new angle such as geometry, habit, or proof instead of rephrasing the same route.",
  "If the failure section already explains why a quick fix failed, the next section must move into case proof, buyer contrast, or transformation instead of repeating failure language.",
  "If a section already established emotional frustration, the next section must convert that into proof, design judgment, or buyer confidence.",
  "Each paragraph should either add local proof, structural detail, lived experience, or buyer clarity. If it does none of those, compress it.",
  "Do not repeat stock locality wrappers such as residential layouts, balconies, windows, and service-linked openings across multiple pages.",
  "Every page must surface at least one landmark, corridor, road pattern, neighborhood behavior, or built-form signal that would sound wrong in another location.",
  "If the story section does not include a believable installation situation, rework it before shipping the page.",
  "Remove any section that feels like keyword stacking without adding fresh local meaning, emotional movement, or proof.",
  "At least one proof section should clearly state that we corrected a route, corner, or terrace movement that previous work missed completely.",
  "If a paragraph explains an idea that is already clear, shorten it and move faster into proof, contrast, or transformation.",
] as const;
