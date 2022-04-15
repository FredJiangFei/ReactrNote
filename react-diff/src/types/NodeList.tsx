import { Node } from './Flag';

type NodeList = Node[];

export function diff(before: NodeList, after: NodeList): NodeList {
  const result: NodeList = [];

  const beforeMap = new Map<string, Node>();
  before.forEach((node, i) => {
    node.index = i;
    beforeMap.set(node.key, node);
  });

  let lastPlacedIndex = 0;
  for (let i = 0; i < after.length; i++) {
    const afterNode = after[i];
    afterNode.index = i;

    const beforeNode = beforeMap.get(afterNode.key);

    if (beforeNode) {
      beforeMap.delete(beforeNode.key);

      const oldIndex = beforeNode.index as number;

      if (oldIndex < lastPlacedIndex) {
        afterNode.flag = 'Placement';
        result.push(afterNode);
      } else {
        lastPlacedIndex = oldIndex;
      }
    } else {
      afterNode.flag = 'Placement';
      result.push(afterNode);
    }
  }

  beforeMap.forEach((node) => {
    node.flag = 'Deletion';
    result.push(node);
  });

  return result;
}
