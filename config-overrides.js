const { injectBabelPlugin } = require('react-app-rewired');
const rewireTypescript = require('react-app-rewire-typescript');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = rewireTypescript(config, env);
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin(["import", { libraryName: "saltui", camel2DashComponentName: false }], config);

  return config;
};