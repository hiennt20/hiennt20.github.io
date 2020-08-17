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
function soNguyenTo(a){
    
}