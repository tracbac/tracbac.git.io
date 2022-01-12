listURL = [
    "https://static.bongda24h.vn/medias/original/2020/8/4/Cau-lac-bo-Leicester-City---Tong-quan-ve-CLB-Leicester-hinh-anh-goc-2.jpg",
    "https://hn.ss.bfcplatform.vn/thethaoso247/i-upload/editor/images/NICK%20T9/nickt11/nhan-dinh-soi-keo-southampton-vs-leicester-2h30-ngay-2-12-1.jpg",
    "https://media.bongdanet.vn/application/admin/image/24.11.2021/soi-keo-phat-goc-leicester-vs-legia-warsaw-3h00-ngay-26-11_1637770558.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-NoOEFFfZ8Xsr39Y8Ujf-pW1Y_wlW_UvXQ&usqp=CAU",
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
  