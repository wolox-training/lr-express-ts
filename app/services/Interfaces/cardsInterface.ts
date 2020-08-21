import {
  Basic,
  Classic,
  HallOfFame,
  Naxxrama,
  GoblinsVsGnome,
  BlackrockMountain,
  MeanStreetsOfGadgetzan,
  KnightsOfTheFrozenThrone,
  KoboldsCatacomb,
  RastakhansRumble,
  RiseOfShadow
} from './interfaceGenerals';

export interface Cards {
  Basic: Basic[];
  Classic: Classic[];
  'Hall of Fame': HallOfFame[];
  Naxxramas: Naxxrama[];
  'Goblins vs Gnomes': GoblinsVsGnome[];
  'Blackrock Mountain': BlackrockMountain[];
  'The Grand Tournament': GoblinsVsGnome[];
  'The League of Explorers': Naxxrama[];
  'Whispers of the Old Gods': Naxxrama[];
  'One Night in Karazhan': BlackrockMountain[];
  'Mean Streets of Gadgetzan': MeanStreetsOfGadgetzan[];
  "Journey to Un'Goro": Classic[];
  'Knights of the Frozen Throne': KnightsOfTheFrozenThrone[];
  'Kobolds & Catacombs': KoboldsCatacomb[];
  'The Witchwood': KnightsOfTheFrozenThrone[];
  'The Boomsday Project': KnightsOfTheFrozenThrone[];
  "Rastakhan's Rumble": RastakhansRumble[];
  'Rise of Shadows': RiseOfShadow[];
}
