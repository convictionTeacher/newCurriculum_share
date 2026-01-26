/**
 * Lesson5: ループ処理 - 課題提出用ファイル
 * このファイルに各課題の解答を記述してください
 */
// ===================================
// L5-S1-1: for文を使って、1から5までの数字をコンソールへ出力してください。
// ===================================
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// ===================================
// L5-S1-2: for文を使って、10から1までカウントダウンを'js-countDown-step1'要素のテキストに表示してください。
// ===================================
const q1 = document.querySelector("#q1");
const countItem = q1.querySelector(".js-countDown-step1");

for (let i = 10; i > 0; i--) {
  countItem.textContent += i;
}
// ===================================
// L5-S1-3: 再代入可能な変数を作り数値型で初期化、for文を使って1から10までの数字を順番に足し、合計を'js-number-step1'へ出力してください。
// ===================================
const numberItem = q1.querySelector(".js-number-step1");
let sumCount = 0; // 数値型で初期化（文字列で初期化すると 1 + 2 も "1" + 2 → "12" になってしまう）
for (let i = 0; i <= 10; i++) {
  sumCount += i; // ループ内で sum += i すると順番に足していく
}
numberItem.textContent = sumCount;
// ===================================
// L5-S2-1: すべての'.js-btn-step2'要素を取得しfor文を使ってコンソールに出力してください。
// ===================================
const q2 = document.querySelector("#q2");
const buttonItems = q2.querySelectorAll(".js-btn-step2");

for (let i = 0; i < buttonItems.length; i++) {
  // <= はundefinedが発生するため不正解
  console.log(buttonItems[i]);
}
// ===================================
// L5-S2-2: for文を使ってすべての'.js-btn-step2'要素のテキストを「更新」に変更してください。
// ===================================
for (let i = 0; i < buttonItems.length; i++) {
  buttonItems[i].textContent = "更新";
}
// ===================================
// L5-S2-3: for文を使ってすべての'.js-btn-step2'要素に'.is-active'を付与してください。
// ===================================
for (let i = 0; i < buttonItems.length; i++) {
  buttonItems[i].disabled = true;
}
// ===================================
// L5-S3-1: while文を使って、0から10以下の数字を'.js-num-step3'要素のテキストに表示してください。
// ===================================
const q3 = document.querySelector("#q3");
const inputItem = q3.querySelector(".js-num-step3");
let count = 0;

while (count <= 10) {
  inputItem.textContent += count;
  count++;
}
// ===================================
// L5-S3-2: while文とprompt()を使って、ダイアログに文字が入力されるまで入力を求めてください。
//          入力後に'.js-text-step3'要素のテキストへ入力された文字を表示してください。
// ===================================
const q3Button = q3.querySelector(".js-button-step3");

q3Button.addEventListener("click", () => {
  let inputPrompt = "";
  while (inputPrompt === "") {
    inputPrompt = prompt("文字を入力してください。");
  }
});
// ===================================
// L5-S4-1: do-while文を使って、1から5まで数字を'.js-num-step4'要素のテキストに表示してください。
// ===================================
const q4 = document.querySelector("#q4");
const q4Text = q4.querySelector(".js-num-step4");
let q4Count = 1;
q4Text.textContent = "";

do {
  q4Text.textContent += q4Count; //最低1回は必ず実行されるため表示が先
  q4Count++;
} while (q4Count <= 5);

// ===================================
// L5-S4-2: do-while文を使って、最初に 必ず1回「利用規約を確認しましたか？」と表示する。<br />
//          OKボタンを押した場合は処理を終了、キャンセルボタンを押した場合は、再度「利用規約を確認しましたか？と表示する。
// ===================================
const q4Button = q4.querySelector(".js-button-step4");

q4Button.addEventListener("click", () => {
  let checked;
  do {
    checked = confirm("利用規約を確認しましたか？");
  } while (checked === false);
});
// ===================================
// L5-S4-1: for文を使って1から20までループし、continueを使って偶数のみコンソールに表示してください。<br />
//          また、15より大きい数になったらbreakを使ってループを終了してください。
// ===================================
for (let i = 1; i < 20; i++) {
  // 奇数ならスキップ
  if (i % 2 !== 0) {
    continue;
  }
  // 15を超えたらループを止める
  if (i > 15) {
    break;
  }
  console.log(i);
}
// ===================================
// L5-S4-2: for文を使って、data-status 属性を持つ要素を1つずつ確認してください。
//          data-status の値が stop になっている要素を見つけたら、その要素をコンソールに表示し、breakを使ってループを終了してください。
// ===================================
const q5 = document.querySelector("#q5");
const q5item = q5.querySelectorAll("[data-status]");
for (let i = 0; i < q5item.length; i++) {
  const q5status = q5item[i].dataset.status;
  if (q5status == "stop") {
    console.log(q5item[i]);
    break;
  }
}

// ===================================
// L5-S5-1: 九九表の表示
// ===================================
// 課題: ネストされたループを使って、九九表（1の段～9の段）を画面に表示してください

// ===================================
// L5-S5-2: ネストされたループで三角形を描画
// ===================================
// 課題: ネストされたループを使って、以下のような三角形を画面に表示してください
// *
// **
// ***
// ****
// *****

// ===================================
// L5-S6-1: 配列の要素を順番に表示
// ===================================
// 課題: 以下の配列の各要素を、ループを使って画面に表示してください
// const animals = ["犬", "猫", "鳥", "魚", "ウサギ"];

// ===================================
// L5-S6-2: 配列の要素を加工して表示
// ===================================
// 課題: 以下の配列の各要素に「が好きです」を追加して、画面に表示してください
// const fruits = ["りんご", "バナナ", "みかん"];

// ===================================
// L5-S7-1: 配列の合計と平均を計算
// ===================================
// 課題: 以下の配列の合計と平均を計算して画面に表示してください
// const scores = [85, 92, 78, 90, 88];

// ===================================
// L5-S7-2: 条件に合う要素の個数を数える
// ===================================
// 課題: 以下の配列から80点以上の要素の個数を数えて画面に表示してください
// const scores = [75, 82, 68, 91, 88, 76, 95];

// ===================================
// L5-S9-1: 総合演習 - フォームのバリデーション（入力チェック）機能実装
// ===================================
// ① 送信ボタン (.js-button-step9) をクリックしたときに処理を開始する。
// ② for文を使って、3つの入力欄 (.js-input-step9) を上から順に確認する。
// ③ もし値が空（""）だったら
// ・その入力欄に'.is-active'を追加する。
// ・エラーメッセージ (.js-error-step9) から'.u-hide'を削除して表示する。
// ・残りの項目はチェックせずに終了してください。
//
// 各要素の取得
const submitBtn9 = document.querySelector(".js-button-step9");
const inputs9 = document.querySelectorAll(".js-input-step9");
const errorMessage9 = document.querySelector(".js-error-step9");

submitBtn9.addEventListener("click", function () {
  // 毎回チェックの前に、一旦リセット（前回のエラー表示を消す）
  // errorMessage9.classList.add("u-hide");
  // for (let j = 0; j < inputs9.length; j++) {
  //   inputs9[j].classList.remove("is-active");
  // }
  for (let i = 0; i < inputs9.length; i++) {
    if (inputs9[i].value === "") {
      inputs9[i].classList.add("is-active");
      errorMessage9.classList.remove("u-hide");
      break;
    }
  }
});
