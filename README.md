# Babylon Node-Material Loader

Webpack loader for node material files created with the [node-material-editor](https://nodematerial-editor.babylonjs.com/).

`npm install --save-dev babylon-node-material-loader`

## Usage

Just create a new material for your current scene. Then load all the material properties by calling the exported function on you material.

```js
import applyMaterial from './test.bnm';

const testMaterial = new NodeMaterial('test', myScene);
applyMaterial(testMaterial);
```

This is especially nice for [react-babylonjs](https://github.com/brianzinn/react-babylonjs) where you can just load the material in a `ref` like this:

```js
import applyMaterial from './test.bnm';

export default function Test() {
  return (
    <plane name="plane">
      <nodeMaterial name="test" ref={applyMaterial} />
    </plane>
  );
}
```

## Webpack Config

I found it easiest to give the material json files a custom file type. I chose `bnm` for babylon-node-material, but it can be anything you want.

In your `webpack.config.js` add this:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.bnm$/i,
        use: ['babylon-node-material-loader'],
      },
    ],
  },
};
```

## Typescript Config

If you are using typescript this declaration tells the compiler what the loaded result looks like:

```js
declare module "*.bnm" {
  import { NodeMaterial } from "@babylonjs/core";

  const apply: (material: NodeMaterial) => void;

  export default apply;
}
```
