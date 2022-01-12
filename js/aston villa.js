listURL = [
    "https://media.congluan.vn/files/content/2021/12/03/nhan-dinh-tran-aston-villa-vs-leicester-city-23h30-ngay-512-095145633.jpg",
    "https://image.thanhnien.vn/w1024/Uploaded/2021/ycivopcg/2021_09_25/astonvilla-chupmanhinh_tkws.jpg",
    "https://jonnyalien.com/wp-content/uploads/2021/07/tieu-su-aston-villa-11-min.jpg",
    "https://cdnmedia.webthethao.vn/uploads/2021-08-06/aston-villa.jpg",
  ];
  
  let ele0 = document.getElementById("slideImg");
  ele0.style.backgroundImage = "url(" + listURL[0] + ")";
  let i = 0;
  function changeImg() {
    if (i === listURL.length - 1) {
      i = 0;
    } else {
      i++;
    }
    let ele = document.getElementById("slideImg");
    ele.style.backgroundImage = "url(" + listURL[i] + ")";
  }
  