const { jest } = require('../../../arco.scripts.config');
module.exports = {
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  node: (config) => {
    config = jest.node(config) || config;
    config.moduleNameMapper = {
      '^arco-animation-icons-wall/(.+)$': '<rootDir>/$1',
      '^arco-animation-icons-wall$': '<rootDir>',
    };
  },
  /**
   * @param config {import('@arco-design/arco-scripts').JestConfig}
   */
  client: (config) => {
    config = jest.client(config) || config;
    config.moduleNameMapper = {
      '^arco-animation-icons-wall/(.+)$': '<rootDir>/$1',
      '^arco-animation-icons-wall$': '<rootDir>',
    };
  },
};
