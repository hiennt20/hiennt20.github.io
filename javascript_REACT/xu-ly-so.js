// thể tích hình cầu
function theTichHinhCau(r) {
  let V = 0;
  //  V = 3/4*3.14*r*r*r;
  //  V = 3/4*3.14*r**3;
  V = 3 / 4 * Math.PI * Math.pow(2, 3);
  return V;
}

// 2. tính tổng các số nguyên ở giữa
function tongSoNguyenNamGiu(a, b) {
  let tong = 0;
  if (a > b) {
    for (let i = b + 1; i < a; i++) {
      tong = tong + i;
    }
  } else {
    for (let i = a + 1; i < b; i++) {
      tong = tong + i;
    }
  }
  return tong;
}

// 3. kiểm tra một số có phải là số nguyên tố hay không
// function isPrime(a){
//     let ketqua = "true";
//     if (a < 1){
//       ketqua = "false";
//     }else{
//         for( let i = 2; i <= Math.sqrt(a); i++){
//             if(a%i == 0){
//                 ketqua = "false";
//                 return ketqua;
//             }esle{
//                 return ketqua;
//             }
//         }

//     }
//     return ketqua;
// } 
// cách thông thường
function soNguyento(a) {
  let soNguyen = Number.isInteger(a);
  let ketqua = "true";
  if (soNguyen != true || (soNguyen == true && a <= 1)) {
    ketqua = "false";
  } else {
    for (let i = 2; i <= a - 1; i++) {
      if (a % i == 0) {
        return (ketqua = "false");
      }
    }
    return ketqua;
  }
  return ketqua;
}
// cách theo căn bậc hai
function soNguyento(a) {
  let soNguyen = Number.isInteger(a);
  let ketqua = "true";
  if (soNguyen != true || (soNguyen == true && a <= 1)) {
    ketqua = "false";
  } else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i == 0) {
        return (ketqua = "false");
      }
    }
    return ketqua;
  }
  return ketqua;
}
// thầy chữa bài
function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 4. cho số nguyên dương bất kì, tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
// thầy chữa bài
function sumPrime(numb){
  let conzult = 0;
  for (let i = 1; i <= numb; i++){
    conzult += i;
  }
  return conzult;
}
// 5. cho một số nguyên dương, tính tổng tất cả các ước số của số đó

function tongUocso(numb) {
  let conzult = 0;
  for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
      conzult += i;
    }
  }
  return conzult;
}