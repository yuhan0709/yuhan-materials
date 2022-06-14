const { jest } = require('../../../arco.scripts.config');
module.exports = {
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  node: (config) => {
    config = jest.node(config) || config;
    config.moduleNameMapper = {
      '^arco-verify-code/(.+)$': '<rootDir>/$1',
      '^arco-verify-code$': '<rootDir>',
    };
  },
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  client: (config) => {
    config = jest.client(config) || config;
    config.moduleNameMapper = {
      '^arco-verify-code/(.+)$': '<rootDir>/$1',
      '^arco-verify-code$': '<rootDir>',
    };
  },
};
