/**
 * Lesson4: 条件分岐 - 解答例ファイル
 */
// ===================================
// L4-S1-1:
// '.js-show-banner-step1'ボタンにクリックイベントを追加する。
// クリック時に'.js-banner-step1'要素を取得し、要素が存在する(nullでない)場合のみ、その要素を表示(display: block)する。
// ===================================
function L4_S1_1() {
  const button = document.querySelector('.js-show-banner-step1');
  button.addEventListener('click', function() {
    const banner = document.querySelector('.js-banner-step1');
    if (banner !== null) {
      banner.style.display = 'block';
    }
  });
}

// ===================================
// L4-S2-1:
// '.js-toggle-visibility-step2'ボタンにクリックイベントを追加する。
// クリック時に'.js-product-step2'要素を取得し、その要素が'is-visible'クラスを持っている場合はクラスを削除して透明度を0.3に設定、持っていない場合はクラスを追加して透明度を1に設定する。
// ===================================
function L4_S2_1() {
  const button = document.querySelector('.js-toggle-visibility-step2');
  button.addEventListener('click', function() {
    const product = document.querySelector('.js-product-step2');
    if (product.classList.contains('is-visible')) {
      product.classList.remove('is-visible');
      product.style.opacity = '0.3';
    } else {
      product.classList.add('is-visible');
      product.style.opacity = '1';
    }
  });
}

// ===================================
// L4-S2-2:
// ページ読み込み時に'.js-product-step2'要素を取得し、そのdata-status属性の値が"active"なら'.js-status-step2'に"販売中"、そうでなければ"販売終了"と表示する。
// ===================================
function L4_S2_2() {
  const product = document.querySelector('.js-product-step2');
  const status = document.querySelector('.js-status-step2');
  if (product.dataset.status === 'active') {
    status.textContent = "販売中";
  } else {
    status.textContent = "販売終了";
  }
}

// ===================================
// L4-S3-1:
// ページ読み込み時に'.js-task-step3'要素を取得し、data-priority属性の値によって処理を分岐する。
// "high"の場合: '.js-priority-label-step3'に"【緊急】"と表示し、カードの左ボーダー色を赤(#ef4444)に変更する。
// "medium"の場合: "【通常】"と表示し、ボーダー色を黄(#eab308)に変更する。
// "low"の場合: "【低】"と表示し、ボーダー色を緑(#22c55e)に変更する。
// それ以外: "【未設定】"と表示する。
// ===================================
function L4_S3_1() {
  const task = document.querySelector('.js-task-step3');
  const label = document.querySelector('.js-priority-label-step3');
  const priority = task.dataset.priority;

  if (priority === 'high') {
    label.textContent = "【緊急】";
    task.style.borderLeftColor = '#ef4444';
  } else if (priority === 'medium') {
    label.textContent = "【通常】";
    task.style.borderLeftColor = '#eab308';
  } else if (priority === 'low') {
    label.textContent = "【低】";
    task.style.borderLeftColor = '#22c55e';
  } else {
    label.textContent = "【未設定】";
  }
}

// ===================================
// L4-S3-2:
// ページ読み込み時に'.js-task-list-step3 li'要素を全て取得(NodeList)し、lengthによって処理を分岐する。
// 5以上の場合: '.js-task-count-step3'に"タスク数: 多い(○件)"と表示し、文字色を赤に変更する。
// 3以上の場合: "タスク数: 普通(○件)"と表示し、文字色を黄に変更する。
// 1以上の場合: "タスク数: 少ない(○件)"と表示し、文字色を緑に変更する。
// それ以外: "タスクなし"と表示する。
// ===================================
function L4_S3_2() {
  const tasks = document.querySelectorAll('.js-task-list-step3 li');
  const countDisplay = document.querySelector('.js-task-count-step3');
  const count = tasks.length;

  if (count >= 5) {
    countDisplay.textContent = `タスク数: 多い(${count}件)`;
    countDisplay.style.color = '#ef4444';
  } else if (count >= 3) {
    countDisplay.textContent = `タスク数: 普通(${count}件)`;
    countDisplay.style.color = '#eab308';
  } else if (count >= 1) {
    countDisplay.textContent = `タスク数: 少ない(${count}件)`;
    countDisplay.style.color = '#22c55e';
  } else {
    countDisplay.textContent = "タスクなし";
  }
}

