/**
 * Lesson3: イベントリスナー - 解答例ファイル
 */
// ===================================
// L3-S1-1:
// '.js-click-stepFirst'要素にクリックイベントを追加し、クリック時に'.js-display-stepFirst'要素のテキストを「ボタンがクリックされました」に変更する。
// ===================================
function L3_S1_1() {
  const button = document.querySelector('.js-click-stepFirst');
  const display = document.querySelector('.js-display-stepFirst');
  button.addEventListener('click', function() {
    display.textContent = "ボタンがクリックされました";
  });
}

// ===================================
// L3-S1-2:
// '.js-click-stepFirst'要素にダブルクリックイベントを追加し、ダブルクリック時に'.js-display-stepFirst'要素のテキストを「ダブルクリックされました」に変更する。
// ===================================
function L3_S1_2() {
  const button = document.querySelector('.js-click-stepFirst');
  const display = document.querySelector('.js-display-stepFirst');
  button.addEventListener('dblclick', function() {
    display.textContent = "ダブルクリックされました";
  });
}

// Step2: イベント属性はレガシーコードとなるため、「コード補完」と「提出課題」はありません。

// ===================================
// L3-S3-1:
// '.js-input-stepThird'要素にinputイベントを追加し、入力のたびに'.js-status-stepThird'要素のテキストを「入力中: [入力された値]」の形式で表示する。
// ===================================
function L3_S3_1() {
  const input = document.querySelector('.js-input-stepThird');
  const status = document.querySelector('.js-status-stepThird');
  input.addEventListener('input', function() {
    status.textContent = `入力中: ${input.value}`;
  });
}

// ===================================
// L3-S3-2:
// '.js-hover-stepThird'要素にmouseenterイベントとmouseleaveイベントを追加し、ホバー時に'.js-status-stepThird'要素のテキストを「ホバー中」、離れたときに「ホバー終了」に変更する。
// ===================================
function L3_S3_2() {
  const hoverElement = document.querySelector('.js-hover-stepThird');
  const status = document.querySelector('.js-status-stepThird');
  hoverElement.addEventListener('mouseenter', function() {
    status.textContent = "ホバー中";
  });
  hoverElement.addEventListener('mouseleave', function() {
    status.textContent = "ホバー終了";
  });
}

// ===================================
// L3-S4-1:
// '.js-event-stepFour'要素にクリックイベントを追加し、クリック時にイベントオブジェクトのtypeプロパティを'.js-info-stepFour'要素に「イベントタイプ: [type]」の形式で表示する。
// ===================================
function L3_S4_1() {
  const eventElement = document.querySelector('.js-event-stepFour');
  const info = document.querySelector('.js-info-stepFour');
  eventElement.addEventListener('click', function(event) {
    info.textContent = `イベントタイプ: ${event.type}`;
  });
}

// ===================================
// L3-S4-2:
// '.js-key-stepFour'要素にkeydownイベントを追加し、キー押下時にイベントオブジェクトのkeyプロパティを'.js-info-stepFour'要素に「押されたキー: [key]」の形式で表示する。
// ===================================
function L3_S4_2() {
  const keyElement = document.querySelector('.js-key-stepFour');
  const info = document.querySelector('.js-info-stepFour');
  keyElement.addEventListener('keydown', function(event) {
    info.textContent = `押されたキー: ${event.key}`;
  });
}

// ===================================
// L3-S5-1:
// '.js-outer-stepFive'要素と'.js-inner-stepFive'要素の両方にクリックイベントを追加し、それぞれクリック時に'.js-log-stepFive'要素に「外側クリック」「内側クリック」を追記する。
// ===================================
function L3_S5_1() {
  const outer = document.querySelector('.js-outer-stepFive');
  const inner = document.querySelector('.js-inner-stepFive');
  const log = document.querySelector('.js-log-stepFive');
  outer.addEventListener('click', function() {
    log.textContent += "外側クリック ";
  });
  inner.addEventListener('click', function() {
    log.textContent += "内側クリック ";
  });
}

