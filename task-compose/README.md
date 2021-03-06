# compose

## Постановка задачи

Реализуйте функцию `compose(fns)`, которая выполняет композицию функций.

### Что такое композиция функций?

Для функций `f(x), g(x), k(x, z)` композицией `composedFn` будет называться функция `f(g(k(x, z)`. Другими словами, в переданном массиве функций функции вызываются справа налево и результат предыдущей функции подаётся на вход последующей.
Размерность последней функции может быть произвольной, все остальные функции принимают только один параметр - результат работы предыдущей функции

## Пример вызова

```js
const fn = compose([
  x => x - 8,
  x => x ** 2,
  (x, y) => (y > 0 ? x + 3 : x - 3)
]);

fn("3", 1); // 1081
fn("3", -1); // -8
```
