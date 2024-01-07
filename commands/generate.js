const { SlashCommandBuilder } = require("discord.js");
const markovGen = require("markov-generator");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gen")
    .setDescription(
      "Generates a sentence based on the last 100 messages on the specified channel"
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel to get messages from")
        .setRequired(true)
    ),
  async execute(interaction) {
    // Get the channel
    const channel = interaction.options.getChannel("channel");
    try {
      channel.messages.fetch({ limit: 100 }).then((messages) => {
        let messageMap = messages.map((item) => item.content);
        let minimumLength = Math.floor(Math.random() * 50) + 1;
        console.log(
          `Got ${messages.size} messages, from ${channel.name} ${channel} on ${channel.guild} (${channel.guild.id}), markov min length ${minimumLength}`
        );

        // Initialize Markov
        let markov = new markovGen({
          input: messageMap,
          minLength: minimumLength,
        });

        // Generate the sentence
        let sentence = markov.makeChain();

        interaction.reply(sentence);
      });
    } catch (error) {
      interaction.reply(
        "`⛔ " + error + "`\n\nTry a text channel next time bro."
      );
    }
  },
};
