// 1. chuyển một chuỗi bất kì thành một chuỗi viết hoa chữ cái đầu tiên
function firstUppercase(str){
    let newstr = str.toLowerCase();
   let newstrArr = newstr.split(" ");
  let conzult = "";
  for (let i = 0; i < newstrArr.length; i++){ 
    conzult += newstrArr[i].replace(newstrArr[i].charAt(0), newstrArr[i].charAt(0).toUpperCase()) + " ";
  }
  return conzult;
}
// gặp vấn đề về dấu cách sau cùng làm cho nháy ở trên bị thưa?

// 2. chuyển một chuỗi thành dạng spinal Case. vd hello-world
