/**
 * 
 * @param {*} obj -> data object 날짜가 모두 같이 되어있음
}
 * @returns result => 날짜별 배열로 나누어서 return  
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
