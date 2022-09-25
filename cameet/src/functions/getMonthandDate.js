/**
 *
 * @param {*} day yyyy-mm-dd형태
 * @returns mm월 dd일 출력
 */
export default function getMonthandDate(day) {
  const args = day.split("-");
  return `${args[1]}월 ${args[2]}일`;
}
