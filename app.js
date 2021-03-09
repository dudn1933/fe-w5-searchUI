import express from "express";
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import ejs from 'ejs';

import indexRouter from './routes/index.js';
import imageRouter from './routes/image.js';
import top10_Router from './routes/top_10.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

// view engine setup
// html 파일 읽어오는 부분
app.engine('html', ejs.renderFile);
app.set('views engine','html');


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/image',imageRouter);
app.use('/top_10',top10_Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Hello http://localhost:${port}`);
});

export default app;

