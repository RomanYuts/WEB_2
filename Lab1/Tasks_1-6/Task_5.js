//Знайти максимальну дату у масиві

function maxDate(dates) {
    var max = dates[0],
    maxObj = new Date(dates[0]);
    dates.forEach(function(date, index){
        if ( new Date( date ) > maxObj){
            max = date;
            maxObj = new Date(date);
        }
    });
    return max;
}

function showMaxDate(dates){
    console.log('Task5 ->',maxDate(dates));
}    

module.exports.showMaxDate = showMaxDate;