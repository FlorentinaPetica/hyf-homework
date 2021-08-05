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

    function formatCreditCardNumber(num) {

        let cardInfo = {
            original: num,
            formatted: num.toString().replace(/(\d{4})/g, '$1 ').trim(),
        }
        return cardInfo;
    }

    
const positive = ['happy', 'awesome', 'super', 'yes', 'wonderfull', 'beautifull', 'beauty'] 
const negative = ['bad', 'sad', 'unhappy', 'bored', 'tired',' depressed']

    function getSentimentScore(getFelling) {

        let pos = [];
        let neg = [];
        
        for (let i = 0; i < positive.length; i++) {
    
            if (getFelling.includes(positive[i])) {
                
                pos.push(positive[i]);
                
            } 
            
            if (getFelling.includes(negative[i])) {
                
                neg.push(negative[i]);
            }
        }
    
        let result = {
            score: pos.length - neg.length,
            positiveWords: pos,
            negativeWords: neg,
          }
    
        return result;
    }
    
    console.log(getSentimentScore('I am mega super awesome happy')); 
    console.log(getSentimentScore('I am sad but awesome today')); 