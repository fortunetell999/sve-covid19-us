// 숫자 천 단위마다 콤마
function number(num) {
  if (num === null || num === undefined) {
    return 'unknown';
  }
  return num.toLocaleString();
}

export default { number };
