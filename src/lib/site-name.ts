export function getPublicSiteName(name: string) {
  const withoutFormerPrefix = name.replace(/^Former\s+/i, "").trim();
  return withoutFormerPrefix || name;
}
