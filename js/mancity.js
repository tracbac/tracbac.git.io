listURL = [
    "https://media-cdn.laodong.vn/storage/newsportal/2021/11/30/979411/Man-City.jpg?w=414&h=276&crop=auto&scale=both",
    "https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2021_01_14/manchestercitypremierleague1401.jpg",
    "https://img.nhandan.com.vn/Files/Images/2021/05/12/a1-1620812774116.jpg",
    "https://meta.vn/Data/image/2021/07/17/lich-thi-dau-manchester-city-2.jpg",
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
  