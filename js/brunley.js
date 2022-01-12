listURL = [
    "https://cdnmedia.thethaovanhoa.vn/Upload/wCPbdqwgmrVWEZatr1gVg/files/2021/08/burnley.jpg",
    "https://cdnmedia.webthethao.vn/uploads/2021-08-14/Burnley.jpg",
    "https://media.bongdanet.vn/application/admin/image/12.09.2021/nhan-dinh-soi-keo-everton-vs-burnley-2h-ngay-14-9_1631386396.jpg",
    "https://media.bongdanet.vn/application/admin/image/03.12.2020/Burnley-vs-Everton.jpg",
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
  