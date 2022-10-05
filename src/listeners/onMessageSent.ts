import { Client } from 'discord.js';

export default (client: Client) => {
  client.on('messageCreate', message => {
    console.log('Message received by ' + message.author.id);
  });
};
