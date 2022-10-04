import { Client } from 'discord.js';
import { Commands } from '../commands/commandList';

export default (client: Client) => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      console.error('Bootstrap failed!');
      return;
    }

    await client.application.commands.set(Commands);

    console.log('Bot started.');
  });
};
