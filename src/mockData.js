export const internalParkingData = [
  {
    nomenclatureId: 500000429570,
    carId: "B029MX/797",
    production: {
      kind: "ЦИНК ЦВО ПАКЕТ",
      size: 20.5,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 4,
  },
  {
    nomenclatureId: 500000429750,
    carId: "P125AH/797",
    production: {
      kind: "КЛИНКЕР",
      size: 30,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 4,
  },
  // {
  //   nomenclatureId: 500000429751,
  //   carId: "O053HO/48",
  //   production: {
  //     kind: "КЛИНКЕР",
  //     size: 30,
  //     unitFormat: "Т",
  //   },
  //   pass: {
  //     startDate: "2023-04-08",
  //     endDate: "2023-04-15"
  //   },
  //   statusId: 1,
  // },
  // {
  //   nomenclatureId: 500000429789,
  //   carId: "X159KE/750",
  //   production: {
  //     kind: "ЦИНК ЦВО ПАКЕТ",
  //     size: 20.5,
  //     unitFormat: "Т",
  //   },
  //   pass: {
  //     startDate: "2023-04-08",
  //     endDate: "2023-04-15"
  //   },
  //   statusId: 1,
  // },
  // {
  //   nomenclatureId: 500000429791,
  //   carId: "Y060AH/774",
  //   production: {
  //     kind: "ЦИНК ЦВО ПАКЕТ",
  //     size: 20.5,
  //     unitFormat: "Т",
  //   },
  //   pass: {
  //     startDate: "2023-04-08",
  //     endDate: "2023-04-15"
  //   },
  //   statusId: 1,
  // },
  // {
  //   nomenclatureId: 500000429792,
  //   carId: "K294BC/196",
  //   production: {
  //     kind: "ЦИНК ЦВО ПАКЕТ",
  //     size: 20.5,
  //     unitFormat: "Т",
  //   },
  //   pass: {
  //     startDate: "2023-04-08",
  //     endDate: "2023-04-15"
  //   },
  //   statusId: 1,
  // },
  // {
  //   nomenclatureId: 500000429794,
  //   carId: "X329EX/797",
  //   production: {
  //     kind: "КЛИНКЕР",
  //     size: 30,
  //     unitFormat: "Т",
  //   },
  //   pass: {
  //     startDate: "2023-04-08",
  //     endDate: "2023-04-15"
  //   },
  //   statusId: 1,
  // },
];

export const externalParkingData = [
  {
    nomenclatureId: 500000429795,
    carId: "Y733XK/174",
    production: {
      kind: "КЛИНКЕР",
      size: 30,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429796,
    carId: "T335AX/797",
    production: {
      kind: "ЦИНК ЦВО ПАКЕТ",
      size: 20.5,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429797,
    carId: "T367AX/797",
    production: {
      kind: "СПЛАВ ЦА04 БЛОК 1Т",
      size: 21,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429802,
    carId: "Y505EM/797",
    production: {
      kind: "СПЛАВ ЦА04 БЛОК 1Т",
      size: 21,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429893,
    carId: "A419AH/774",
    production: {
      kind: "КАДМИЙ КД0",
      size: 500,
      unitFormat: "КГ",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429899,
    carId: "Y401BE/774",
    production: {
      kind: "КЛИНКЕР",
      size: 30,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429900,
    carId: "Y550BE/774",
    production: {
      kind: "КЛИНКЕР",
      size: 30,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
  {
    nomenclatureId: 500000429901,
    carId: "P227HA/45",
    production: {
      kind: "КЛИНКЕР",
      size: 30,
      unitFormat: "Т",
    },
    pass: {
      startDate: "2023-04-08",
      endDate: "2023-04-15"
    },
    statusId: 1,
  },
]

export const INTERNAL_PARKING_COLUMN_ID = 0;
export const INVITE_TO_TERRIOTY_COLUMN_ID = 1;
export const EXTERNAL_PARKING_COLUMN_ID = 2;
export const NORTH_LOADING_COLUMN_ID = 3;
export const SOUTH_LOADING_COLUMN_ID = 4;

export const columnsFromBackend = {
  [INTERNAL_PARKING_COLUMN_ID]: {
    title: `Внутренняя стоянка`,
    items: internalParkingData,
  },
  [INVITE_TO_TERRIOTY_COLUMN_ID]: {
    title: `Приглашены на внутреннюю стоянку`,
    items: [],
  },
  [EXTERNAL_PARKING_COLUMN_ID]: {
    title: `Внешняя стоянка`,
    items: externalParkingData,
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
