import SelectedItem from './selectedItem';

export default interface GameConfigType {
  name: string;
  background: number;
  tree: number;
  isGarlandActive: boolean;
  garlandColor: string;
  toys: SelectedItem[];
  snow: boolean;
  volume: boolean;
  decorated?: string[];
}
