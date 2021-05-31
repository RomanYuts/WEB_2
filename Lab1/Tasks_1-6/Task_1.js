//Реалізувати розбиття стрічки на слова у масив.

function stringToWords (string) {

    let res = string.split(' ');
    for (let i = 0; i < res.length; i++){
      if(res[i] === ''){
        res.splice(i,1);
        i--;
      }
    }
    return res;
  }

  function showStringToWords (string){
    console.log('Task1 ->', stringToWords(string));
  }

  
  module.exports.showStringToWords = showStringToWords;