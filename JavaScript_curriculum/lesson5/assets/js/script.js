/**
 * ===================================
 * JavaScript Script lesson5
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q5_1: "c",
  q5_2: "b",
  q5_21: "b",
  q5_22: "b",
  q5_3: "d",
  q5_4: "a",
  q5_5: "b",
  q5_6: "c",
  q5_7: "a",
  q5_8: "b",
  q5_9: "c",
  q5_10: "b",
  q5_11: "a",
  q5_12: "c",
  q5_13: "b",
  q5_14: "a",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  51: {
    inputs: [".js-blank--51-1", ".js-blank--51-2"],
    answers: ["0", "5"],
    validation: "default",
  },
  52: {
    inputs: [".js-blank--52-1", ".js-blank--52-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--21-1", ".js-blank--21-2"],
    answers: ["length", "i"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--22-1", ".js-blank--22-2"],
    answers: ["i", "i++"],
    validation: "default",
  },
  53: {
    inputs: [".js-blank--53-1", ".js-blank--53-2"],
    answers: ["length", "i"],
    validation: "default",
  },
  54: {
    inputs: [".js-blank--54-1", ".js-blank--54-2"],
    answers: ["1", "5"],
    validation: "default",
  },
  55: {
    inputs: [".js-blank--55-1", ".js-blank--55-2"],
    answers: ["0", "3"],
    validation: "default",
  },
  56: {
    inputs: [".js-blank--56-1", ".js-blank--56-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  57: {
    inputs: [".js-blank--57-1", ".js-blank--57-2"],
    answers: ["break", "continue"],
    validation: "default",
  },
  58: {
    inputs: [".js-blank--58-1", ".js-blank--58-2"],
    answers: ["7", "continue"],
    validation: "default",
  },
  59: {
    inputs: [".js-blank--59-1", ".js-blank--59-2"],
    answers: ["1", "3"],
    validation: "default",
  },
  510: {
    inputs: [".js-blank--510-1", ".js-blank--510-2"],
    answers: ["1", "i"],
    validation: "default",
  },
  511: {
    inputs: [".js-blank--511-1", ".js-blank--511-2"],
    answers: ["fruits.length", "fruits[i]"],
    validation: "flexible_quote",
  },
  512: {
    inputs: [".js-blank--512-1", ".js-blank--512-2"],
    answers: ["0", "i"],
    validation: "default",
  },
  513: {
    inputs: [".js-blank--513-1", ".js-blank--513-2"],
    answers: ["length", "count"],
    validation: "default",
  },
  514: {
    inputs: [".js-blank--514-1", ".js-blank--514-2"],
    answers: ["i", "add"],
    validation: "default",
  },
};
