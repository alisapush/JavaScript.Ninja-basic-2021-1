const fn2 = (a) => a + 5;

// Эти функции будут переданы в вашу функцию compose, можете изменять это для тестов
const composeFunctions = [
  function mult5(x) {
    return x * 5;
  },
  fn2,
  (a, b, c) => parseInt(a + b, c),
];
// eslint-disable-next-line no-unused-vars
const originalArray = [1, "2", [3, [[4]]], 5, 6, null, 8];

// *** Не редактируйте ничего ниже этой строки ***
// Этот файл коммитить точно не надо :)

let ul;

function augment(fn) {
  return (...args) => {
    const functionName = fn.name
      ? `Функция <b>${fn.name}</b>`
      : "<b>Анонимная функция</b>";

    const li = document.createElement("li");
    // Так делать небезопасно - XSS!
    li.innerHTML = `${functionName} вызвана с аргументами <b>${JSON.stringify(
      args
    )}</b>`;
    ul.appendChild(li);
    const resultLi = document.createElement("li");
    const result = fn(...args);
    resultLi.innerHTML = `${functionName} вернула <b>${JSON.stringify(
      result
    )}</b>`;
    ul.appendChild(resultLi);

    return result;
  };
}

window.addEventListener("load", () => {
  ul = document.querySelector("ul");
  const composedFn = window.compose(composeFunctions.map(augment));
  Object.defineProperty(composedFn, "name", {
    value: "composedFn (результат композиции)",
  });
  augment(composedFn)("2", "5", 8);
});
