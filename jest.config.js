module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePathIgnorePatterns: ["<rootDir>/builds", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"]
}
