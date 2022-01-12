listURL = [
    "https://cdn.bongdaplus.vn/Assets/Media/2021/11/28/77/hang-cong-liverpool.jpg",
    "https://media-cdn.laodong.vn/storage/newsportal/2021/10/2/959730/Liver.jpg?w=414&h=276&crop=auto&scale=both",
    "https://baoquocte.vn/stores/news_dataimages/quangdao/082019/08/09/liverpool-fc-giac-mo-ngoai-hang-anh-lieu-co-thanh-thuc.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_53.jpg/300px-Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_53.jpg",
]
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
  