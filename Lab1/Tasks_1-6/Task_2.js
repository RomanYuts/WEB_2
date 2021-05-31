//Знайти чи входить шукана стрічка у задану

function substrInstr(string,substr){

    if(string.includes(substr)){
        return "Yes! There is...";
    }
    else{
        return "There isn't...";
    }
}

function showsubstrInstr(string,substr){
    console.log('Task2 ->', substrInstr(string,substr));
}

module.exports.showsubstrInstr = showsubstrInstr;