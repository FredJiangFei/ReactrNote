import { diff } from '../types/NodeList';

test('test delete and add', () => {
  const before = [{ key: 'a' }];
  const after = [{ key: 'b' }];

  const result = diff(before, after);

  expect(result).toHaveLength(2);

  var nodeA = result.find((x) => x.key === 'a');
  expect(nodeA?.flag).toBe('Deletion');

  var nodeB = result.find((x) => x.key === 'b');
  expect(nodeB?.flag).toBe('Placement');
});

test('test move', () => {
  const before = [{ key: 'a' }, { key: 'b' }, { key: 'c' }];
  const after = [{ key: 'c' }, { key: 'b' }, { key: 'a' }];

  const result = diff(before, after);

  expect(result).toHaveLength(2);

  var nodeA = result.find((x) => x.key === 'a');
  expect(nodeA?.flag).toBe('Placement');
  expect(nodeA?.index).toBe(2);

  var nodeB = result.find((x) => x.key === 'b');
  expect(nodeB?.flag).toBe('Placement');
  expect(nodeB?.index).toBe(1);
});
