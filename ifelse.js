function getTemperatureFeedback(temp){
    if (temp<0){
        return "it's freezing!"
    }
    else if (temp>=0 && temp <=15){
        return "it's cold!"
    }
    else if (temp<16 && temp>=25){
        return "it's comfortable!!"
    }
    else return "it's hot!"
}
console.log(getTemperatureFeedback(2));
console.log(getTemperatureFeedback(-7));

function checkGuess(guess, number){
    if (guess>number){
        return " Too high!"
    }
    else if (guess<number){
        return "Too low!"
    }
    else return "correct!"
}
console.log(checkGuess(10,60));
console.log(checkGuess(100,25));

function isEligibleForDiscount(age, isStudent){
    if (( age>18 || age<60 ) && isStudent){
        return "true"
    }
    else {return "false"}
}
console.log(isEligibleForDiscount(20, true));
console.log(isEligibleForDiscount(80, false));

function canLogin(username, password, isAdmin){
    if (username === "admin" && password === 12345 && isAdmin){
        return "Access granted for admin"
    }
    else if (username !== "admin" && password !==12345){
        return "Access granted for user"
    }
    else return "Access denied"
}
console.log(canLogin("admin",12345,true))
console.log(canLogin("admin",000,false));

function classifyNumber(num){
    if (num>0 && num % 2 ===0){
        return "Positive and even"
    }
    else if (num>0 && num !==0){
        return "Postive and odd"
    }
    else if (num<0 && num% 2 ===0){ 
        return "Negative and even"
    }
    else if (num<0 && num !==0 ){
        return "Negative and odd"
    }
    else (num ===0)
    {
        return "Zero"
    }
}
console.log(classifyNumber(5));
console.log(classifyNumber(0));

function countVowels(str){
    if (str.includes("a") || str.includes("i"))
        {return true}
        else { return false} 
}
console.log(countVowels("dalel"));

function replaceWord(sentence, wordToReplace, replacement){
    return sentence.replaceAll(wordToReplace, replacement);
}
console.log(replaceWord("j'aime beaucoup les chiens","chiens","chats"));

function emphasize(word, times){
    return (word + " ").repeat(times)
}
console.log(emphasize("hello", 4));

function generateDiscount(){
    return Math.floor(Math.random() * (30-5) ) +5
}
console.log(generateDiscount());

function formatBalance(balance){
    return balance.toFixed(2)
}
console.log(formatBalance(123.987))