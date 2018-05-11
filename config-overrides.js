const merge = require('webpack-merge')
const { injectBabelPlugin } = require('react-app-rewired');
const rewireTypescript = require('react-app-rewire-typescript');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = rewireTypescript(config, env);
  config = rewireReactHotLoader(config, env);
  config = injectBabelPlugin(["import", { libraryName: "saltui", camel2DashComponentName: false }], config);
  // for (let index = 0; index < config.module.rules[1].oneOf.length; index++) {
  //   const element = config.module.rules[1].oneOf[index];
  //   if (String(element.test) === String(/\.css$/)) {
  //     config.module.rules[1].oneOf[index].use.unshift({
  //       loader: require.resolve('px2rem-loader'),
  //       // options here
  //       options: {
  //         remUni: 75,
  //         remPrecision: 8
  //       }
  //     });
  //   }
  // }
  // console.log(config.module.rules[1].oneOf);
  return config;
};