var SerialPort = require("serialport");
const brightness = require("brightness");

const Readline = require("@serialport/parser-readline");
const port = new SerialPort("COM9");

const parser = port.pipe(new Readline({ delimiter: "\r\n" }));
parser.on("data", (data) => {
  var light;
  if (data < 5) {
    light = 0;
  } else if (data < 15) {
    light = 0.2;
  } else if (data < 25) {
    light = 0.4;
  } else if (data < 50) {
    light = 0.6;
  } else if (data < 100) {
    light = 0.8;
  } else {
    light = 1;
  }
  brightness.set(light).then(() => {});
});
