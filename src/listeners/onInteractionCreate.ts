import { Client, CommandInteraction } from 'discord.js';
import { Commands } from '../commands/commandList';

export default (client: Client) => {
  client.on('interactionCreate', async interaction => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
) => {
  const command = Commands.find(x => x.name === interaction.commandName);
  if (!command) {
    interaction.followUp({
      content:
        'There was an error executing the command ' + interaction.commandName,
    });
    return;
  }

  await interaction.deferReply();
  command.run(client, interaction);
};
