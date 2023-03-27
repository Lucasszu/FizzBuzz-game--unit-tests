const fizzbuzz = require('./fizzbuzz');


describe("Numbers appears only", () => {
    it("should return 1 when given a number 1",()=>{
        expect(fizzbuzz(1)).toBe('1');
    })
    it("should return 2 when given a number 2",()=>{
        expect(fizzbuzz(2)).toBe('2');
    })

})

describe("First step of counting - Fizz", () => {
    it("should return 'Fizz' if divisible by 3", () => {
        expect(fizzbuzz((3))).toBe('Fizz')})
    it("should return 'Fizz' if divisible by 3", () => {
        expect(fizzbuzz((9))).toBe('Fizz')})

    })
    
describe("Second step of counting - Buzz", () => {
        it("should return 'Buzz' if divisible by 5", () => {
            expect(fizzbuzz(5)).toBe('Buzz')})
        it("should return 'Buzz' if divisible by 5", () => {
            expect(fizzbuzz(10)).toBe('Buzz')})
        it("should return 'Buzz' if divisible by 5", () => {
            expect(fizzbuzz(20)).toBe('Buzz')})
        
        })


describe("Third step of counting - FizzBuzz", () => {
    it("should return 'FizzBuzz' if divisible by 3 and 5", () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')})
    it("should return 'FizzBuzz' if divisible by 3 and 5", () => {
        expect(fizzbuzz(30)).toBe('FizzBuzz')})
    it("should return 'FizzBuzz' if divisible by 3 and 5", () => {
        expect(fizzbuzz(45)).toBe('FizzBuzz')})
    })
  
