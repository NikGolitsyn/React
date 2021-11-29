export const Rows = amount =>
  Array(amount)
    .fill('id')
    .map((el, index) => el + (index + 1));

export const Columns = amount =>
  Array(amount)
    .fill('id')
    .map((el, index) => el + (index + 1));

