const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const route= require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Cấu hình express-handlebars
app.engine('hbs', exphbs.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');

// Sử dụng morgan để ghi log
app.use(morgan('combined'));

// Đặt thư mục chứa các template
app.set('views', path.join(__dirname, 'resources', 'views'));

// Kết nối với route
route(app);

// Định nghĩa route và render template


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
