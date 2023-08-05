export const isEmptyValue = (value: string) => {
  const result = value.length > 0 ? false : true;
  return result
}

export const foundEmptyValue = <T extends object>(FormData: T) => {
  for (const value of Object.values(FormData)) {
    if (isEmptyValue(value)) {
      return true;
    }
  }
  return false;
}
