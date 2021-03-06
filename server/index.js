require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const  cors = require('cors');
const fileupload = require("express-fileupload");



const app = express();
require("./passport/config")(app);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileupload());

//Para cross domain:
app.use(cors());

app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views'));
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('dist'))
app.use('/backend/', require('./routes'));
app.get("*", (req, res) => {
  res.sendFile(path.resolve('dist'));
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
mongoose
    .connect(`${process.env.MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Base de datos conectada"))
    .catch(() => {
        console.log(error)
        throw error;
    });
mongoose.set('useFindAndModify', false);

module.exports = app;
