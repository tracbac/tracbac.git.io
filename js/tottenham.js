listURL = [
  "https://cdn-amz.fadoglobal.io/images/I/81WlPmLcqXL._SR720,720_.jpg",
  "https://i2-prod.football.london/incoming/article22297038.ece/ALTERNATES/s615/0_Team-36.jpg",
  "https://baoquocte.vn/stores/news_dataimages/quangdao/082019/01/11/tottenham-hotspur-binh-minh-cua-ga-trong_1.jpg",
  "https://cdnmedia.webthethao.vn/uploads/2021-07-15/Tottenham.jpg",
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
