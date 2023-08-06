export const inputOnlyLatin = (value: string) => {
  return value.replace(/[^a-z\s]/gi, '');
};
