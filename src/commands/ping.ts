import { ApplicationCommandType } from 'discord.js';
import { Command } from 'src/models/command';

export const Ping: Command = {
  name: 'ping',
  description: 'Verify if bot is running and works.',
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    await interaction.followUp({
      ephemeral: true,
      content: 'Bip bup.',
    });
  },
};
