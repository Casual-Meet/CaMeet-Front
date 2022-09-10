export default function getMonthandDate(day) {
  const args = day.split("-");
  return `${args[1]}월 ${args[2]}일`;
}
