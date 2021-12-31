"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPassword = exports.hashPassword = exports.validatePassword = void 0;
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
/**
 * Returns a random password based on given params
 * @param {number} length
 * @param {passwordOptions} options
 * @returns {string}
 */
var randomPassword = function (length, options) {
    if (length === void 0) { length = 10; }
    var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*_-+=";
    var characters = alpha;
    characters += (options === null || options === void 0 ? void 0 : options.numbers) ? numbers : "";
    characters += (options === null || options === void 0 ? void 0 : options.symbols) ? symbols : "";
    var password = "";
    for (var i = 0; i < length; i += 1) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
};
exports.randomPassword = randomPassword;
