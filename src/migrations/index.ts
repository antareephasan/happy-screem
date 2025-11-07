import * as migration_20251107_192014 from './20251107_192014';

export const migrations = [
  {
    up: migration_20251107_192014.up,
    down: migration_20251107_192014.down,
    name: '20251107_192014'
  },
];
