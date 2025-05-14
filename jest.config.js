/** @type {import('jest').Config} */
module.exports = {
   preset: 'ts-jest',
   testEnvironment: 'node',
   moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
   },
   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
   globals: {
      'ts-jest': {
         tsconfig: 'tsconfig.jest.json',
      },
   },
};
