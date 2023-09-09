const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const ytdl = require("@distube/ytdl-core");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ytdl')
		.setDescription('Downloads a specified video and sends it to the channel.')
		.addStringOption(option =>
			option.setName('link')
				.setDescription('Link to the video that you want to get.')
				.setRequired(true)),
	async execute(interaction) {
		// Get link from message.
		let linkToVid = interaction.options.getString('link');
		linkToVid = linkToVid.toString();

		//ytdl(linkToVid).pipe(require("fs").createWriteStream("video.mp4"));
		interaction.reply("Broken for now, fuck you.");
	},
};