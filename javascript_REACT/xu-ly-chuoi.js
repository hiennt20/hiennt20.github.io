// 1. chuyển một chuỗi bất kì thành các từ đầu tiên trong chuỗi viết hoa chữ cái đầu tiên của mỗi từ
function firstUppercase(str) {
  // chuyển chuỗi sang viết thường
  let newstr = str.toLowerCase();
  // tách chuỗi thành mảng các từ
  let newstrArr = newstr.split(" ");
  let conzult = "";
  for (let i = 0; i < newstrArr.length; i++) {
    conzult +=
      newstrArr[i].replace(
        newstrArr[i].charAt(0),
        newstrArr[i].charAt(0).toUpperCase()
      ) + " ";
  }
  return conzult;
}

// bài của trí sau bước đã split
function firstUppercaseTri(str) {
  // chuyển chuỗi sang viết thường
  let newstr = str.toLowerCase();
  // tách chuỗi thành mảng các từ
  let newstrArr = newstr.split(" ");
  let newArray = newstrArr.map(function (item) {
    return item.charAt(0).toUpperCase() + item.trim().slice(1);
  });
  // chuyển mảng trở về chuỗi bằng cách nối các phần tử với nhau bởi dấu cách
  return newArray.join(" ");
}
/* testcase
firstUppercase("HELLO world ");

vđ: kí tự cuối với dấu nháy có khoảng cách
*/

// thầy chữa bài
function vietHoaChuCaiDau(string) {
  // Chuyển chuỗi sang viết thường
  string = string.toLowerCase();

  // Tách chuỗi thành mảng các từ
  let array = string.split(" ");

  // Lặp qua từng phần tử trong mảng, và viết hoa chữ cái đầu tiên.
  let newArray = array.map(function (item) {
    return item.charAt(0).toUpperCase() + item.trim().slice(1);
  });

  // Chuyển mảng trở về chuỗi bằng cách nối các phần tử với nhau bởi dấu cách
  return newArray.join(" ");
}
/*
test case
vietHoaChuCaiDau("HELLO world");
vietHoaChuCaiDau("");
vietHoaChuCaiDau("hello world");
vietHoaChuCaiDau("HELLO  world  ");
*/

// 2. chuyển một chuỗi bất kì thành spinal case
function spinalString(str) {
  let newstr = str.toLowerCase();
  let conzult = "";
  conzult += newstr.replace(/ /g, "-");
  return conzult;
}
// thầy chữa bài
//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function chuyenDoi(string) {
  // Chuyển chuỗi sang viết thường
  string = string.toLowerCase();

  // Tách chuỗi thành mảng các từ
  let array = string.split(" ");

  // Lọc bỏ các phần tử rỗng
  array = array.filter((item) => item != "");

  // Chuyển mảng trở về chuỗi bằng cách nối các phần tử với nhau bởi dấu gạch ngang
  return array.join("-");
}
/*
chuyenDoi("HELLO world");
chuyenDoi("");
chuyenDoi("hello world");
chuyenDoi("HELLO  world  ");
*/

// vđ: nếu testcase có dấu ,
// nếu nhiều dấu cách một chỗ
//   vd my name is hien, nice to meet you
// " heeloo    world"

// 3. kiểm tra chuỗi đối xứng, không phân biệt hoa thường, khoảng trắng. vd: racec Car -> true; hello world -> false
//  đã làm ngày trước
function isSymmectricString(str) {
  // tạo chuỗi 1 mới không có khoảng trắng và viết thường
  let newstr = str.split("");
  let noWhiteSpace = newstr.filter((word) => word != 0);
  let rezulStr1 = noWhiteSpace.join("").toLowerCase();
  // tạo chuỗi ngược của chuỗi 1
  let rezulStr2 = "";
  for (let i = rezulStr1.length - 1; i >= 0; i--) {
    rezulStr2 += rezulStr1[i];
  }
  // return rezulStr1.length;
  // return rezulStr2;
  if (rezulStr2 === rezulStr1) return true;
  else return false;
}

// thầy chữa bài
// bài của Trí
function isSymmectricStringTri(string) {
  string = string.toLowerCase().split(" ").join("");
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}
/* testcase
"RACE car"
"hello world"
"aba"
"ababab"
"aaabbb"
"12354321"
"123 4543 21"
"1 2 3 4 5 4 3 2 1"
*/

/*4. Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
 */
function checkString(str1, str2) {
  let splitStr1 = str1.toLowerCase();
  let splitStr2 = str2.toLowerCase().split("");
  for (let i = 0; i <= splitStr2.length - 1; i++) {
    if (splitStr1.indexOf(splitStr2[i]) == -1) {
      return false;
    }
  }
  return true;
}
/* testcase
"HELLO WORLD" "how" T "ww" F 
"my name is" "nam" T "iiii" F
"hien" "my name IS HIEN" F "NHIEN" F
"HIEN 1993" "hi   ne 9931" "hine 99312"
"my     name"  ""   "  "
"     "   " "


// vd: nếu chuỗi 2 trùng thì kq sai, chưa kt được vd "ww"
*/
// bài của trí
function checkString(str1, str2) {
  let ketQua = true;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Nếu chuỗi 2 dài hơn chuỗi 1 thì trả về false
  if (str2.length > str1.length) {
    return false;
  }

  // Lặp qua các phần tử trong chuỗi thứ 2
  for (let i = 0; i < str2.length; i++) {
    // Kiểm tra xem ký tự đang lặp có nằm trong chuỗi 1 hay không
    for (let j = 0; j < str1.length; j++) {
      // Nếu có
      if (str1[j] == str2[i]) {
        ketQua = true;
        
        // Bỏ ký đã tồn tại ra khỏi chuỗi 1
        let a = str1.slice(0, j - 1);
        let b = str1.slice(j + 1);
        str1 = a + b;
        
        // Dừng vòng lặp chuỗi 1
        break;
      } 
      // Nếu không thì trả về false
      else {
        return false;
      }
    }
  }
  
  return ketQua;
}
/*
checkString("HELLO world", "how");
checkString("HELLO world", "ww");
checkString("tri dep trai", " trai");
checkString("tri dep trai", "gai");
checkString("an", "an dep trai");
checkString("123", "1234");
checkString("xyz", "");
checkString("", "abc");
checkString("     ", "x");
checkString("     ", " ");
*/

// bài của khánh
function handleStr4(str1, str2) {
  // Chuyển chuỗi 1 thành viết thường
  let newStr1 = str1.toLowerCase();
  
  // Chuyển chuỗi 2 thành viết thường và chuyển thành mảng
  let newStr2 = str2.toLowerCase().split("");
  
  // Lặp qua các ký tự của chuỗi 1
  for (let i = 0; i < newStr1.length; i++) {
    // Tìm vị trí của ký tự hiện tại trong mảng newStr2
    let index = newStr2.indexOf(newStr1[i]);

    // Nếu mảng newStr2 bị cắt hết ký tự
    if (newStr2.length === 0) return true;
    
    // Nếu ký tự có tồn tại trong newStr2 thì xóa ký tự đó ra khỏi newStr2
    if (index != -1) {
      newStr2.splice(index, 1);
    }
  }
  
  // Nếu sau khi cắt các ký tự tồn tại mà newStr2 vẫn còn thì là false
  if (newStr2.length > 0) return false;
}