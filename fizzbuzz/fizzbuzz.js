function fizzbuzz (count){
    if (count % 3 === 0 && count % 5 === 0){
        return "FizzBuzz";
    } else if (count % 3 === 0){
        return "Fizz";
    } else if (count % 5 === 0){
        return "Buzz";
    }  
        return count.toString();
    }
    for(let i = 1; i <= 101; i++){
        console.log(fizzbuzz(i));
    }
    console.log("Game Over");

module.exports = fizzbuzz;