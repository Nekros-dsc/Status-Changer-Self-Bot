const { Client } = require('discord.js-selfbot-v13');
const config = require('./config');

const client = new Client({
  checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.client.prefix)) return;

  const args = message.content.slice(config.client.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'status') {
    let i = 0
    var status = ["online", "idle", "dnd"]
    setInterval(() => {
      if (i === status.length) i = 0
      client.user.setStatus(status[i]); i++
    }, 5000);
    message.edit('Command runs correctly, the state will switch with | `Online`, `Idle`, `Dnd`.')
  }
});

client.login(config.client.token);
