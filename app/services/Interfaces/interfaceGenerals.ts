export interface RiseOfShadow {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  playerClass?: string;
  locale: string;
  text?: string;
  img?: string;
  imgGold?: string;
  health?: number;
  mechanics?: Mechanic[];
  artist?: string;
  faction?: string;
  rarity?: string;
  cost?: number;
  flavor?: string;
  collectible?: boolean;
  attack?: number;
  race?: string;
  durability?: number;
  elite?: boolean;
  howToGetGold?: string;
  armor?: string;
}

export interface RastakhansRumble {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass?: string;
  locale: string;
  mechanics?: Mechanic[];
  faction?: string;
  cost?: number;
  img?: string;
  imgGold?: string;
  attack?: number;
  health?: number;
  artist?: string;
  durability?: number;
  rarity?: string;
  flavor?: string;
  collectible?: boolean;
  race?: string;
  elite?: boolean;
  armor?: string;
}

export interface KoboldsCatacomb {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  artist?: string;
  playerClass: string;
  locale: string;
  health?: number;
  img?: string;
  imgGold?: string;
  faction?: string;
  mechanics?: Mechanic[];
  cost?: number;
  attack?: number;
  durability?: number;
  race?: string;
  rarity?: string;
  flavor?: string;
  collectible?: boolean;
  armor?: string;
  elite?: boolean;
  howToGet?: string;
  howToGetGold?: string;
}

export interface KnightsOfTheFrozenThrone {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  img?: string;
  imgGold?: string;
  health?: number;
  mechanics?: Mechanic[];
  rarity?: string;
  cost?: number;
  attack?: number;
  flavor?: string;
  artist?: string;
  collectible?: boolean;
  race?: string;
  faction?: string;
  elite?: boolean;
  durability?: number;
  armor?: string;
}

export interface MeanStreetsOfGadgetzan {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  artist?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  rarity?: string;
  cost?: number;
  flavor?: string;
  collectible?: boolean;
  img?: string;
  imgGold?: string;
  faction?: string;
  attack?: number;
  health?: number;
  race?: string;
  elite?: boolean;
  multiClassGroup?: string;
  classes?: string[];
  durability?: number;
}

export interface BlackrockMountain {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  health?: number;
  playerClass: string;
  img?: string;
  imgGold?: string;
  locale: string;
  text?: string;
  mechanics?: Mechanic[];
  cost?: number;
  attack?: number;
  elite?: boolean;
  race?: string;
  artist?: string;
  rarity?: string;
  flavor?: string;
  collectible?: boolean;
  howToGet?: string;
  howToGetGold?: string;
  durability?: number;
  faction?: string;
}

export interface GoblinsVsGnome {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  cost?: number;
  img?: string;
  imgGold?: string;
  rarity?: string;
  attack?: number;
  health?: number;
  flavor?: string;
  artist?: string;
  collectible?: boolean;
  race?: string;
  durability?: number;
  elite?: boolean;
}

export interface Naxxrama {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  health?: number;
  playerClass: string;
  img?: string;
  imgGold?: string;
  locale: string;
  text?: string;
  mechanics?: Mechanic[];
  cost?: number;
  attack?: number;
  elite?: boolean;
  race?: string;
  rarity?: string;
  flavor?: string;
  artist?: string;
  collectible?: boolean;
  howToGet?: string;
  howToGetGold?: string;
  durability?: number;
}

export interface HallOfFame {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  faction?: string;
  cost?: number;
  attack?: number;
  health?: number;
  race?: string;
  img?: string;
  imgGold?: string;
  rarity?: string;
  flavor?: string;
  artist?: string;
  collectible?: boolean;
  howToGet?: string;
  howToGetGold?: string;
  elite?: boolean;
}

export interface Classic {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  faction?: string;
  artist?: string;
  rarity?: string;
  cost?: number;
  flavor?: string;
  collectible?: boolean;
  img?: string;
  imgGold?: string;
  attack?: number;
  health?: number;
  race?: string;
  durability?: number;
  elite?: boolean;
}

export interface Basic {
  cardId: string;
  dbfId: string;
  name: string;
  cardSet: string;
  type: string;
  text?: string;
  playerClass: string;
  locale: string;
  mechanics?: Mechanic[];
  faction?: string;
  rarity?: string;
  health?: number;
  collectible?: boolean;
  img?: string;
  imgGold?: string;
  artist?: string;
  cost?: number;
  flavor?: string;
  howToGet?: string;
  howToGetGold?: string;
  attack?: number;
  race?: string;
  durability?: number;
}

export interface Mechanic {
  name: string;
}
