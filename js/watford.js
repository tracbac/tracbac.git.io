listURL = [
    "https://image.vtc.vn/resize/th/upload/2021/11/20/watford-man-utd-23123478.JPG",
    "https://congluan.ex-cdn.com/resize/700x400/files/news/2021/11/29/nhan-dinh-tran-watford-vs-chelsea-2h30-ngay-2-12-195249.jpg",
    "https://cdnmedia.webthethao.vn/uploads/2021-08-12/watford.jpg",
    "https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2021_04_25/skysports-watford-2504.jpg",
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
  