const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.presence.set({
			status: "dnd",
			activities: [{
				type: ActivityType.Competing,
				name: "nuclear arms race"
			}]
		});
	},
};