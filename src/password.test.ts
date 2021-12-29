import { hashPassword, validatePassword } from "./password";

const PASSWORD = "1234";

const VALUES = {
  hash: "9743a4e3c9512a2d21747d671ca249dd0ced350f6304479ecaa5a832de1dfe6767e75688f046db1a3c7d9b6de3d81319fcaf1c7620e8b7ee841c452a0d42ab08",
  salt: "509764ec7c77038625ef304eaed6d010",
  string: "1234",
  wrongString: "admin1234",
};

describe("hashPassword", () => {
  test("hashPasword returns an object with hash", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("hash");
  });

  test("hashPasword returns an object with salt", () => {
    const result = hashPassword(PASSWORD);
    expect(result).toHaveProperty("salt");
  });
});

describe("validatePassword", () => {
  test("with correct password", () => {
    expect(validatePassword(VALUES.string, VALUES.salt, VALUES.hash)).toBe(
      true
    );
  });

  test("with wrong password", () => {
    expect(validatePassword(VALUES.wrongString, VALUES.salt, VALUES.hash)).toBe(
      false
    );
  });
});
