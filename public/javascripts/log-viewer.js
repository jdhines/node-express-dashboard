const connection = new WebSocket('ws://localhost:3000');
const logWindow = document.querySelector('#log-window');
console.log(logWindow);
connection.onopen = function (event) {
  connection.send('Hello from the client!');
};
connection.onmessage = function (event) {
  logWindow.innerHTML = event.data;
};
