const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  // 숫자값으로 받아오면 일의 자리수는 한자리로 표현
  // 1 >> 01 padStart(); >> String 객체에서 사용가능
  const hours = String(date.getHours()).padStart(2, "0"),
    minutes = String(date.getMinutes()).padStart(2, "0"),
    seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

clock.innerHTML = getClock();

setInterval(getClock, 1000);
