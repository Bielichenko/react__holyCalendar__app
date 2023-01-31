export function getMonthName(monthIndex: number) {
  switch (monthIndex) {
    case 0:
      return ['Jan', 'January'];
    case 1:
      return ['Feb', 'February'];
    case 2:
      return ['Mar', 'March'];
    case 3:
      return ['Apr', 'April'];
    case 4:
      return ['May', 'May'];
    case 5:
      return ['Jun', 'June'];
    case 6:
      return ['Jul', 'July'];
    case 7:
      return ['Aug', 'August'];
    case 8:
      return ['Sep', 'September'];
    case 9:
      return ['Oct', 'October'];
    case 10:
      return ['Nov', 'November'];
    case 11:
      return ['Dec', 'December'];
    default:
      return 'uknown';
  }
}
