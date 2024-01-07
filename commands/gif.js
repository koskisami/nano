const { SlashCommandBuilder } = require("discord.js");
const { tenorKey } = require("../config.json");
const Tenor = require("tenorjs").client({
  Key: tenorKey, // https://developers.google.com/tenor/guides/quickstart
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "D/MM/YYYY - H:mm:ss A", // Change this accordingly
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Finds a GIF from tenor for you.")
    .addStringOption((option) =>
      option
        .setName("search")
        .setDescription("Name of the gif you want to search for.")
    ),
  async execute(interaction) {
    // Get search query from message
    let searchQuery = interaction.options.getString("search");
    console.log(searchQuery);

    // If there is not a query get a random trending gif from the current top 10
    try {
      if (searchQuery == null || searchQuery == "") {
        let trendingGIFS = [];
        // Get 10 trending gifs, push the links to an array
        Tenor.Trending.GIFs("10")
          .then((Results) => {
            Results.forEach((Post) => {
              trendingGIFS.push(Post.url);
            });
            // Reply with a random gif from array
            let gifToSend = Math.floor(Math.random() * 10);
            interaction.reply(trendingGIFS[gifToSend]);
          })
          .catch((error) => {
            console.log(error);
            interaction.reply(
              "`⛔😩 " +
                "TENOR API ERROR, Check console." +
                "`\nHow does it feel knowing you will never amount to anything?"
            );
          });
      } else {
        // If there is a query, search for that
        Tenor.Search.Random(searchQuery, "1")
          .then((Results) => {
            Results.forEach((Post) => {
              interaction.reply(Post.url);
              console.log(
                `${Post.id} (Created: ${Post.created}) @ ${Post.url}`
              );
            });
          })
          .catch((error) => {
            console.log(error);
            interaction.reply(
              "`⛔😩 " +
                "TENOR API ERROR, Check console." +
                "`\nHow does it feel knowing you will never amount to anything?"
            );
          });
      }
    } catch (error) {
      interaction.reply(
        "`⛔ " +
          error +
          "`\nHow does it feel knowing you will never amount to anything?"
      );
    }
  },
};
