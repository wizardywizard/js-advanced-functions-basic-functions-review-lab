function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: function add(a, b){
       return a + b
    },
    subtract: function subtract(a, b){
        return a - b
    },
    multiply: function multiply(a, b){
        return a * b
    },
    divide: function divide(a, b){
        return a/b
    }
}

function actionApplyer(num = 0, array){
    if (array === []){
        return num
    }else{
        return ((num * 2) + 1000) % 7 
    }    
}