import { readFileSync, writeFileSync } from 'fs';
import { LoaderContext } from 'webpack';
import nodeMaterialLoader from '../dist/index';

test('Loads test file', () => {
  const content = readFileSync('test/test.bnm', 'utf8');
  const context = { resourcePath: 'test.bnm' } as LoaderContext<{}>;
  const materialCode = nodeMaterialLoader.call(context, content) as string;
  expect(typeof materialCode).toBe('string');

  // Write for manual inspection
  writeFileSync('test/test.js', materialCode);
});
