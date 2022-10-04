import { Client } from 'discord.js';
import dotenv from 'dotenv';
import onInteractionCreate from './listeners/onInteractionCreate';
import onReady from './listeners/onReady';

dotenv.config();

const client = new Client({
  intents: [],
});

onReady(client);
onInteractionCreate(client);

client.login(process.env.TOKEN || '');
