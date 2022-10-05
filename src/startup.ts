import { Client } from 'discord.js';
import dotenv from 'dotenv';
import configureListeners from './listeners/configureListeners';

dotenv.config();

const client = new Client({
  intents: ['Guilds', 'DirectMessages', 'GuildMessages'],
});

configureListeners(client);

client.login(process.env.TOKEN || '');
