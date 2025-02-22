const {capitalizeTextFirstChar , createArray , random} = require("../lab1");

describe("Test capitalizeTextFirstChar fundtcion",()=>{
    it("function takes a string it will return type to be a string",()=>{
        expect(typeof capitalizeTextFirstChar("i am abdulrahman")).toBe("string")
    })
    it("function takes a string and return it after capitalize it",()=>{
        expect(capitalizeTextFirstChar("i am abdulrahman")).toEqual("I Am Abdulrahman");
    })
    // it("function takes number it will throw type error says parameter should be string",()=>{
    //     expect(capitalizeTextFirstChar(20)).toThrowError(TypeError,("parameters should be string"));
    // })
})

describe("createArray",()=>{
    it("test that the return value of type array",()=>{
        expect(createArray(10)).toEqual(jasmine.any(Array))
    })
    it("test if we pass 2 it will return array of length 2 and test it includes 1",()=>{
        expect(createArray(2)).toHaveSize(2);
        expect(createArray(2)).toContain(1);
    })
    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3",()=>{
        expect(createArray(3)).toHaveSize(3)
        expect(createArray(3)).not.toContain(3);
    })
    
})


describe("random",()=>{
    it("test that the return value is a number",()=>{
        expect(random(10,5)).toEqual(jasmine.any(Number))
    })
    it("test if we pass 5,7 it will return a number >= 5 and <= 7",()=>{
        expect(random(5,7)).toBeGreaterThanOrEqual(5);
        expect(random(5,7)).toBeLessThanOrEqual(7);
    })
    it("test if we pass one parameter it will return NaN",()=>{
        expect(random(3)).toBeNaN()
    })
})