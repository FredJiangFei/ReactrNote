import { diff } from '../types/NodeList';

test('1', () => {
  const before = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }];
  const after = [{ key: 'd' }, { key: 'a' }, { key: 'b' }, { key: 'c' }];

  const result = diff(before, after);
  console.log(result);
});
