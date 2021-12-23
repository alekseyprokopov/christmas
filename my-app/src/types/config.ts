export default interface ConfigType {
  name?: string;
  search: string;
  sortSelect: string;
  category: {
    shape: {
      [колокольчик: string] : boolean;
      шар: boolean;
      шишка: boolean;
      снежинка: boolean;
      фигурка: boolean;
    },
    numberStart: number;
    numberEnd: number;
    yearStart: number;
    yearEnd: number;
    color: {
      [белый: string] : boolean;
      желтый: boolean;
      красный: boolean;
      синий: boolean;
      зелёный: boolean;
    },
    size: {
      [большой: string]: boolean;
      средний: boolean;
      малый: boolean;
    },
    favorite: boolean;
  },
}