// ===================================
// L4-S4-1:
// '.js-password-input-step4'にinputイベントを追加する。
// 入力時にvalue(入力値)のlengthが8以上の場合: '.js-strength-bar-step4'の背景色を緑(#22c55e)にし、'.js-strength-text-step4'に"強いパスワード"と表示する。
// 8未満の場合: '.js-strength-bar-step4'の背景色を赤(#ef4444)にし、'.js-strength-text-step4'に"弱いパスワード"と表示する。
// ===================================
function L4_S4_1() {
  const passwordInput = document.querySelector('.js-password-input-step4');
  const strengthBar = document.querySelector('.js-strength-bar-step4');
  const strengthText = document.querySelector('.js-strength-text-step4');

  passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length >= 8) {
      strengthBar.style.backgroundColor = '#22c55e';
      strengthText.textContent = "強いパスワード";
    } else {
      strengthBar.style.backgroundColor = '#ef4444';
      strengthText.textContent = "弱いパスワード";
    }
  });
}

// ===================================
// L4-S4-2:
// ページ読み込み時に'.js-gallery-step4'要素内の子要素div(最初のdivのchildren)の数を取得する。
// 子要素の数が3より大きく10以下の場合: '.js-gallery-status-step4'に"適切な画像数です"と表示し、文字色を緑に変更する。
// それ以外の場合: "画像数を調整してください"と表示し、文字色を赤に変更する。
// ===================================
function L4_S4_2() {
  const gallery = document.querySelector('.js-gallery-step4');
  const galleryStatus = document.querySelector('.js-gallery-status-step4');
  const childCount = gallery.children.length;

  if (childCount > 3 && childCount <= 10) {
    galleryStatus.textContent = "適切な画像数です";
    galleryStatus.style.color = '#22c55e';
  } else {
    galleryStatus.textContent = "画像数を調整してください";
    galleryStatus.style.color = '#ef4444';
  }
}

// ===================================
// L4-S5-1:
// '.js-admin-btn-step5'にクリックイベントを追加する。
// クリック時にその要素が'is-authenticated'クラスを持っているかつ'is-admin'クラスも持っている場合: '.js-access-result-step5'に"アクセス許可"と表示し、文字色を緑に変更する。
// それ以外の場合: "アクセス拒否"と表示し、文字色を赤に変更する。
// ===================================
function L4_S5_1() {
  const adminBtn = document.querySelector('.js-admin-btn-step5');
  const accessResult = document.querySelector('.js-access-result-step5');

  adminBtn.addEventListener('click', function() {
    if (adminBtn.classList.contains('is-authenticated') && adminBtn.classList.contains('is-admin')) {
      accessResult.textContent = "アクセス許可";
      accessResult.style.color = '#22c55e';
    } else {
      accessResult.textContent = "アクセス拒否";
      accessResult.style.color = '#ef4444';
    }
  });
}

// ===================================
// L4-S5-2:
// ページ読み込み時に'.js-main-content-step5'要素と'.js-sidebar-step5'要素をそれぞれ取得する。
// 両方とも存在する(nullでない)場合: '.js-layout-status-step5'に"レイアウト完成"と表示し、文字色を緑に変更する。
// それ以外の場合: "レイアウト不完全"と表示し、文字色を赤に変更する。
// ===================================
function L4_S5_2() {
  const mainContent = document.querySelector('.js-main-content-step5');
  const sidebar = document.querySelector('.js-sidebar-step5');
  const layoutStatus = document.querySelector('.js-layout-status-step5');

  if (mainContent !== null && sidebar !== null) {
    layoutStatus.textContent = "レイアウト完成";
    layoutStatus.style.color = '#22c55e';
  } else {
    layoutStatus.textContent = "レイアウト不完全";
    layoutStatus.style.color = '#ef4444';
  }
}

