const https = require("https");

const URL = "https://factoryflow-backend.onrender.com/api/machines"; // Reemplaza con tu URL

setInterval(() => {
  https
    .get(URL, (res) => {
      console.log(`[${new Date().toISOString()}] Ping: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error(`[${new Date().toISOString()}] Error:`, err.message);
    });
}, 5 * 60 * 1000); // Cada 5 minutos
