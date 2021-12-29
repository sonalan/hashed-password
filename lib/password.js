"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validatePassword = void 0;
var crypto_1 = require("crypto");
/**
 * Given an input password a salt and an hash
 * Does the given password mathc with the hash
 * @param {string} inputPassword
 * @param {string} salt
 * @param {string} storedHash
 * @returns {boolean} does hash(input Password + salt ) === storedHash?
 */
var validatePassword = function (inputPassword, salt, storedHash) {
    var inputHash = (0, crypto_1.pbkdf2Sync)(inputPassword, salt, 1000, 64, "sha512").toString("hex");
    return storedHash === inputHash;
};
exports.validatePassword = validatePassword;
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
var hashPassword = function (password) {
    var salt = (0, crypto_1.randomBytes)(16).toString("hex");
    var hash = (0, crypto_1.pbkdf2Sync)(password, salt, 1000, 64, "sha512").toString("hex");
    return { hash: hash, salt: salt };
};
exports.hashPassword = hashPassword;