// ===================================
// L4-S5-3:
// ページ読み込み時に'.js-modal-step5'要素を取得する。
// その要素が'is-hidden'クラスを持っていない場合(NOT演算子!を使用): '.js-modal-status-step5'に"モーダル表示中"と表示し、文字色を青に変更する。
// それ以外の場合: "モーダル非表示"と表示し、文字色をグレーに変更する。
// ===================================
function L4_S5_3() {
  const modal = document.querySelector('.js-modal-step5');
  const modalStatus = document.querySelector('.js-modal-status-step5');

  if (!modal.classList.contains('is-hidden')) {
    modalStatus.textContent = "モーダル表示中";
    modalStatus.style.color = '#3b82f6';
  } else {
    modalStatus.textContent = "モーダル非表示";
    modalStatus.style.color = '#9ca3af';
  }
}

// ===================================
// L4-S6-1:
// ページ読み込み時に'.js-alert-step6'要素を取得し、そのdata-type属性の値をswitch文で判定する。
// "success"の場合: '.js-alert-icon-step6'に"✓"、'.js-alert-message-step6'に"処理が成功しました"と表示、背景色を緑(#d1fae5)、ボーダー色を緑(#22c55e)に変更する。
// "error"の場合: "✕"と"エラーが発生しました"を表示、背景色を赤(#fee2e2)、ボーダー色を赤(#ef4444)に変更する。
// "warning"の場合: "!"と"警告があります"を表示、背景色を黄(#fef3c7)、ボーダー色を黄(#eab308)に変更する。
// それ以外: "i"と"情報"を表示する。
// ===================================
function L4_S6_1() {
  const alert = document.querySelector('.js-alert-step6');
  const icon = document.querySelector('.js-alert-icon-step6');
  const message = document.querySelector('.js-alert-message-step6');
  const type = alert.dataset.type;

  switch (type) {
    case 'success':
      icon.textContent = "✓";
      message.textContent = "処理が成功しました";
      alert.style.backgroundColor = '#d1fae5';
      alert.style.borderColor = '#22c55e';
      break;
    case 'error':
      icon.textContent = "✕";
      message.textContent = "エラーが発生しました";
      alert.style.backgroundColor = '#fee2e2';
      alert.style.borderColor = '#ef4444';
      break;
    case 'warning':
      icon.textContent = "!";
      message.textContent = "警告があります";
      alert.style.backgroundColor = '#fef3c7';
      alert.style.borderColor = '#eab308';
      break;
    default:
      icon.textContent = "i";
      message.textContent = "情報";
  }
}

// ===================================
// L4-S6-2:
// '.js-element-step6'の全要素にクリックイベントを追加する。
// クリック時にその要素のtagName(要素名)をswitch文で判定する。
// "DIV"の場合: '.js-element-type-result-step6'に"ブロック要素がクリックされました"と表示する。
// "SPAN"の場合: "インライン要素がクリックされました"と表示する。
// "BUTTON"の場合: "ボタン要素がクリックされました"と表示する。
// それ以外: "その他の要素がクリックされました"と表示する。
// ===================================
function L4_S6_2() {
  const elements = document.querySelectorAll('.js-element-step6');
  const result = document.querySelector('.js-element-type-result-step6');

  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      switch (element.tagName) {
        case 'DIV':
          result.textContent = "ブロック要素がクリックされました";
          break;
        case 'SPAN':
          result.textContent = "インライン要素がクリックされました";
          break;
        case 'BUTTON':
          result.textContent = "ボタン要素がクリックされました";
          break;
        default:
          result.textContent = "その他の要素がクリックされました";
      }
    });
  });
}

// ===================================
// L4-S7-1:
// '.js-toggle-menu-step7'にクリックイベントを追加する。
// クリック時に'.js-nav-menu-step7'要素を取得し、その要素が'is-open'クラスを持っているかを三項演算子で判定する。
// 持っている場合: クラスを削除し、透明度を0に設定、'.js-menu-status-step7'に"メニューを閉じました"と表示する。
// 持っていない場合: クラスを追加し、透明度を1に設定、'.js-menu-status-step7'に"メニューを開きました"と表示する。
// ===================================
function L4_S7_1() {
  const toggleBtn = document.querySelector('.js-toggle-menu-step7');
  const navMenu = document.querySelector('.js-nav-menu-step7');
  const menuStatus = document.querySelector('.js-menu-status-step7');

  toggleBtn.addEventListener('click', function() {
    const isOpen = navMenu.classList.contains('is-open');

    isOpen ? navMenu.classList.remove('is-open') : navMenu.classList.add('is-open');
    navMenu.style.opacity = isOpen ? '0' : '1';
    menuStatus.textContent = isOpen ? "メニューを閉じました" : "メニューを開きました";
  });
}

