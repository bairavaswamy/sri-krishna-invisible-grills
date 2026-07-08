const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const rootDir = path.resolve(__dirname, "..");

require.extensions[".ts"] = (module, filename) => {
  const source = fs.readFileSync(filename, "utf8");
  const result = ts.transpileModule(source, {
    fileName: filename,
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ES2020,
    },
  });

  module._compile(result.outputText, filename);
};

try {
  const registry = require(path.join(rootDir, "app", "content", "manualPageRegistry.ts"));
  const pages = require(path.join(rootDir, "app", "content", "manualServicePages.ts"));
  const chennai = require(path.join(rootDir, "app", "config", "chennai.config.ts"));
  const serviceAreas = require(path.join(rootDir, "app", "content", "service-areas", "index.ts"));
  const manualServicePages = pages.manualServicePages;
  const chennaiConfig = chennai.chennaiConfig;
  const manualServiceAreaEntries = serviceAreas.manualServiceAreaEntries;

  registry.validateManualServicePages();

  console.log(`Manual page validation passed for ${manualServicePages.length} published page(s).`);

  for (const page of manualServicePages) {
    const url = `/${page.citySlug}/${page.serviceSlug}/${page.areaSlug}`;
    const words = registry.countManualPageWords(page);
    console.log(`- ${url}: ${words} words, ${page.faq.length} FAQs`);
  }

  const expectedAreaServiceEntries = chennaiConfig.areas.length * chennaiConfig.services.length;
  const seenEntries = new Set();

  for (const entry of manualServiceAreaEntries) {
    const key = `${entry.citySlug}/${entry.areaSlug}/${entry.serviceSlug}`;

    if (seenEntries.has(key)) {
      throw new Error(`Duplicate service-area entry found for ${key}.`);
    }

    seenEntries.add(key);
  }

  if (manualServiceAreaEntries.length !== expectedAreaServiceEntries) {
    throw new Error(
      `Expected ${expectedAreaServiceEntries} Chennai service-area entries, found ${manualServiceAreaEntries.length}.`
    );
  }

  console.log(
    `Manual service-area entry validation passed for ${manualServiceAreaEntries.length} entries (${chennaiConfig.areas.length} areas x ${chennaiConfig.services.length} services).`
  );
} catch (error) {
  console.error("Manual page validation failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
