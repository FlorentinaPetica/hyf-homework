function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
    return answer;
    }else{
    for(var i = n; i >= 1; i--){
    answer = answer * i;
    }
    return answer;
    }
    }

    let n = 4;
    answer = factorial(n)
    console.log("The factorial of " + n + " is " + answer);

    function factorial(num) {
        let result = 1;
        if (num === 0) {
            return 1;
        }
        for (let i = 1; i <= num; i++) {
            result *= i
        }
    
        return result;
    }
    
    console.log(factorial(5))
  
    
    function fib(num) {
        if (num === 0) {
            return 0;
        }

        if (num === 1) {
            return 1;
        }

        return fib(num - 1) + fib(num - 2)
        
    }

    console.log(fib(1));
    console.log(fib(3));