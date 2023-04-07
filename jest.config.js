module.exports = {
  preset: "jest-preset-vite",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { presets: ["@babel/preset-env", "@babel/preset-react"] }
    ]
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"]
};
