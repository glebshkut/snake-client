let connection;

const setupInput = function (conn) {
  connection = conn;
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
  if (key === '\u0077') {
    connection.write("Move: up"); // w
  }
  if (key === '\u0061') {
    connection.write("Move: left"); // a
  }
  if (key === '\u0073') {
    connection.write("Move: down"); // s
  }
  if (key === '\u0064') {
    connection.write("Move: right"); // d
  }
  if (key === '\u0070') {
    connection.write("Say: Don't kill me"); // Don't kill me
  }
  if (key === '\u006F') {
    connection.write("Say: I'll find u"); // I'll find u
  }
  if (key === '\u0075') {
    connection.write("Say: how ru?"); // how ru?
  }
  if (key === '\u0069') {
    connection.write("Say: i'm good"); // i'm good
  }
  if (key === '\u005B') {
    connection.write("Say: im comin for ur soul"); // i'm coming for ur soul
    // 20 chars
  }

};

module.exports = setupInput;