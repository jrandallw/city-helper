export const capitalizeText = (string: string) => {
  if (typeof string !== 'string') {
    throw Error('capitalizeText expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