// ===================================
// L3-S5-2:
// '.js-inner-stepFive'要素のクリックイベントでstopPropagation()を使用し、内側ボタンクリック時に外側のイベントが発火しないように設定する。
// ===================================
function L3_S5_2() {
  const outer = document.querySelector('.js-outer-stepFive');
  const inner = document.querySelector('.js-inner-stepFive');
  const log = document.querySelector('.js-log-stepFive');
  outer.addEventListener('click', function() {
    log.textContent += "外側クリック ";
  });
  inner.addEventListener('click', function(event) {
    event.stopPropagation();
    log.textContent += "内側クリック ";
  });
}

// ===================================
// L3-S6-1:
// '.js-form-stepSix'要素を押下(フォーム送信)時にpreventDefault()で送信を止め、'.js-message-stepSix'要素に「送信前チェック中」と表示する。
// ===================================
function L3_S6_1() {
  const form = document.querySelector('.js-form-stepSix');
  const message = document.querySelector('.js-message-stepSix');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    message.textContent = "送信前チェック中";
  });
}

// Step7: イベントリスナーのオプションは概念の理解に重点を置いているため、「コード補完」と「提出課題」はありません。

// ===================================
// L3-S8-1:
// '.js-list-stepEight'要素にクリックイベントを委譲で追加し、'.js-item'クラスの要素がクリックされたときに'.js-message-stepEight'要素にそのテキスト内容を表示する。
// ===================================
function L3_S8_1() {
  const list = document.querySelector('.js-list-stepEight');
  const message = document.querySelector('.js-message-stepEight');
  list.addEventListener('click', function(event) {
    if (event.target.classList.contains('js-item')) {
      message.textContent = event.target.textContent;
    }
  });
}

// ===================================
// L3-S8-2:
// '.js-add-stepEight'要素にクリックイベントを追加し、クリック時に'.js-list-stepEight'要素に新しいli要素('.js-item'クラス付き)を追加する。
// テキストは「新しい項目」。
// ===================================
function L3_S8_2() {
  const addButton = document.querySelector('.js-add-stepEight');
  const list = document.querySelector('.js-list-stepEight');
  addButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.classList.add('js-item');
    newItem.textContent = "新しい項目";
    list.appendChild(newItem);
  });
}

// ===================================
// L3-S9-1:
// '.js-name-input'要素(input)に名前を入力、'.js-age-input'要素(input)に年齢を入力、'.js-register-btn'要素をクリックすると、入力内容を'.js-user-info'要素に「名前: [名前], 年齢: [年齢]歳」の形式で表示する。
// ===================================
function L3_S9_1() {
  const nameInput = document.querySelector('.js-name-input');
  const ageInput = document.querySelector('.js-age-input');
  const registerBtn = document.querySelector('.js-register-btn');
  const userInfo = document.querySelector('.js-user-info');
  registerBtn.addEventListener('click', function() {
    userInfo.textContent = `名前: ${nameInput.value}, 年齢: ${ageInput.value}歳`;
  });
}

// ===================================
// L3-S9-2:
// '.js-todo-input'要素(input)にタスクを入力、'.js-add-todo-btn'要素をクリックで新しいli要素(クラス名: p-practice__cardとjs-item)を'.js-todo-list'要素に追加する。
// 追加した各li要素には削除ボタン('.js-delete-btn'クラス、テキスト「削除」)を付ける。
// 削除ボタンをクリックでその親要素のli要素を削除する。
// '.js-todo-count'要素にタスク数を「タスク数: [数]個」の形式で常に表示する。
// ===================================
function L3_S9_2() {
  const todoInput = document.querySelector('.js-todo-input');
  const addTodoBtn = document.querySelector('.js-add-todo-btn');
  const todoList = document.querySelector('.js-todo-list');
  const todoCount = document.querySelector('.js-todo-count');

  function updateCount() {
    const count = todoList.querySelectorAll('li').length;
    todoCount.textContent = `タスク数: ${count}個`;
  }

  addTodoBtn.addEventListener('click', function() {
    const newTask = document.createElement('li');
    newTask.classList.add('p-practice__card', 'js-item');
    newTask.textContent = todoInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('js-delete-btn');
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener('click', function() {
      newTask.remove();
      updateCount();
    });

    newTask.appendChild(deleteBtn);
    todoList.appendChild(newTask);
    todoInput.value = '';
    updateCount();
  });
}

