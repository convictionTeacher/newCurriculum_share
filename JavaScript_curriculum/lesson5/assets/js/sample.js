/**
 * Lesson5: ループ処理 - 解答例ファイル
 */
// ===================================
// L5-S1-1:
// for文を使って、1から5までの数字をコンソールへ出力する。
// 出力例：1 2 3 4 5
// ===================================
function L5_S1_1() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

// ===================================
// L5-S1-2:
// for文を使って、9から1までカウントダウンを'js-countDown-step1'要素のテキストに表示する。
// 出力例：987654321
// ===================================
function L5_S1_2() {
  const countDown = document.querySelector('.js-countDown-step1');
  let result = '';
  for (let i = 9; i >= 1; i--) {
    result += i;
  }
  countDown.textContent = result;
}

// ===================================
// L5-S1-3:
// for文を使って1から10までの数字を順番に足し、合計を'js-number-step1'要素のテキストへ出力する。
// 出力例：55
// ===================================
function L5_S1_3() {
  const numberElement = document.querySelector('.js-number-step1');
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  numberElement.textContent = sum;
}

// ===================================
// L5-S2-1:
// すべての'.js-btn-step2'要素を全てまとめて取得して、for文で1つずつ取り出しコンソールに表示する。
// ===================================
function L5_S2_1() {
  const buttons = document.querySelectorAll('.js-btn-step2');
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
  }
}

// ===================================
// L5-S2-2:
// for文を使ってすべての'.js-btn-step2'要素のテキストを「更新」に変更する。
// ===================================
function L5_S2_2() {
  const buttons = document.querySelectorAll('.js-btn-step2');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "更新";
  }
}

// ===================================
// L5-S2-3:
// for文を使ってすべての'.js-btn-step2'要素にdisabled属性を付与する。
// ===================================
function L5_S2_3() {
  const buttons = document.querySelectorAll('.js-btn-step2');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// ===================================
// L5-S3-1:
// while文を使って、10から1までカウントダウンを画面に表示する。
// ===================================
function L5_S3_1() {
  const display = document.querySelector('.js-countdown-step3');
  let count = 10;
  let result = '';
  while (count >= 1) {
    result += count + ' ';
    count--;
  }
  display.textContent = result;
}

// ===================================
// L5-S3-2:
// while文を使って、0から10までの偶数のみを画面に表示する。
// ===================================
function L5_S3_2() {
  const display = document.querySelector('.js-even-step3');
  let num = 0;
  let result = '';
  while (num <= 10) {
    if (num % 2 === 0) {
      result += num + ' ';
    }
    num++;
  }
  display.textContent = result;
}

// ===================================
// L5-S4-1:
// do-while文を使って、条件を満たすまで処理を繰り返す。
// ===================================
function L5_S4_1() {
  const display = document.querySelector('.js-result-step4');
  let count = 1;
  let result = '';
  do {
    result += count + ' ';
    count++;
  } while (count <= 5);
  display.textContent = result;
}

// ===================================
// L5-S4-2:
// do-while文を使って、1から5までの数字を画面に表示する。
// ===================================
function L5_S4_2() {
  const display = document.querySelector('.js-numbers-step4');
  let num = 1;
  let result = '';
  do {
    result += num + ' ';
    num++;
  } while (num <= 5);
  display.textContent = result;
}

// ===================================
// L5-S5-1:
// 1から20までループし、偶数のみ表示する(continueを使用)。
// また、10より大きい数になったらループを終了する(breakを使用)。
// ===================================
function L5_S5_1() {
  const display = document.querySelector('.js-continue-step5');
  let result = '';
  for (let i = 1; i <= 20; i++) {
    if (i > 10) {
      break;
    }
    if (i % 2 !== 0) {
      continue;
    }
    result += i + ' ';
  }
  display.textContent = result;
}

// ===================================
// L5-S5-2:
// すべての'.js-item-stepFive'要素をループし、テキストが"特別"の要素を見つけたらループを終了し、「見つかりました」と画面に表示する(breakを使用)。
// ===================================
function L5_S5_2() {
  const items = document.querySelectorAll('.js-item-stepFive');
  const display = document.querySelector('.js-break-step5');
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent === "特別") {
      display.textContent = "見つかりました";
      break;
    }
  }
}

// ===================================
// L5-S6-1:
// ネストされたループを使って、九九表(1の段～9の段)を画面に表示する。
// ===================================
function L5_S6_1() {
  const display = document.querySelector('.js-multiplication-step6');
  let result = '';
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      result += i + ' × ' + j + ' = ' + (i * j) + '<br>';
    }
    result += '<br>';
  }
  display.innerHTML = result;
}

// ===================================
// L5-S6-2:
// ネストされたループを使って、以下のような三角形を画面に表示する。
// *
// **
// ***
// ****
// *****
// ===================================
function L5_S6_2() {
  const display = document.querySelector('.js-triangle-step6');
  let result = '';
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += '*';
    }
    result += '<br>';
  }
  display.innerHTML = result;
}

