// Type definitions for hashed-password 1.0.5
// Project: https://github.com/sonalan/hashed-password
// Definitions by: Ebuka Odini <https://github.com/ebukaodini>

/**
 * Given an input password a salt and an hash Does the given password mathc with the hash
 * @param inputPassword string
 * @param salt string
 * @param storedHash string
 * @returns boolean
 */
export declare function validatePassword(
  inputPassword: string,
  salt: string,
  storedHash: string
): boolean;

/**
 * Given a Password and hash it with a salt, then return the hash and the salt
 * @param password string
 * @returns HashAndSalt
 */
export declare function hashPassword(password: string): HashAndSalt

/**
 * Returns a random password based on given params
 * @param length number
 * @param options object
 * @returns string
 */
export declare function randomPassword(length: number, options: object): string

export interface HashAndSalt {
  hash: string;
  salt: string;
}
