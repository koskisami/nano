const { SlashCommandBuilder } = require('discord.js');
const markovGen = require('markov-generator');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gen')
        .setDescription('Generates a sentence based on the last 100 messages on the specified channel')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to get messages from')),
    async execute(interaction) {

        let markov = new markovGen({
            input:["a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
            "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
            "Explore the versatility of Microsoft's Windows 11 operating system. Find out how our latest Windows OS gives you more ways to work, play, and create.",
            "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds."],
            minLength: 10
        })

        let sentence = markov.makeChain();

        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(sentence);
    },
};