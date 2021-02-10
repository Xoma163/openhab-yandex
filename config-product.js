// 1. Rename this to config.js
// 2. set user & pass for db
// 3. Genera
module.exports = {
  openhab: {
    host: ['https://openhab-cloud.andrewsha.net/'],
  },
  mongodb: {
    hosts: ['127.0.0.1'],
    db: 'openhabyandex',
    user: '',
    password: '',
  },
  https: {
    privateKey: '/etc/letsencrypt/live/andrewsha.net-0001/fullchain.pem',
    certificate: '/etc/letsencrypt/live/andrewsha.net-0001/cert.pem',
    port: 11002,
  },
};
