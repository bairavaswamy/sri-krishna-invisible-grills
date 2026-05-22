import { getSiteSchemaGraph, stringifySchema } from "../config/schema.config";

export default function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: stringifySchema(getSiteSchemaGraph()),
      }}
    />
  );
}
