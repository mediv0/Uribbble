module.exports = {
    preset: "ts-jest",
    collectCoverage: true,
    testEnvironment: "jsdom",
    moduleDirectories: ["src", "node_modules"],
    moduleFileExtensions: ["js", "ts", "json"],
    testPathIgnorePatterns: ["/node_modules/"],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    collectCoverageFrom: ["!**/*.d.ts", "!**/node_modules/**", "src/**/*.ts", "!src/dummy/*.ts", "!src/modules/**/*.skip.ts", "!src/setupTests.ts", "!src/index.ts"],
};
