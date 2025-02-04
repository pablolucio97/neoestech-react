export type IOption = {
  value: number[];
  label: string;
};

export const mockedArrays: IOption[] = [
  {
    label: "[1, 1, 2, 3, 3]",
    value: [1, 1, 2, 3, 3],
  },
  {
    label: "[1, 1, 4, 4, 5, 5]",
    value: [1, 1, 4, 4, 5, 5],
  },
  {
    label: "[1, 2, 3, 4, 4, 4, 5, 6, 6]",
    value: [1, 2, 3, 4, 4, 4, 5, 6, 6],
  },
];
