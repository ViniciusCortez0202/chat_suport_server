const Calls = require('./data/calls');

var client = new Calls();


client.selectCalls().then(res => console.log(res))
