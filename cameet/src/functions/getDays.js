/**
 *
 * @param {*} day yyyy-mm-dd형태
 * @returns 요일 정보(월,화,수...등등)
 */
export function getDays(day) {
  const args = day.split("-");
  args[1] = args[1] - 1;
  const newday = new Date(args[0], args[1], args[2]);
  switch (newday.getDay()) {
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      return "일";
  }
}
