import avatarSrc1 from "../ui/images/playerIcon1.png";
import avatarSrc2 from "../ui/images/playerIcon2.png";
import avatarSrc3 from "../ui/images/playerIcon3.png";
import avatarSrc4 from "../ui/images/playerIcon4.png";

export const GAME_SYBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const PLAYERS_COUNT = 2;
export const DEFAULT_TIMER_MS = 6000 * 1000;

export const SYMBOLS_ORDER = [
  GAME_SYBOLS.CROSS,
  GAME_SYBOLS.ZERO,
  GAME_SYBOLS.SQUARE,
  GAME_SYBOLS.TRIANGLE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Vanya",
    rating: 1234,
    avatar: avatarSrc1,
    symbol: GAME_SYBOLS.CROSS,
  },
  {
    id: 7,
    name: "Alena",
    rating: 978,
    avatar: avatarSrc4,
    symbol: GAME_SYBOLS.ZERO,
  },

  {
    id: 2,
    name: "Igar",
    rating: 1523,
    avatar: avatarSrc3,
    symbol: GAME_SYBOLS.TRIANGLE,
  },
  {
    id: 10,
    name: "Petyahat34sdasd",
    rating: 3212,
    avatar: avatarSrc2,
    symbol: GAME_SYBOLS.SQUARE,
  },
];
