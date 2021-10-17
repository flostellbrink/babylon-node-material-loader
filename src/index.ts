import { Engine, NodeMaterial, Scene } from '@babylonjs/core';
import { LoaderDefinitionFunction } from 'webpack';

const nodeMaterialLoader: LoaderDefinitionFunction = function(source) {
  const engine = new Engine(null);
  const scene = new Scene(engine);
  const nodeMaterial = NodeMaterial.Parse(JSON.parse(source), scene);
  const generated = nodeMaterial.generateCode().split('\n');

  return [
    'const BABYLON = require("@babylonjs/core");',
    '',
    'const apply = (nodeMaterial) => {',
    '  if (!nodeMaterial) return;',
    '  nodeMaterial.clear();',
    ...generated.slice(1).map(l => `  ${l}`),
    '}',
    '',
    'export default apply;',
    '',
  ].join('\n');
};

export default nodeMaterialLoader;
