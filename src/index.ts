import { webcrypto } from "node:crypto";
import { basex } from "./basex.js";

const BASE58 =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" as const;
const base58 = basex(BASE58);

export default function typid(prefix: string, nBits: number = 80) {
  const nBytes = Math.ceil(nBits / 8);
  const randomValues = webcrypto.getRandomValues(new Uint8Array(nBytes));

  const encodedId = base58.encode(randomValues);

  return `${prefix}_${encodedId}`;
}
