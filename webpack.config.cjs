const path = require('path');

module.exports = [
  // Configuración para el servidor
  {
    entry: './index.js', // Ruta al archivo principal del servidor
    target: 'node', 
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist/server'),
    },
    mode: 'development', // o 'production'
  },
  // Configuración para el cliente
  {
    entry: './client/index.html', // Ruta al archivo principal del cliente
    output: {
      filename: 'client.js',
      path: path.resolve(__dirname, 'dist/client'),
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
      ],
    },
    mode: 'development', // o 'production'
  },
];
