export async function generateKey(password) {
  const enc = new TextEncoder();
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("static-salt-123"), // use static salt to ensure same key
      iterations: 100000,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false, // don't allow export
    ["encrypt", "decrypt"]
  );
}

export async function encryptData(data, key) {
  const enc = new TextEncoder();
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const encoded = enc.encode(JSON.stringify(data)); // 👈 ensure data is stringified
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );

  return {
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  };
}

export async function decryptData(encrypted, key) {
  const dec = new TextDecoder();
  const iv = new Uint8Array(encrypted.iv);
  const encryptedData = new Uint8Array(encrypted.data);

  const decrypted = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encryptedData
  );

  return JSON.parse(dec.decode(decrypted)); // 👈 parse back to object
}
