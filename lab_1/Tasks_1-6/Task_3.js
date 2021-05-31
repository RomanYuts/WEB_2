//Функція, яка порахує факторіал натурального числа

function factorial(n) {
    if(n === 0)
      return 1;
    else return n*factorial(n-1);

    
  }
  
function showFuctorial(n){
      console.log('Task3 ->',factorial(n));
  }
  
  module.exports.showFuctorial = showFuctorial;