# nano
nano is my hobby project discord bot written in javascript, using node.js and discord.js.

made with 🦞 in 🇫🇮
## how to get it running?
⚠️ since this is my own hobby project I will not be providing any kind of support.

- **Step 0:** Install node.js on your computer.
- **Step 1:** Clone the repository.
- **Step 2:** Rename the included [config_example.json](https://github.com/koskisami/nano/blob/main/config_example.json "config_example.json") file to "config.json" and fill in your id's and bot token.
- **Step 3:** `npm install`
- **Step 4:** `node .`

## what does it do?
unlike many other discord bots, this one atleast up to this point has been just developed to be more or less just fun, altho i do have some more utilitarian stuff in mind for later down the line.

## commands
### /gen
takes 100 of the latest messages from a channel that you have specified, and uses a markov chain to generate a new sentence out of those messages

![enter image description here](https://i.imgur.com/fx1rMnH.png)

uses markov-generator https://www.npmjs.com/package/markov-generator
### /getballernick
generates a nickname based on a joke that my friend group has, boils down to `word + country name`

![enter image description here](https://i.imgur.com/KXgRKvI.jpeg)

### /mokou
sends a random image out of a collection of comics, based on an old twitter bot that was killed by elon musk in cold blood.

![enter image description here](https://i.imgur.com/tWqaMr7.jpeg)

⚠️ the repository doesnt contain the images for this command, so you will need to provide your own in the `assets/mokou` folder

image credits: https://twitter.com/jokanhiyou
if you want me to take this command out, just reach out and i will do so.
