import crypto from "crypto";

// Cached in-memory key for local dev if environment variable is missing
let devPrivateKey: string | null = null;

function getPrivateKey(): string {
  let envKey = process.env.RSA_PRIVATE_KEY;
  if (envKey) {
    envKey = envKey.trim();
    if ((envKey.startsWith('"') && envKey.endsWith('"')) || (envKey.startsWith("'") && envKey.endsWith("'"))) {
      envKey = envKey.slice(1, -1);
    }
    return envKey.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r/g, '').trim();
  }

  if (!devPrivateKey) {
    console.warn("⚠️ RSA_PRIVATE_KEY environment variable is missing. Generating a temporary 2048-bit RSA key pair.");
    const { privateKey } = crypto.generateKeyPairSync("rsa" as any, {
      modulusLength: 2048,
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    }) as any;
    devPrivateKey = privateKey;
  }

  return devPrivateKey!;
}

export interface LicensePayload {
  license_id: string;
  customer_id: string;
  edition: string;
  valid_from: string;
  valid_until: string;
  maintenance_until: string;
  device_fingerprint: string;
}

export interface LicenseEnvelope {
  payload: string;
  signature: string;
  key_id: string;
}

function sortValue(value: any): any {
  if (Array.isArray(value)) {
    return value.map((item) => sortValue(item));
  }

  if (value && typeof value === 'object') {
    return Object.keys(value)
      .sort()
      .reduce((acc: any, key: string) => {
        acc[key] = sortValue(value[key]);
        return acc;
      }, {});
  }

  return value;
}

function canonicalize(value: any): string {
  return JSON.stringify(sortValue(value));
}

/**
 * Signs a license payload using SHA-256 and RSA-PSS padding.
 * Returns the complete Base64-encoded license envelope.
 */
export function signLicense(payload: LicensePayload): string {
  const payloadString = canonicalize(payload);
  const privateKey = getPrivateKey();

  const sign = crypto.createSign("SHA256");
  sign.update(Buffer.from(payloadString, "utf-8"));
  const signature = sign.sign({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST,
  }, "base64");

  const envelope: LicenseEnvelope = {
    payload: payloadString,
    signature: signature,
    key_id: "key_001",
  };

  return Buffer.from(JSON.stringify(envelope)).toString("base64");
}
