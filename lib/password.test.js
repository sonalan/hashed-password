"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUES = {
    hash: "9743a4e3c9512a2d21747d671ca249dd0ced350f6304479ecaa5a832de1dfe6767e75688f046db1a3c7d9b6de3d81319fcaf1c7620e8b7ee841c452a0d42ab08",
    salt: "509764ec7c77038625ef304eaed6d010",
    string: "1234",
    wrongString: "admin1234",
};
describe("hashPassword", function () {
    test("hashPasword returns an object with hash", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("hash");
    });
    test("hashPasword returns an object with salt", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("with correct password", function () {
        expect((0, password_1.validatePassword)(VALUES.string, VALUES.salt, VALUES.hash)).toBe(true);
    });
    test("with wrong password", function () {
        expect((0, password_1.validatePassword)(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(false);
    });
});
describe("randomPassword", function () {
    test("without options", function () {
        var password = (0, password_1.randomPassword)();
        expect(password.length).toEqual(10);
    });
    test("with length param", function () {
        var length = 15;
        var password = (0, password_1.randomPassword)(length);
        expect(password.length).toEqual(length);
    });
});
