import { Client, GatewayIntentBits, Message } from 'discord.js';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', (message: Message) => {
  if (message.author.bot) return;

  if (message.content === '!goodnight') {
    const gifs: string[] = [
      'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
      'https://media.giphy.com/media/xT0GqeSlGSRQut4RuY/giphy.gif',
      'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    ];
    const gif = gifs[Math.floor(Math.random() * gifs.length)];

    if (message.channel && 'send' in message.channel) {
      message.channel.send(`🌙 Goodnight, sweet dreams! 🐾💤\n${gif}`);
    }
  }
});

client.login(process.env.TOKEN);
