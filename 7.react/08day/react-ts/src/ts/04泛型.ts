export default 1;
//
function fn(length: number, value: any): Array<any> {
  let res = [];
  for (var i = 0; i < length; i++) {
    res[length] = value;
  }
  return res;
}
fn(3, '2');
