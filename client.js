const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

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
