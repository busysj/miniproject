const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

const savememo = [
  "미리 만들어진 메모1",
  "미리 만들어진 메모2",
  "한번 더 추가합니다",
];

const savememoform = [
  { memo: "메모", time: "12:08" },
  { memo: "메모2", time: "12:09" },
];

for (let m of savememo) {
  let memo = document.createElement("div");
  memoBoard.appendChild(memo);
  memo.innerHTML = m;
}

function memoFormSubmit(event) {
  event.preventDefault();
  console.log(memoInput.value);

  // 새로운 요소(태그)를 만들어서 memoBoard(div요소) 추가
  let memo = document.createElement("div"); // createElement를 통해 요소 생성

  // memoBoard에 appendChild()로 요소 추가
  memoBoard.appendChild(memo);
  // 추가된 memo 요소에 html값 추가
  memo.innerHTML = memoInput.value + "<br>" + getClock();
  memoInput.value = "";
  memoInput.autofocus = true;
}

// memoForm.addEventListener("submit", memoFormSubmit);

$("#memo-form").on("submit", function (event) {
  event.preventDefault();

  $("#memo-board").append(
    $("<div>").html(
      $("#memo-form input:first").prop("value") + "<br>" + getClock()
    )
  );
  $("#memo-form input:first").prop("value", "");
});
