$(document).ready(function(){
    function getUsers(){
    $.get('/getusers',function(data){
       createTable('table', data);
    })
    }

    function createTable(container, data){
        var mas = JSON.parse(data);
        var table = document.getElementById(container);

        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'style.css';
        document.head.appendChild(link);
        
        table.classList.add("./style");

        var thead = $('<thead>').appendTo(table);
        var tr = $('<tr>').appendTo(thead);
        for(var key in mas[0]){
        
            var th = $('<th>').appendTo(tr);
            $(th).text(key);          
            console.log(key);
        }

        var tbody = $('<tbody>').appendTo(table);
        console.log(mas.length);
        for(var i = 0; i < mas.length; i++){
          var row = $("<tr>");
          console.log(row);
          for(var key in mas[i]){
            var td = $('<td>').appendTo(row);
            $(td).text(mas[i][key]);
            console.log(mas[i][key]);
          }
          row.appendTo(tbody);
        }
    }
    getUsers();
})