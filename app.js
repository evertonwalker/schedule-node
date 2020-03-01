const http = require('http'),
      app = require('./config-express/express'),
      dotenv = require('dotenv');
dotenv.config();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


http.createServer(app).listen(port, hostname, () => {
    console.log(`Server start at ${hostname}:${port}`);
});