const { SlashCommandBuilder } = require('discord.js');
const markovGen = require('markov-generator');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get avatars of members or the server')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to get avatar from')
                .setRequired(true)),
    async execute(interaction) {
        // Get the channel
        const user = interaction.options.getUser('user');
        try {
            interaction.reply(user.id.avatarURL);
        } catch (error) {
            interaction.reply("`⛔ " + error + "`\n\nYou are a failure.");
        }

    },
};
