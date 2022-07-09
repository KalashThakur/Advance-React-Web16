//toBe -> ===
describe("toBe or not.toBe", () => {
    test("3 is 3", () => {
        expect(3).toBe(3);
    });

    test("Boolean Values", () => {
        expect(true).toBe(true);
        expect(false).toBe(false);
        expect(true).not.toBe(false);

    })
});


describe("Tests for reference data types", () => {
    test("{} !== {}", () => {
        expect({}).not.toBe({})
    });

    test("[] !== []", () => {
        expect({}).not.toBe([])
    });

    test("object a === object a", () => {
        let a = {};
        expect(a).toBe(a)
    })
    
    // shallowEqual => 1 level deep in objects, array 
    // deppEqual => It goes all the way down to the root Node, for checking the values 
})

//toEqual => check for deep value

describe("toEqual", () => {
    test("[] is equal to []", () => {
        expect([]).toEqual([])
    });

    test("[1,2,3] is not equal to []", () => {
        expect([1,2,3]).not.toEqual([])
    });

    test("[1,2,3] is equal to [1,2,3]", () => {
        expect([1,2,3]).toEqual([1,2,3])
    });

    test("[1,2,[3,4]] is equal to [1,2,[3,4]]", () => {
        expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
    });

    // .only => check that particular test case only
    //  .skip => skip that particular test case
    test.only("nested arrays", () => {
        let a = [1,2,3];
        let b = [a,a];
        let c = [[1,2,3], a];
        expect(b).toEqual(c);
    })
})