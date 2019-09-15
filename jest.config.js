module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/**/*.doc.js',
    '!app/components/**/index.js',
    '!app/containers/**/machineOptions.js',
    '!app/utils/helpers.js',
    '!app/utils/loadable.js',
    '!app/**/*.stories.{js,jsx}',
    '!app/components/**/stories/*.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/index.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
      /** @todo(eem): put back once we can focus on tests */
      // statements: 98,
      // branches: 91,
      // functions: 98,
      // lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    '@testing-library/react/cleanup-after-each',
  ],
  setupFiles: ['raf/polyfill'],
  testRegex: '.*\\.test\\.js$',
  snapshotSerializers: [],
  transformIgnorePatterns: ['node_modules/(?!(grommet)/)'],
}
