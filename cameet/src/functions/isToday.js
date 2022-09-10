export default function isToday(day) {
  const args = day.split("-");
  const today = new Date();
  const year = today.getFullYear();
  // 10보다 작은 경우 0을 앞에 붙여줌
  const month =
    today.getMonth() + 1 < 10
      ? "0" + (today.getMonth() + 1)
      : today.getMonth() + 1;
  // 10보다 작은 경우 0을 앞에 붙여줌
  const d = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
  // Date객체 함수의 반환값은 숫자이므로 String으로 변환해줌
  const todayarr = [String(year), String(month), String(d)];
  if (JSON.stringify(args) === JSON.stringify(todayarr)) {
    return true;
  }
  return false;
}
