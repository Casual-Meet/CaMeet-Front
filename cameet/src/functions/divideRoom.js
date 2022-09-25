/**
 * 
 * @param {*} obj -> 모든 날짜의 방 정보가 한번에 뭉쳐져있음
}
 * @returns result => 날짜별 방정보(배열)
 */

export default function divideRoom(obj) {
  let result = {};
  obj.forEach((one) => {
    if (one.room_date in result) {
      result[one.room_date].push(one);
    } else {
      result[one.room_date] = [one];
    }
  });
  return result;
}
