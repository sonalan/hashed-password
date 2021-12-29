import { randomBytes, pbkdf2Sync } from "crypto";

/**
 * Given an input password a salt and an hash
 * Does the given password mathc with the hash
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean} does hash(input Password + salt ) === storedHash?
 */
export const validatePassword = (
  inputPassword: string,
  salt: string,
  storedHash: string
): boolean => {
  const inputHash = pbkdf2Sync(
    inputPassword,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");

  return storedHash === inputHash;
};

/**
 * @typedef {Object} HashAndSalt
 * @property {string} hash - The hash we got
 * @property {string} salt - The salt used for hashing
 */

/**
 * Given a Password and hash it with a salt, then return the hash and the salt
 * @param {string} password
 * @returns {HashAndSalt} object containing the hash and the salt usedP
 */
export const hashPassword = (
  password: string
): { hash: string; salt: string } => {
  const salt = randomBytes(16).toString("hex");

  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  return { hash, salt };
};
