import { getPadTime } from "./getPadTime";

export const getDateString = (date?: string) => {
  let currentDate = date ? new Date(date) : new Date()
  const x = new Date()
  const string = currentDate.getFullYear()
    + '-' + getPadTime(currentDate.getMonth() + 1)
    + '-' + getPadTime(currentDate.getDate())
    + ' ' + getPadTime(currentDate.getHours())
    + ':' + getPadTime(currentDate.getMinutes())
    + ':' + getPadTime(currentDate.getSeconds());

  return string
}
