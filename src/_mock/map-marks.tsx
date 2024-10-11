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

export const _mapMarks: IMapMark[] = [
  {
    w: 24,
    h: 24,
    bottom: 111,
    left: 324,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 24,
    h: 24,
    left: 210,
    top: 298,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 30,
    h: 30,
    left: 328,
    top: 168,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 32,
    h: 32,
    left: 141,
    top: 228,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 16,
    h: 16,
    left: 371,
    bottom: 149,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 16,
    h: 16,
    left: 413,
    top: 67,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 25,
    h: 25,
    right: 440,
    bottom: 176,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
  {
    w: 24,
    h: 24,
    right: 240,
    bottom: 270,
    tooltip: {
      image: "/assets/images/collection-world.jpeg",
      description: "Emma Simpson collected one pair of Cool Shoes.",
    },
  },
];
