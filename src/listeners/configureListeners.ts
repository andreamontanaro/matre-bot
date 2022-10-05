import { Client } from 'discord.js';
import onInteractionCreate from './onInteractionCreate';
import onMessageSent from './onMessageSent';
import onReady from './onReady';

export default (client: Client) => {
  onReady(client);
  onMessageSent(client);
  onInteractionCreate(client);
};
