const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getballernick')
		.setDescription('Generate a Certified Baller Nickname'),
	async execute(interaction) {

		let countryName;
		let secondaryTitle;
		let oneOrTwo = (Math.random() <= 0.5) ? 1 : 2;

		let secondaryTitles = [
			'Master',
			'Overlord',
			'Boss',
			'Gabber',
			'EDM',
			'Dubstep',
			'Gaming',
			'Gamer',
			'Guy',
			'DJ',
			'Shogun',
			'Guru',
			'Emperor',
			'Empress',
			'Queen',
			'Techno',
			'Hardcore',
			'Microwave',
			'God',
			'Gatekeeper',
			'Warlord',
			'Speedcore',
			'Future Funk',
			'Janitor',
			'K-Pop',
			'J-Pop',
			'Dictator',
			'Reggae',
			'Rap',
			'Lo-fi',
			'Chiptune',
			'Famicom',
			'Balls',
			'Penis Music',
			'Cumbia',
			'Hip Hop',
			'Crack',
			'Adderall',
			'Weed',
			'Money Baller',
			'Oligarch',
			'Hitman',
			'Mongolia',
			'Gaslighter',
			'GirlBoss',
			'Playstation',
			'Xbox',
			'Gameboy',
			'Gamecube',
			'Nintendo',
			'Phonk',
			'Japanoise',
			'Squid Games',
			'Mr Beast'
		]

		secondaryTitle = secondaryTitles[Math.floor(Math.random()*secondaryTitles.length)]

		// Get a random country name from this API
		await fetch('https://api.apipip.com/v1/random-country/')
			.then(response => response.json())
			.then(data => {
				countryName = data.name;
			})
			.catch(error => console.log("Error:", error));
		
		if (oneOrTwo == 1) {
			await interaction.reply(`Your new Certifiably Cool:tm: Nickname is: ** ${countryName} ${secondaryTitle} **`);
		} else {
			await interaction.reply(`Your new Certifiably Cool:tm: Nickname is: ** ${secondaryTitle} ${countryName} **`);
		}
	},
};