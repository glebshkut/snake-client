const setupInput = require('./input');
const connect = require('./client');


console.log("Connecting ...");

const res = connect();
setupInput(res);