const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!goodnight') {
    const gifs = [
      'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
      'https://media.giphy.com/media/xT0GqeSlGSRQut4RuY/giphy.gif',
      'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    ];
    const gif = gifs[Math.floor(Math.random() * gifs.length)];
    message.channel.send(`🌙 Goodnight, sweet dreams! 🐾💤\n${gif}`);
  }
});

client.login(process.env.TOKEN);
