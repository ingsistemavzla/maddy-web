// Script de prueba para verificar que el servidor funciona correctamente
const http = require('http');

const testServer = () => {
  // Probar conexión al servidor
  const req = http.request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/leads',
    method: 'GET'
  }, (res) => {
    console.log('✅ Servidor funcionando correctamente');
    console.log('Status:', res.statusCode);
    console.log('Headers:', res.headers);

    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        console.log('✅ API Response:', result);
      } catch (e) {
        console.log('✅ Raw Response:', data);
      }
    });
  });

  req.on('error', (e) => {
    console.error('❌ Error conectando al servidor:', e.message);
  });

  req.end();
};

console.log('🔍 Probando conexión al servidor...');
testServer();
