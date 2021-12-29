import SelectedItem from './selectedItem';
import DecorItem from './decorItem';

export default interface GameConfigType {
  name: string;
  background: number;
  tree: number;
  isGarlandActive: boolean;
  garlandColor: string;
  toys: SelectedItem[];
  snow: boolean;
  volume: boolean;
  decorated?: DecorItem[];
}
