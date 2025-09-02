// parse "dd/mm/yyyy" -> Date
function parseDMY(str) {
  const [d,m,y] = str.split('/').map(Number);
  return new Date(y, m-1, d); // tháng 0-based
}

// kiểm tra cùng ngày (cùng dd/mm/yyyy)
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

const today = new Date(); // ngày hiện tại
const birthday = parseDMY("8/09/2025");

if (isSameDay(today, birthday)) {
  // hôm nay đúng sinh nhật (cùng ngày-tháng-năm)
  //window.location.href = "./youtube.com"
} else {
  
}

function checkOrientation() {
  if (window.innerWidth < window.innerHeight) {
    // Đang ở chế độ dọc
    document.getElementById("rotate-warning").style.display = "flex";
    document.querySelector(".container").style.display = "none";
  } else {
    // Đang ở chế độ ngang
    document.getElementById("rotate-warning").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
}

// Kiểm tra ban đầu
checkOrientation();

// Theo dõi khi xoay màn hình
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

