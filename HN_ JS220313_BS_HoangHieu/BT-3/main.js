
let months = +prompt("Xin mời nhập tháng");
let year = +prompt("Xin mời nhập Năm");
switch (months) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("số ngày trong tháng đó là 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("số ngày trong tháng đó là 30");
  case 2:
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      alert("số ngày trong tháng đó là 29");
    } else {
      alert("số ngày trong tháng đó là 28");
    }

  default:
    
    break;
}
