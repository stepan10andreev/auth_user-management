export const findRepeatElement = <T extends { [key: string]: any }>(array: T[], prop: string, value: string) => {
  const isFind = array.find((elem) => elem[prop] === value);
  return isFind ? true : false;
}
