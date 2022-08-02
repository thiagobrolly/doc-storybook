module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules', 'lib'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['stories.tsx', 'node_modules', 'lib', 'packages/app', 'packages/styles', 'packages/icons'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
