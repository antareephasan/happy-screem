import * as migration_20251027_092349 from './20251027_092349';
import * as migration_20251027_205242 from './20251027_205242';

export const migrations = [
  {
    up: migration_20251027_092349.up,
    down: migration_20251027_092349.down,
    name: '20251027_092349',
  },
  {
    up: migration_20251027_205242.up,
    down: migration_20251027_205242.down,
    name: '20251027_205242'
  },
];
