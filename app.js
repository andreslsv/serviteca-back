var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var bodyParser = require('body-parser');
var logger = require('morgan');
var clave = require('./clave/clave');


var indexRouter = require('./routes/index');
var propietariosRouter = require('./routes/propietario');
var paisRouter = require('./routes/pais');
var departamentoRouter = require('./routes/departamento');
var ciudadRouter = require('./routes/ciudad');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.set('llave', clave.llave);
app.set('llaveRefresh', clave.llaveRefresh);

app.use('/', indexRouter);
app.use('/propietarios', propietariosRouter);
app.use('/pais', paisRouter);
app.use('/departamento', departamentoRouter);
app.use('/ciudad', ciudadRouter);

module.exports = app;
