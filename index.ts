const request: any = require("request");
function sget(helpurl: string, thens: any){
    let bo;
    var options:any = { method: 'GET',  url: helpurl,  headers: { 'cache-control': 'no-cache' } };
    request(options, thens)}
module.exports = {
    sget,
};