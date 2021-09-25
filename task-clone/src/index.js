import clone from "./clone";

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
  },
};

const clonedObj = clone(obj1);

// *** Ничего ниже менять не стоит ***

class DuplicateError extends Error {}
function serialize(obj, verifyCache, fillCache) {
  return JSON.stringify(obj, (_, v) => {
    if (typeof v === "function" || typeof v === "symbol") {
      return undefined;
    }
    if (typeof v === "object") {
      if (verifyCache && verifyCache.has(v)) {
        throw new DuplicateError();
      }
      if (fillCache) {
        fillCache.add(v);
      }
    }
    return v;
  });
}

function areReallyEqual(obj, obj2) {
  if (obj === obj2) {
    return false;
  }
  if (!_.isEqual(obj, obj2)) {
    return false;
  }
  const cache = new Set();
  try {
    serialize(obj, null, cache);
    serialize(obj2, cache, null);
    return true;
  } catch (e) {
    if (e instanceof DuplicateError) {
      return false;
    }
    throw e;
  }
}

window.addEventListener("load", () => {
  const result = document.querySelector("[data-result]");
  if (areReallyEqual(obj1, clonedObj)) {
    result.className = "ok";
    result.innerHTML = "Клонирование прошло успешно";
  } else {
    result.className = "error";
    result.innerHTML = "Клонирование не удалось";
  }
});