// ===================================
// L5-S7-1:
// すべての'.js-item-stepSeven'要素を、ループを使ってコンソールに表示する。
// ===================================
function L5_S7_1() {
  const items = document.querySelectorAll('.js-item-stepSeven');
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

// ===================================
// L5-S7-2:
// すべての'.js-button-stepSeven'要素のテキストを「完了」に変更して、画面に表示する。
// ===================================
function L5_S7_2() {
  const buttons = document.querySelectorAll('.js-button-stepSeven');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "完了";
  }
}

// ===================================
// L5-S8-1:
// すべての'.js-card-stepEight'要素の個数をカウントして、画面に表示する。
// ===================================
function L5_S8_1() {
  const cards = document.querySelectorAll('.js-card-stepEight');
  const display = document.querySelector('.js-card-count-stepEight');
  display.textContent = `カード数: ${cards.length}個`;
}

// ===================================
// L5-S8-2:
// すべての'.js-item-stepEight'要素をループし、偶数番目の要素に'active'クラスを追加する。
// ===================================
function L5_S8_2() {
  const items = document.querySelectorAll('.js-item-stepEight');
  for (let i = 0; i < items.length; i++) {
    if ((i + 1) % 2 === 0) {
      items[i].classList.add('active');
    }
  }
}

// ===================================
// L5-S9-1:
// すべての'.js-card-stepNine'要素をループで取得し、以下の処理を実行する。
// ・偶数番目の要素に'is-hidden'クラスを追加する
// ・奇数番目の要素に'is-show'クラスを追加する
// ・表示されているカードの枚数をカウントして、'.js-visibleCount-stepNine'要素に「表示中：X枚」と表示する
// ・非表示のカードの枚数をカウントして、'.js-hiddenCount-stepNine'要素に「非表示：X枚」と表示する
// ===================================
function L5_S9_1() {
  const cards = document.querySelectorAll('.js-card-stepNine');
  let visibleCount = 0;
  let hiddenCount = 0;

  for (let i = 0; i < cards.length; i++) {
    if ((i + 1) % 2 === 0) {
      cards[i].classList.add('is-hidden');
      hiddenCount++;
    } else {
      cards[i].classList.add('is-show');
      visibleCount++;
    }
  }

  const visibleDisplay = document.querySelector('.js-visibleCount-stepNine');
  const hiddenDisplay = document.querySelector('.js-hiddenCount-stepNine');
  visibleDisplay.textContent = `表示中：${visibleCount}枚`;
  hiddenDisplay.textContent = `非表示：${hiddenCount}枚`;
}

// ===================================
// L5-S9-2:
// すべての'.js-button-stepNine'要素をループで処理し、以下の処理を実行する。
// ・すべてのボタンのテキストを「処理済み」に変更する
// ・3番目以降のボタンに'is-disabled'クラスを追加する
// ・処理したボタンの総数を'.js-buttonCount-stepNine'要素に「ボタン総数：X個」と表示する
// ・'is-disabled'クラスが付いているボタンの個数を'.js-disabledCount-stepNine'要素に「無効：X個」と表示する
// ===================================
function L5_S9_2() {
  const buttons = document.querySelectorAll('.js-button-stepNine');
  let disabledCount = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = "処理済み";
    if (i >= 2) {
      buttons[i].classList.add('is-disabled');
      disabledCount++;
    }
  }

  const buttonCountDisplay = document.querySelector('.js-buttonCount-stepNine');
  const disabledCountDisplay = document.querySelector('.js-disabledCount-stepNine');
  buttonCountDisplay.textContent = `ボタン総数：${buttons.length}個`;
  disabledCountDisplay.textContent = `無効：${disabledCount}個`;
}

// ===================================
// L5-S9-3:
// ネストされたループを使って、3の段(3×1から3×9まで)を「3 × 1 = 3」の形式で3の段エリアに表示する。
// 同様に5の段(5×1から5×9まで)を5の段エリアに、7の段(7×1から7×9まで)を7の段エリアに表示する。
// 1の段から9の段まですべての計算を行い、積が30以上になる計算式のみを「X × Y = Z」の形式で抽出し、積が30以上の計算式エリアに表示する(最初の10個まで表示し、10個見つかったらループを終了する)。
// ===================================
function L5_S9_3() {
  const area3 = document.querySelector('.js-multiplication3-stepNine');
  const area5 = document.querySelector('.js-multiplication5-stepNine');
  const area7 = document.querySelector('.js-multiplication7-stepNine');
  const area30 = document.querySelector('.js-multiplication30-stepNine');

  let result3 = '';
  let result5 = '';
  let result7 = '';
  let result30 = '';
  let count30 = 0;

  // 3の段
  for (let i = 1; i <= 9; i++) {
    result3 += `3 × ${i} = ${3 * i}<br>`;
  }
  area3.innerHTML = result3;

  // 5の段
  for (let i = 1; i <= 9; i++) {
    result5 += `5 × ${i} = ${5 * i}<br>`;
  }
  area5.innerHTML = result5;

  // 7の段
  for (let i = 1; i <= 9; i++) {
    result7 += `7 × ${i} = ${7 * i}<br>`;
  }
  area7.innerHTML = result7;

  // 積が30以上の計算式
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      const product = i * j;
      if (product >= 30) {
        result30 += `${i} × ${j} = ${product}<br>`;
        count30++;
        if (count30 >= 10) {
          break;
        }
      }
    }
    if (count30 >= 10) {
      break;
    }
  }
  area30.innerHTML = result30;
}
