import { getPadTime } from "./getPadTime";

export const getDateString = () => {
  const NOW = new Date();
  const string = NOW.getFullYear()
    + '-' + getPadTime(NOW.getMonth() + 1)
    + '-' + getPadTime(NOW.getDate())
    + ' ' + getPadTime(NOW.getHours())
    + ':' + getPadTime(NOW.getMinutes())
    + ':' + getPadTime(NOW.getSeconds());

  return string
}
