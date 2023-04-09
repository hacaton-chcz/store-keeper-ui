// export const INTERNAL_PARKING_COLUMN_ID = 0;
// export const INVITE_TO_TERRIOTY_COLUMN_ID = 1;
// export const EXTERNAL_PARKING_COLUMN_ID = 2;
// export const NORTH_LOADING_COLUMN_ID = 3;
// export const SOUTH_LOADING_COLUMN_ID = 4;

export const INTERNAL_PARKING_COLUMN_ID = 4;
export const INVITE_TO_TERRIOTY_COLUMN_ID = 2;
export const EXTERNAL_PARKING_COLUMN_ID = 1;
export const NORTH_LOADING_COLUMN_ID = 3;
export const SOUTH_LOADING_COLUMN_ID = 5;

// CREATED = 0,
// ARRIVED = 1,
// INVITED = 2,
// PASSED_INSPECTION = 3,
// ON_INTERNAL_PARKING = 4,
// ON_LOAD = 5,
// LOAD_END = 10

export const columnsFromBackend = {
  [INTERNAL_PARKING_COLUMN_ID]: {
    title: `Внутренняя стоянка`,
    items: [],
  },
  [INVITE_TO_TERRIOTY_COLUMN_ID]: {
    title: `Приглашены на внутреннюю стоянку`,
    items: [],
  },
  [EXTERNAL_PARKING_COLUMN_ID]: {
    title: `Внешняя стоянка`,
    items: [],
  },
  [NORTH_LOADING_COLUMN_ID]: {
    title: `Северный въезд`,
    items: [],
  },
  [SOUTH_LOADING_COLUMN_ID]: {
    title: `Южный въезд`,
    items: [],
  },
};
