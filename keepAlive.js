const https = require("https");
const http = require("http");

//const URL = "https://factoryflow-backend.onrender.com/api/ping"; // Reemplaza con tu URL
//const URL = "http://localhost:3000/api/ping";
const URL = "http://192.168.1.48:3000/api/ping";

const ping = () => {
  http
    .get(URL, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(`[${new Date().toISOString()}] Ping: ${res.statusCode}`);
        console.log(`[${new Date().toISOString()}] Respuesta: ${data}`);
      });
    })
    .on("error", (err) => {
      console.error(`[${new Date().toISOString()}] Error:`, err.message);
    });
};

ping();

setInterval(ping, 5 * 60 * 1000); // Cada 5 minutos
