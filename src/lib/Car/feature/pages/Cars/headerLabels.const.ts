import { CarsTableHeaderLabel } from '@Car/Ui';

export const headerLabels: CarsTableHeaderLabel[] = [
  {
    label: 'Image',
    property: 'pictureUrl',
    isClickable: false,
    colSpan: 3,
  },
  {
    label: 'Reg Number',
    property: 'regNumber',
    isClickable: true,
    colSpan: 2,
  },
  {
    label: 'Model',
    property: 'name',
    isClickable: true,
    colSpan: 2,
  },
  {
    label: 'Brand',
    property: 'brand',
    isClickable: true,
    colSpan: 2,
  },
  {
    label: 'Actions',
    isClickable: false,
    colSpan: 1,
  },
];
