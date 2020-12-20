function domainType(domains) {
  const domainNames = {
    org: "organization",
    com: "commercial",
    net: "network",
    info: "information",
  };
  return domains.map((domain) => {
    const parts = domain.split(".");
    return domainNames[parts[parts.length - 1]];
  });
}

export { domainType };
