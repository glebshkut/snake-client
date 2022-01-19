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
  })

  conn.write('Name: GLB');
    
  conn.setEncoding("utf8");

  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


console.log("Connecting ...");

module.exports = [connect, setupInput];