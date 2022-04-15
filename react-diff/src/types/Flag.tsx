export type Flag = 'Placement' | 'Deletion';

export interface Node {
  key: string;
  flag?: Flag;
  index?: number;
}
