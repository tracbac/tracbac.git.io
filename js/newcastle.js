listURL = [
    "https://cdnthumb.thethaovanhoa.vn/ha_w/300/https@@$$cdnmedia.thethaovanhoa.vn/Upload/OWfOkd9XEN4OJqEXbaTxg/files/2021/11/17/new1.jpg",
    "https://cdn.baogiaothong.vn/upload/images/2021-4/article_img/2021-11-27/img-bgt-2021-link-xemarrsenal-vong13-1638011326-width615height409.jpg",
    "https://worldbongda.com/wp-content/uploads/2021/04/thanh-vien-newcastle-united-1024x576.jpg",
    "https://img.nhandan.com.vn/Files/Images/2021/04/04/Newcastle-1617550462721.jpg",
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
  