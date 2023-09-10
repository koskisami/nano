const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getzonename')
		.setDescription('Generate a brand new Sonic the Hedgehog level name'),
	async execute(interaction) {
		await interaction.reply('**ℹ️ Fun fact: ** You are seeing this because the command occasionally takes more than 3 seconds to execute, and discord api does not like that.');
		let apiURL;
		let fullURL;

		let zoneFirstWord;
		let zoneSubject;
		let zoneName;

		let oneOrTwo = (Math.random() <= 0.5) ? 1 : 2;

		let things = [
			'Master',
			'Overlord',
			'Boss',
			'Gabber',
			'Windows 11',
			'Linux',
			'iPhone',
			'Samsung Galaxy',
			'LG',
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
			'Mr Beast',
			'Penis',
			'Harbinger',
			'Gobbler',
			'Mega Overlord',
			'Hatsune Miku',
			'Gengis Khan',
			'Chairman',
			'Chairman Mao',
			'Mango',
			'Adobe',
			'Android',
			'Arch Linux',
			'Mussolini',
			'Sonic',
			'Michael Jackson',
			'Downloader',
			'BitTorrent',
			'iPod',
			'iPad',
			'Touhou',
			'Undertale',
			'GTA',
			'Kim Jong',
			'BOSCH Series 4 WGG04409GB 9 kg 1400 Spin Washing Machine',
			'NVIDIA',
			'AMD',
			'Google',
			'JavaScript',
			'Python',
			'Chromecast',
			'4K Ultra HD',
			'Fortnite',
			'TModloader',
			'Terraria',
			'Ferrari',
			'Tesla',
			'Elon Musk',
			'Obama',
			'SAMSUNG QE55QN90CATXXU 55" Smart 4K Ultra HD HDR Neo QLED TV with Bixby & Alexa',
			'MSI Raider GE68 HX 16" Gaming Laptop - Intel® Core™ i7, RTX 4060, 1 TB SSD',
			'SAMSUNG 8 Series SpaceMax RS68A884CB1/EU American-Style Smart Fridge Freezer',
			'Reimu',
			'Marisa',
			'Sekibanki',
			'Omori',
			'Postman Pat',
			'Andrew Tate',
			'TikTok',
			'Snapchat',
			'Google Pixel',
			'YouTube',
			'Bilibili',
			'WeChat',
			'Overdose',
			'Percocets',
			'808',
			'Roland',
			'Mega Ultimate Emperor',
			'Spotify',
			'Breaking Bad',
			'Walter White',
			'Gus Fring',
			'Winamp',
			'KDE',
			'GNOME',
			'Fedora',
			'Ubuntu',
			'Peaky Blinders',
			'Subway',
			'Leitmotif',
			'Piano',
			'Skrillex',
			'Knife Party',
			'Dua Lipa',
			'Omsk',
			'Ulaanbaatar',
			'Pudasjärvi',
			'Krasnoyarsk',
			'Moscow',
			'Seoul',
			'Texas',
			'Oulu',
			'Tuira',
			'Raahe',
			'Kaukovainio',
			'Kuusamo',
			'Paris',
			'France',
			'Norway',
			'Sweden',
			'Japan',
			'Tokyo',
			'Pyongyang',
			'Toppila',
			'Pudasjärvi',
			'Ashgabat',
			'Turkmenistan',
			'Mongolia',
			'Kazakhstan',
			'Albania',
			'New York',
			'Alabama',
			'Iraq',
			'Sudan',
			'Madagascar',
			'Senegal',
			'Pakistan',
			'Russia',
			'Mexico',
			'USSR',
			'Italia',
			'Åland',
			'Monaco',
			'Yugoslavia',
			'Czech Republic',
			'Berlin',
			'Germany',
			'Izhevsk',
			'Kazan',
			'Novosibirsk',
			'Rostov-on-Don',
			'Irkutsk',
			'Belgogrod',
			'Lappeenranta',
			'Finland',
			'Kouvola',
			'Kuopio',
			'Poland',
			'Warsaw',
			'Egypt',
			'China',
			'Taiwan',
			'Hong Kong',
			'Chongqing',
			'Guangzhou',
			'Shanghai',
			'Shenzhen',
			'Tianjin',
			'Taipei',
			'India',
			'Bangkok',
			'Gangnam',
			'Sapporo',
			'Kyoto',
			'Thailand',
			'Pattaya',
			'Australia',
			'Canada',
			'Tajikistan',
			'Dubai',
			'United States',
			'Türkiye',
			'Ankara',
			'Bulgaria',
			'Lithuania',
			'Estonia',
			'McDonalds',
			'Zimbabwe',
			'K-Market',
			'Porvoo',
			'Lviv',
			'Kyiv',
			'United Kingdom',
			'Brisbane',
			'Austria'
		]

		// Select if the 1st word will be adjective or noun
		if (oneOrTwo == 1) {
			apiURL = 'https://random-word-form.repl.co/random/noun/';
			console.log("noun");
		} else {
			apiURL = 'https://random-word-form.repl.co/random/adjective/';
			console.log("adjective");
		}

		// Set the zone subject
		zoneSubject = things[Math.floor(Math.random() * things.length)];
		console.log(zoneSubject);

		// Get first letter of subject and request adjective from API
		fullURL = apiURL + zoneSubject.charAt(0);
		console.log(fullURL);

		try {
			let response = await fetch(fullURL);
			zoneFirstWord = await response.text();
	
			// Do stupid idiot manipulation to zone adjective
			zoneFirstWord = zoneFirstWord.replace(/[^\w\s!?]/g,'');
			zoneFirstWord = zoneFirstWord.charAt(0).toUpperCase() + zoneFirstWord.slice(1);
			console.log(zoneFirstWord);
	
			zoneName = zoneFirstWord + " " + zoneSubject + " Zone";
	
			await interaction.editReply(`My favorite Sonic level is **${zoneName}**`);
		} catch(err) {
			console.log(err);
			await interaction.editReply(err);
		}

	},
};