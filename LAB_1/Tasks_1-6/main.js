const t1 = require('./Task_1.js');
const t2 = require('./Task_2.js');
const t3 = require('./Task_3.js');
const t4 = require('./Task_4.js');
const t5 = require('./Task_5.js');
const t6 = require('./Task_6.js');

t1.showStringToWords("Just some string for example");
t2.showsubstrInstr('Just some string for example', 'for');
t3.showFuctorial(4);
t4.showBinarySearch([1, 6, 8, 10, 14, 34, 40, 54, 73], 14);
let dates = ['2001/05/25', '2021/02/22', '2021/02/21','2008/08/20'];
t5.showMaxDate(dates);
t6.showBubbleSort([34, 63, 2, 15, 4, 0, 86, 23]);