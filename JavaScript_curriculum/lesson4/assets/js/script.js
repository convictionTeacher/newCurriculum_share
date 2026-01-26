/**
 * ===================================
 * JavaScript Script lesson4
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q1_1: "c",
  q1_2: "b",
  q2_1: "b",
  q2_2: "b",
  q3_1: "b",
  q3_2: "a",
  q4_1: "d",
  q4_2: "a",
  q5_1: "a",
  q5_2: "a",
  q6_1: "b",
  q6_2: "b",
  q7_1: "a",
  q7_2: "b",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: {
    inputs: [".js-blank--1", ".js-blank--2"],
    answers: ["if", ">="],
    validation: "default",
  },
  12: {
    inputs: [".js-blank--3", ".js-blank--4"],
    answers: ["if", "60"],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--5", ".js-blank--6"],
    answers: ["===", "else"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--7", ".js-blank--8"],
    answers: ["成人", "未成年"],
    validation: "flexible_quote",
  },
  31: {
    inputs: [".js-blank--9", ".js-blank--10"],
    answers: ["else", "if"],
    validation: "default",
  },
  32: {
    inputs: [".js-blank--11", ".js-blank--12"],
    answers: ["おはよう", "こんにちは"],
    validation: "flexible_quote",
  },
  41: {
    inputs: [".js-blank--13"],
    answers: ["==="],
    validation: "default",
  },
  42: {
    inputs: [".js-blank--14", ".js-blank--15"],
    answers: [">=", "<="],
    validation: "default",
  },
  51: {
    inputs: [".js-blank--16"],
    answers: ["&&"],
    validation: "default",
  },
  52: {
    inputs: [".js-blank--17"],
    answers: ["||"],
    validation: "default",
  },
  61: {
    inputs: [".js-blank--18", ".js-blank--19", ".js-blank--20", ".js-blank--21"],
    answers: ["switch", "case", "break", "default"],
    validation: "default",
  },
  62: {
    inputs: [".js-blank--22", ".js-blank--23"],
    answers: ["月曜日", "火曜日"],
    validation: "flexible_quote",
  },
  71: {
    inputs: [".js-blank--24", ".js-blank--25"],
    answers: ["?", ":"],
    validation: "default",
  },
  72: {
    inputs: [".js-blank--26", ".js-blank--27"],
    answers: ["active", "inactive"],
    validation: "flexible_quote",
  },
};
