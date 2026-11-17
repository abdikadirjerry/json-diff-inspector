export const SAMPLE_LEFT_JSON = JSON.stringify(
  {
    service: "auth-gateway",
    version: "2.3.0",
    environment: "staging",
    rateLimit: {
      windowMs: 60000,
      maxRequests: 100,
    },
    features: {
      mfaEnabled: false,
      auditLogging: true,
    },
    deprecatedFlag: true,
  },
  null,
  2,
);

export const SAMPLE_RIGHT_JSON = JSON.stringify(
  {
    service: "auth-gateway",
    version: "2.4.1",
    environment: "production",
    rateLimit: {
      windowMs: 60000,
      maxRequests: 250,
    },
    features: {
      mfaEnabled: true,
      auditLogging: true,
      geoBlocking: ["XX", "YY"],
    },
  },
  null,
  2,
);
