// -------------------------------------------------------------------------------

/** Filter Dropdown Labels */
export const ascending = 'asc';
export const descending = 'desc';
export const size = 'size';
export const name = 'productName';
export const price = 'price';
export const defaultSort = 'price asc';

/** Default Render Messages */
export const defaultLoadingMessage =
  'Loading... if it is taking too long, please load again or try later';
export const defaultErrorMessage =
  'Something went wrong. Please try again later.';

/** Size Label Array */
const orderSize = ['XS', 'S', 'M', 'L', 'XL'];

// -----------------------------------------------------------------------------------
// Sorting Logic
// 1. newCardList() called to create new card array
// 2. compareValues() [and possibly compareClothingSizes()] called to sort new array
// 3. updateObject() called to update state in layout.js
// -----------------------------------------------------------------------------------

/** Immutable state updation */
export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

/** Size Sorting Helper Function */
const compareClothingSizes = (a, b) => {
  if (orderSize.indexOf(a[0]) > orderSize.indexOf(b[0])) {
    return 1;
  }
  if (orderSize.indexOf(a[0]) < orderSize.indexOf(b[0])) {
    return -1;
  }
  return 0;
};

/** Sorting Function */
export const compareValues = (key, order = 'asc') =>
  function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    // Utilizes helper function if 'size' attribute
    if (key === 'size') {
      comparison = compareClothingSizes(varA, varB);
    } else if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };

/** Provides sorted new card list */
export const newCardList = (arr, sortingValue) => {
  if (sortingValue === '') {
    return arr;
  }
  const [sortKey, sortOrder] = sortingValue.split(' ');
  return arr.sort(compareValues(sortKey, sortOrder));
};
