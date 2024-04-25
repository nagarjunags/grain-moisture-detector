const express = require("express");
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const app = express();
const port = 3000;

// Replace 'COM3' with the port where your Arduino is connected
const portName = "COM3";

const serialPort = new SerialPort(portName, { baudRate: 9600 });
const parser = new Readline();
serialPort.pipe(parser);

app.get("/", (req, res) => {
  let dataFromArduino = "";

  // Read data from Arduino serial port
  parser.on("data", (line) => {
    dataFromArduino = line.trim();
  });

  // Send the data received from Arduino to the client
  res.send(`<h1>Arduino Serial Data:</h1><div>${dataFromArduino}</div>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
