listURL = [
    "https://media-cdn.laodong.vn/storage/newsportal/2021/12/1/979945/Man-United.jpg?w=720&crop=auto&scale=both",
    "https://nld.mediacdn.vn/291774122806476800/2021/12/3/bung-no-1638486717906328764450.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWgcM-ozIz3BMyynbe5Cgov15RLPUGEkFNw&usqp=CAU",
    "https://vnn-imgs-f.vgcloud.vn/2021/08/07/16/lich-thi-dau-cua-man-utd-2021-2022-1.jpg",
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
  