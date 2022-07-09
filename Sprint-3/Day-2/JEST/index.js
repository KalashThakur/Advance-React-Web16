//perform sum operation 

function sum(...args) { //rest operator
// console.log('args:', args)

    if(args.length === 0) {
        return "sum invoked without arguments"
    }

    else if(args.length === 1) {
        return "sum functions needs atleast 2 arguments"
    }

    // a = Number(a);
    // b = Number(b);
    // let result = Number((a + b).toFixed(1));
    // return result

    let sumValue = [...args].reduce((acc, n) => acc + Number(n), 0); // a is accumulator in which new value is stored ans is initialised to 0, and c is no. we get as argument
    return Number(sumValue.toFixed(1))
    
}

module.exports = sum;