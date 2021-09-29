# memoize

## Постановка задачи

Реализуйте в файле `src/memoize.js` в виде экспорта по-умолчанию функцию `memoize(func)`, которая возвращает функцию с "мемоизацией". Мемоизация подразумевает, что если функция была вызвана больше одного раза с одними и теми же аргументами (сравнение через `===`) то реального вызова не происходит, а возвращается результат предыдущего вызова функции.

### Пример вызова

```js
let counter = 1;
let obj = {};
function foo() {
  counter += 1;
  return counter;
}

const memoizedFoo = memoize(foo);
console.log(memoizedFoo(obj)); // 2
console.log(memoizedFoo(5)); // 3
console.log(memoizedFoo(5)); // 3
console.log(memoizedFoo(obj)); // 2
console.log(memoizedFoo(4)); // 4
```

## Ограничения на входные данные

`func` гарантированно является функцией