// ===================================
// L3-S9-3:
// '.js-num1-input'、'.js-num2-input'要素(input type="number")に数値を入力する。
// '.js-add-btn'、'.js-subtract-btn'、'.js-multiply-btn'、'.js-divide-btn'要素をクリックで各計算を実行する。
// 結果を'.js-calc-result'要素に「結果: [計算結果]」の形式で表示する。
// ===================================
function L3_S9_3() {
  const num1Input = document.querySelector('.js-num1-input');
  const num2Input = document.querySelector('.js-num2-input');
  const addBtn = document.querySelector('.js-add-btn');
  const subtractBtn = document.querySelector('.js-subtract-btn');
  const multiplyBtn = document.querySelector('.js-multiply-btn');
  const divideBtn = document.querySelector('.js-divide-btn');
  const calcResult = document.querySelector('.js-calc-result');

  addBtn.addEventListener('click', function() {
    const result = Number(num1Input.value) + Number(num2Input.value);
    calcResult.textContent = `結果: ${result}`;
  });

  subtractBtn.addEventListener('click', function() {
    const result = Number(num1Input.value) - Number(num2Input.value);
    calcResult.textContent = `結果: ${result}`;
  });

  multiplyBtn.addEventListener('click', function() {
    const result = Number(num1Input.value) * Number(num2Input.value);
    calcResult.textContent = `結果: ${result}`;
  });

  divideBtn.addEventListener('click', function() {
    const result = Number(num1Input.value) / Number(num2Input.value);
    calcResult.textContent = `結果: ${result}`;
  });
}

// ===================================
// L3-S9-4:
// '.js-color-input'要素(input type="color")で色を選択したときに、'.js-target-box'要素の背景色を選択した色に変更する。
// '.js-reset-btn'要素をクリックで背景色を初期状態(#ffffff)に戻す。
// '.js-current-color'要素に現在の色のHEXコードを「現在の色: [HEXコード]」の形式で表示する。
// ===================================
function L3_S9_4() {
  const colorInput = document.querySelector('.js-color-input');
  const targetBox = document.querySelector('.js-target-box');
  const resetBtn = document.querySelector('.js-reset-btn');
  const currentColor = document.querySelector('.js-current-color');

  colorInput.addEventListener('input', function() {
    targetBox.style.backgroundColor = colorInput.value;
    currentColor.textContent = `現在の色: ${colorInput.value}`;
  });

  resetBtn.addEventListener('click', function() {
    targetBox.style.backgroundColor = '#ffffff';
    colorInput.value = '#ffffff';
    currentColor.textContent = `現在の色: #ffffff`;
  });
}

// ===================================
// L3-S9-5:
// '.js-text-input'要素(textarea)にテキストを入力、inputイベントで入力のたびに'.js-char-count'要素に「文字数: [文字数]」を表示する。
// '.js-clear-btn'要素をクリックでテキストエリアを空にし、'.js-char-count'要素を「文字数: 0」に更新する。
// ===================================
function L3_S9_5() {
  const textInput = document.querySelector('.js-text-input');
  const charCount = document.querySelector('.js-char-count');
  const clearBtn = document.querySelector('.js-clear-btn');

  textInput.addEventListener('input', function() {
    charCount.textContent = `文字数: ${textInput.value.length}`;
  });

  clearBtn.addEventListener('click', function() {
    textInput.value = '';
    charCount.textContent = `文字数: 0`;
  });
}

// ===================================
// L3-S9-6:
// '.js-checkbox-all'要素(チェックボックス)をクリックしたときに、'.js-checkbox-item'要素(すべてのチェックボックス)のcheckedプロパティを'.js-checkbox-all'要素のcheckedプロパティと同じ状態にする。
// '.js-checked-count'要素に「選択数: [チェックされた.js-checkbox-itemの数]」を表示する。
// ===================================
function L3_S9_6() {
  const checkboxAll = document.querySelector('.js-checkbox-all');
  const checkboxItems = document.querySelectorAll('.js-checkbox-item');
  const checkedCount = document.querySelector('.js-checked-count');

  function updateCount() {
    const count = document.querySelectorAll('.js-checkbox-item:checked').length;
    checkedCount.textContent = `選択数: ${count}`;
  }

  checkboxAll.addEventListener('click', function() {
    checkboxItems.forEach(function(item) {
      item.checked = checkboxAll.checked;
    });
    updateCount();
  });

  checkboxItems.forEach(function(item) {
    item.addEventListener('change', updateCount);
  });
}
