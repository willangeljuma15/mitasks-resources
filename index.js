const express = require('express');

const app = express();

// Config
app.set('view engine', 'ejs');
app.set('views', __dirname+ '/views');

// Archivos estaticos -> js, img, css
app.use('/public', express.static(__dirname+ '/public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
      path: '/'
    });
});

app.get('/create', (req, res) => {
  res.render('create-task', {
    path: '/create'
  });
});

app.get('/favoritos', (req, res) => {
  res.render('favoritos', {
    path: '/favoritos'
  });
});

app.get('/yo', (req, res) => {
  res.render('user/yo', {
    path: '/yo'
  });
});

app.listen(3000, () => {
  console.log('Server Run on Port 3000');
});
