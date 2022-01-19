const net = require("net");
const constants = require("./constants");


const connect = function () {
  const conn = net.createConnection(constants);

  conn.on('data', (data) => {
    console.log("data: " + data.toString());
  })

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })

  conn.write('Name: GLB');
    
  conn.setEncoding("utf8");

  return conn;
};



module.exports = connect;