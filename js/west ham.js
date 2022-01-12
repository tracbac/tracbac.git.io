listURL = [
    "https://nld.mediacdn.vn/291774122806476800/2021/11/8/west-ham--16363257536592133422747.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Rd_Xk8UD5FiOVDWFDcJifwJ7DSqXcl3vow&usqp=CAU",
    "https://static.bongda24h.vn/medias/standard/2021/2/21/ket-qua-west-ham-vs-tottenham-video-ngoai-hang-anh-2021.jpg",
    "https://trandau.net/wp-content/uploads/2021/08/West-Ham-United-1.jpg"
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
  