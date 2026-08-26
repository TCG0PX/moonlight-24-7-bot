const mc = require('minecraft-protocol');

const options = {
  host: 'Moon-LightSMP.aternos.me',
  port: 59735,
  username: 'MoonLightBot',
  version: false,
  auth: 'offline'
};

function startBot() {
  console.log('Connecting to Minecraft server...');

  const client = mc.createClient(options);

  client.on('login', () => {
    console.log('Bot joined Moon-LightSMP successfully!');
  });

  client.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  client.on('error', (err) => {
    console.log('Error:', err.message);
  });
}

startBot();
