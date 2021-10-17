const { nodeResolve } = require('@rollup/plugin-node-resolve');
const internal = require('rollup-plugin-internal');

module.exports = {
  rollup(config) {
    config.plugins.push(internal.default(['@babylonjs/core']));
    return config;
  },
};
