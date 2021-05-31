const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, 'static/views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname));

app.get('/', function (request, response) {
    response.render('pages/index', {title: 'Home'});
})

app.get('/project', function (request, response) {
    response.render('pages/project', {title: 'Project'});
})

app.get('/customer', function (request, response) {
    response.render('pages/customer', {title: 'Customer'});
})

app.get('/performer', function (request, response) {
    response.render('pages/performer', {title: 'Performer'});
})

app.get('/project_in_progress', function (request, response) {
    response.render('pages/project_in_progress', {title: 'ProjectInProgress'});
})



app.listen(process.env.PORT || 3000)
