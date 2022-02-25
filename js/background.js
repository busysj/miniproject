const images = ["1.jpg", "2.jpg", "3.jpg"];

// let index = Math.floor(Math.random() * images.length);
// const chooseImage = images[index];
const chooseImage = images[Math.floor(Math.random() * images.length)]; // 이미지 파일이름을 랜덤으로 가져옴
const bodyBackground = document.querySelector("body");

//CSS style을 이용해서 bodyBackground에 추가
bodyBackground.style.background = `url(/img/${chooseImage})`; //이미지 파일이름 추가
// style =  "background : url="/img/1.jpg"; "
