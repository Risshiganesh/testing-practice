import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './script.js';


test('Capitalize', ()=>{
    expect(capitalize("black")).toBe("Black");
    expect(capitalize("blue")).toBe("Blue")
})

test("Reverse String", ()=>{
    expect(reverseString("red")).toBe("der");
    expect(reverseString("piNk")).toBe("kNip");
})

test("Calculator", ()=>{
    expect(calculator.add(1,1)).toBe(2);
    expect(calculator.add(3,5)).toBe(8);

    expect(calculator.subtract(1,1)).toBe(0);
    expect(calculator.subtract(0,1)).toBe(-1);
    expect(calculator.subtract(0.5,0.2)).toBe(0.3);
    expect(calculator.subtract(1,0.5)).toBe(0.5);

    expect(calculator.divide(8,2)).toBe(4);
    expect(calculator.divide(6,2)).toBe(3);
    expect(calculator.divide(1,0.5)).toBe(2)

    expect(calculator.multiply(2,2)).toBe(4);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.multiply(6,6)).toBe(36);
})


test("Caesar Cipher", ()=>{
    expect(caesarCipher("T",3)).toBe("W");
    expect(caesarCipher("A",3)).toBe("D");
    expect(caesarCipher("test tube!", 3)).toBe("whvw wxeh!")
    expect(caesarCipher("zeSt",4)).toBe("diWx")
    expect(caesarCipher("hello, it's me",2)).toBe("jgnnq, kv'u og");
})

test("Analyze Array", ()=>{

    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });

    expect(analyzeArray([6,8,3,4,2,1])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
    });

    expect(analyzeArray([4,8,4,4,2,7,9,2])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 8
    })  

    expect(analyzeArray([4,4,4])).toEqual({
        average: 4,
        min: 4,
        max: 4,
        length: 3
    })  

    expect(analyzeArray([2,4,2,4])).toEqual({
        average: 3,
        min: 2,
        max: 4,
        length: 4
    })  

})
