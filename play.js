const net = require("net");

// establishes a connection with the game server
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
    moving();
  })

  conn.write('Name: GLB');
  const moving = () => {

    // for (let arg = 0; arg < 2500; arg += 50) {
    //   setTimeout( function moveUp() {
    //     conn.write('Move: up');
    //   }, arg);
    // }
  }
    
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = connect;