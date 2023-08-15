const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getballernick')
		.setDescription('Generate a Certified Baller Nickname'),
	async execute(interaction) {

		let countryName;
		let secondaryTitle;

		let secondaryTitles = [
			'Chef',
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
			'CEO',
			'Emperor',
			'Empress',
			'CTO',
			'King',
			'Queen',
			'Techno',
			'Hardcore',
			'Microwave',
			'God',
			'Gatekeeper',
			'Chief',
			'Warlord',
			'Speedcore',
			'Shogunate',
			'Future Funk',
			'Country music',
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
			'Penis music',
			'Cumbia',
			'Hip Hop',
			'Crack',
			'Adderall',
			'Weed',
			'Money baller',
			'Oligarch',
			'Hitman',
			'Mongolia',
			'Gaslighter',
			'GirlBoss'
		]

		secondaryTitle = secondaryTitles[Math.floor(Math.random()*secondaryTitles.length)]

		// Get a random country name from this API
		await fetch('https://api.apipip.com/v1/random-country/')
			.then(response => response.json())
			.then(data => {
				countryName = data.name;
			})
			.catch(error => console.log("Error:", error));
		
		
		await interaction.reply(`Your new Certifiably Cool:tm: Nickname is: ** ${countryName} ${secondaryTitle} **`);
	},
};