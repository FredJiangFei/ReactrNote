export type Flag = 'Placement' | 'Deletion';

interface Node {
  key: string;
  flag?: Flag;
  index?: number;
}
