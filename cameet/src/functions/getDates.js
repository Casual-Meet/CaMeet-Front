/**
 *
 * @returns yyyy-mm-dd 형태의 14일치 배열 return함
 */
export default function getDates() {
  const dates = [];
  const today = new Date();
  for (var x = 0; x < 15; x++) {
    let nextdates = new Date();
    nextdates.setDate(today.getDate() + x);
    const year = nextdates.getFullYear();
    // 10보다 작은 경우 0을 앞에 붙여줌
    const month =
      nextdates.getMonth() + 1 < 10
        ? "0" + (nextdates.getMonth() + 1)
        : nextdates.getMonth() + 1;

    // 10보다 작은 경우 0을 앞에 붙여줌
    const day =
      nextdates.getDate() < 10
        ? "0" + nextdates.getDate()
        : nextdates.getDate();

    const dateString = year + "-" + month + "-" + day;

    dates.push(dateString);
  }
  return dates;
}
