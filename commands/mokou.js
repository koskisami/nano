const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mokou")
    .setDescription(
      "Sends a random mokou comic image (made by jokanhiyou) RIP Mokoubot/itdoesnteggs."
    ),
  async execute(interaction) {
    //Read directory assets/mokou
    fs.readdir(path.join(process.cwd(), "assets", "mokou"), (err, files) => {
      try {
        //Get all files into an array
        let max = files.length - 1;
        let min = 0;
        //Pick random file
        let index = Math.round(Math.random() * (max - min) + min);
        let file = files[index];
        //Get full path for file, and send it to discord
        let fullPath = path
          .join(process.cwd(), "assets", "mokou", file)
          .toString();
        console.log(fullPath);
        interaction.reply({ files: [fullPath] });
      } catch (err) {
        console.log(err);
        interaction.reply(":stop: Awkward! " + err);
      }
    });
  },
};
