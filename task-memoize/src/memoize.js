function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export default function memoize(fn) {
  const result = [];
  return function (...args) {
    for (let i = 0; i < result.length; i += 1) {
      if (compareArrays(args, result[i].arrayArg)) {
        return result[i].funcValueWithArg;
      }
    }

    const answer = fn(...args);

    result.push({
      arrayArg: args,
      funcValueWithArg: answer,
    });

    return answer;
  };
}
