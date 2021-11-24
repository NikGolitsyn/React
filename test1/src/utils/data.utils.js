export const Rows = Array(5)
  .fill('id')
  .map((el, index) => el + (index + 1));

export const Columns = Array(5)
  .fill('id')
  .map((el, index) => el + (index + 1));

export const getSize = (gameMode, fieldsSize) => {
  switch (gameMode) {
    case 'easyMode': {
      const size = fieldsSize[0].field;
      return { width: `${size}px`, height: `${size}px` };
    }
    case 'normalMode': {
      const size = fieldsSize[1].field;
      return { width: `${size}px`, height: `${size}px` };
    }
    case 'hardMode': {
      const size = fieldsSize[2].field;
      return { width: `${size}px`, height: `${size}px` };
    }

    default:
      return null;
  }
};
