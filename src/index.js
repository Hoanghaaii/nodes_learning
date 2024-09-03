const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// Cấu hình express-handlebars
app.engine('hbs', exphbs.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');

// Sử dụng morgan để ghi log
app.use(morgan('combined'));

// Đặt thư mục chứa các template
app.set('views', path.join(__dirname, 'resources', 'views'));

// Định nghĩa route và render template
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
