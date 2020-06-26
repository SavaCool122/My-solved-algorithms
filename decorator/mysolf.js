function slow(x) {
    // здесь могут быть ресурсоёмкие вычисления
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            console.log('Again')// если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1))
console.log(slow(1))

console.log(slow(2))
console.log(slow(2))