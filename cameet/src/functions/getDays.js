export function getDays(day) {
  const args = day.split("-");
  const newday = new Date(args[0], args[1], args[2]);
  console.log(newday);
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
