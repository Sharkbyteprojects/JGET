const sget = require('./index').sget;
sget('https://morning-tor-58273.herokuapp.com/', function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});
