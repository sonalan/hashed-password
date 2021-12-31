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

interface passwordOptions {
  numbers?: boolean;
  symbols?: boolean;
}

/**
 * Returns a random password based on given params
 * @param {number} length
 * @param {passwordOptions} options
 * @returns {string}
 */
export const randomPassword = (
  length: number = 10,
  options?: passwordOptions
): string => {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";

  let characters = alpha;
  characters += options?.numbers ? numbers : "";
  characters += options?.symbols ? symbols : "";
  let password = "";
  for (let i = 0; i < length; i += 1) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