// ===================================
// L4-S7-2:
// ページ読み込み時に'.js-submit-btn-step7'要素を取得し、そのdisabled属性の値(true/false)を三項演算子で判定する。
// disabled=trueの場合: '.js-button-status-step7'に"ボタンは無効です"と表示し、文字色を赤に変更する。
// falseの場合: "ボタンは有効です"と表示し、文字色を緑に変更する。
// ===================================
function L4_S7_2() {
  const submitBtn = document.querySelector('.js-submit-btn-step7');
  const buttonStatus = document.querySelector('.js-button-status-step7');

  const isDisabled = submitBtn.disabled;
  buttonStatus.textContent = isDisabled ? "ボタンは無効です" : "ボタンは有効です";
  buttonStatus.style.color = isDisabled ? '#ef4444' : '#22c55e';
}

// ===================================
// L4-S8-1:
// '.js-process-btn-step8'ボタンにクリックイベントを追加する。
// クリック時にそのボタンのdata-status属性の値をswitch文で判定する。
// "ready"の場合: '.js-process-result-step8'に"処理を開始しました"と表示、背景色を青(#dbeafe)、ボーダー色を青(#3b82f6)に変更、display: blockで表示する。
// "processing"の場合: "処理中です..."と表示、背景色を黄(#fef3c7)、ボーダー色を黄(#eab308)に変更、display: blockで表示する。
// "complete"の場合: "処理が完了しました"と表示、背景色を緑(#d1fae5)、ボーダー色を緑(#22c55e)に変更、display: blockで表示する。
// それ以外: "不明な状態です"と表示、背景色をグレー(#f3f4f6)に変更、display: blockで表示する。
// ===================================
function L4_S8_1() {
  const processBtn = document.querySelector('.js-process-btn-step8');
  const processResult = document.querySelector('.js-process-result-step8');

  processBtn.addEventListener('click', function() {
    const status = processBtn.dataset.status;

    switch (status) {
      case 'ready':
        processResult.textContent = "処理を開始しました";
        processResult.style.backgroundColor = '#dbeafe';
        processResult.style.borderColor = '#3b82f6';
        processResult.style.display = 'block';
        break;
      case 'processing':
        processResult.textContent = "処理中です...";
        processResult.style.backgroundColor = '#fef3c7';
        processResult.style.borderColor = '#eab308';
        processResult.style.display = 'block';
        break;
      case 'complete':
        processResult.textContent = "処理が完了しました";
        processResult.style.backgroundColor = '#d1fae5';
        processResult.style.borderColor = '#22c55e';
        processResult.style.display = 'block';
        break;
      default:
        processResult.textContent = "不明な状態です";
        processResult.style.backgroundColor = '#f3f4f6';
        processResult.style.display = 'block';
    }
  });
}

// ===================================
// L4-S8-2:
// '.js-contact-form-step8'ボタンにクリックイベントを追加する。
// クリック時に'.js-form-name-step8'と'.js-form-email-step8'の値を取得する。
// 両方の入力欄が空でない(length > 0)かつメールアドレスに@が含まれている場合: '.js-form-result-step8'に"送信しました！"と表示、背景色を緑(#d1fae5)、文字色を緑(#22c55e)に変更し、display: blockで表示する。
// それ以外の場合: "入力内容を確認してください"と表示、背景色を赤(#fee2e2)、文字色を赤(#ef4444)に変更し、display: blockで表示する。
// ===================================
function L4_S8_2() {
  const contactForm = document.querySelector('.js-contact-form-step8');
  const formName = document.querySelector('.js-form-name-step8');
  const formEmail = document.querySelector('.js-form-email-step8');
  const formResult = document.querySelector('.js-form-result-step8');

  contactForm.addEventListener('click', function() {
    if (formName.value.length > 0 && formEmail.value.length > 0 && formEmail.value.includes('@')) {
      formResult.textContent = "送信しました！";
      formResult.style.backgroundColor = '#d1fae5';
      formResult.style.color = '#22c55e';
      formResult.style.display = 'block';
    } else {
      formResult.textContent = "入力内容を確認してください";
      formResult.style.backgroundColor = '#fee2e2';
      formResult.style.color = '#ef4444';
      formResult.style.display = 'block';
    }
  });
}

