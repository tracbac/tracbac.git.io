listURL = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiJ8zbiCtB58bfcF3tHN81zMstI59P3B8zQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSqLw3I19WEdkNlbNVkZzllQ_LLKPyjJvfQ&usqp=CAU",
    "https://cdn.bongdaplus.vn/Assets/Media/2021/10/25/26/Brighton.jpg",
    "https://static.bongda24h.vn/medias/original/2020/8/4/Brighton-and-Hove-Albion-F.C.jpg",
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
  