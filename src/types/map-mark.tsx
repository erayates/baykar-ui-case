export interface IMapMark {
  w: number;
  h: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  tooltip: {
    image: string;
    description: string;
  };
}