// ===================================
// L4-S8-3:
// '.js-toolbar-step8'要素にクリックイベントを追加(イベント委譲)する。
// クリック時にevent.targetのtagNameを取得してswitch文で判定する。
// "BUTTON"の場合: '.js-toolbar-result-step8'に"ボタン機能を実行しました"と表示、背景色を青(#dbeafe)に変更、display: blockで表示する。
// "A"の場合: "リンクを開きました"と表示、背景色を紫(#e9d5ff)に変更、display: blockで表示する。
// "SPAN"の場合: "テキストを選択しました"と表示、背景色を緑(#d1fae5)に変更、display: blockで表示する。
// それ以外: "その他の操作"と表示、背景色をグレー(#f3f4f6)に変更、display: blockで表示する。
// ===================================
function L4_S8_3() {
  const toolbar = document.querySelector('.js-toolbar-step8');
  const toolbarResult = document.querySelector('.js-toolbar-result-step8');

  toolbar.addEventListener('click', function(event) {
    switch (event.target.tagName) {
      case 'BUTTON':
        toolbarResult.textContent = "ボタン機能を実行しました";
        toolbarResult.style.backgroundColor = '#dbeafe';
        toolbarResult.style.display = 'block';
        break;
      case 'A':
        toolbarResult.textContent = "リンクを開きました";
        toolbarResult.style.backgroundColor = '#e9d5ff';
        toolbarResult.style.display = 'block';
        break;
      case 'SPAN':
        toolbarResult.textContent = "テキストを選択しました";
        toolbarResult.style.backgroundColor = '#d1fae5';
        toolbarResult.style.display = 'block';
        break;
      default:
        toolbarResult.textContent = "その他の操作";
        toolbarResult.style.backgroundColor = '#f3f4f6';
        toolbarResult.style.display = 'block';
    }
  });
}

// ===================================
// L4-S8-4:
// '.js-notification-toggle-step8'ボタンにクリックイベントを追加する。
// クリック時に'.js-notification-step8'要素が'is-visible'クラスを持っているかをif-else文で判定する。
// 持っている場合: 'is-visible'を削除し、display: noneに設定、ボタンのテキストを"通知を表示"に変更する。
// 持っていない場合: 'is-visible'を追加し、display: blockに設定、ボタンのテキストを"通知を非表示"に変更する。
// ===================================
function L4_S8_4() {
  const notificationToggle = document.querySelector('.js-notification-toggle-step8');
  const notification = document.querySelector('.js-notification-step8');

  notificationToggle.addEventListener('click', function() {
    if (notification.classList.contains('is-visible')) {
      notification.classList.remove('is-visible');
      notification.style.display = 'none';
      notificationToggle.textContent = "通知を表示";
    } else {
      notification.classList.add('is-visible');
      notification.style.display = 'block';
      notificationToggle.textContent = "通知を非表示";
    }
  });
}

// ===================================
// L4-S8-5:
// '.js-product-card-step8'要素を全て取得(NodeList)する。
// 要素が存在するか(length > 0)をif文でチェックする。
// 存在する場合: 各要素にクリックイベントを追加し、クリックされたらそのdata-product-id属性の値を取得、'.js-selected-product-step8'に"選択中: 商品ID(値)"と表示、背景色を青(#dbeafe)に変更し、display: blockで表示する。
// 存在しない場合: '.js-selected-product-step8'に"商品が見つかりません"と表示、背景色を赤(#fee2e2)に変更し、display: blockで表示する。
// ===================================
function L4_S8_5() {
  const productCards = document.querySelectorAll('.js-product-card-step8');
  const selectedProduct = document.querySelector('.js-selected-product-step8');

  if (productCards.length > 0) {
    productCards.forEach(function(card) {
      card.addEventListener('click', function() {
        const productId = card.dataset.productId;
        selectedProduct.textContent = `選択中: 商品ID${productId}`;
        selectedProduct.style.backgroundColor = '#dbeafe';
        selectedProduct.style.display = 'block';
      });
    });
  } else {
    selectedProduct.textContent = "商品が見つかりません";
    selectedProduct.style.backgroundColor = '#fee2e2';
    selectedProduct.style.display = 'block';
  }
}
