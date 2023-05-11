const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		commands.push(command.data.toJSON());
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		// for guild-based commands
		rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
			.then(() => console.log('Successfully deleted all guild commands.'))
			.catch(console.error);

		// for global commands
		rest.put(Routes.applicationCommands(clientId), { body: [] })
			.then(() => console.log('Successfully deleted all application commands.'))
			.catch(console.error);
			
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();