//TDD --> 1. Tests -> Behaviour
//        2. Function/Application

const sum = require("./index");

describe('Testing sum function', () => { //test suite

    //Test cases
    test("add 2 positive numbers", ()=> {
         // tests
         //toBe => strict equality
        expect(sum(1, 2)).toBe(3)
    });

    test("add 2 negative numbers", ()=> {
       expect(sum(-1, -2)).toBe(-3);
   });

   test("add 2 floating numbers", ()=> {
    expect(sum(1.3, 2.3)).toBe(3.6);
});

test("add 2 floating numbers, where output is an integer", ()=> {
    expect(sum(1.5, 1.5)).toBe(3);
});

test("add 2 numbers as strings, and output is an integer", ()=> {
    expect(sum("1.5", "1.5")).toBe(3);
});

test("Call sum with no arguments", ()=> {
    expect(sum()).toBe("sum invoked without arguments");
});

test("Call sum with one argument", ()=> {
    expect(sum(1)).toBe("sum functions needs atleast 2 arguments");
});

test("add 3 numbers", ()=> {
    expect(sum(1, 2, 3)).toBe(6);
});


})