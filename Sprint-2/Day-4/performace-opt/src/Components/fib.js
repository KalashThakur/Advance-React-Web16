const memoFunc = (func) => {
    const obj = {};
    return (input) => {
        return obj[input] || (obj[input] = func(input));
    };
};

export const fib = memoFunc((n) => {  //takes less time
    if(n<=1)
    {
        return n;
    }
    return fin(n-1) + fib(n-2)
})

console.time("f1")
console.log(fib(43))
console.timeEnd("f1")
