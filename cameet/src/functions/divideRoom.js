export default function divideRoom(obj) {
  let result = {};
  obj.forEach((one) => {
    if (result[one.room_date] in result) {
      result[one.room_date].push(one);
    } else {
      result[one.room_date] = [one];
    }
  });
  return result;
}
