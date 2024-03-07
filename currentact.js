const { MessageEmbed } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");
const axios = require("axios");

const command = new SlashCommand()
    .setName("profileact")
    .setDescription("Get the current competitive act valorant player information")
    .addStringOption(option =>
        option
            .setName("playerinfo")
            .setDescription("Enter the player information in the format 'username#tag'")
            .setRequired(true)
    )
    .setRun(async (client, interaction, options) => {
        try {
            const playerInfo = interaction.options.getString("playerinfo");
            const [username, tag] = playerInfo.split("#");
            const encodedUsername = encodeURIComponent(username);
            const encodedTag = encodeURIComponent(tag);
            const apiUrl = `https://api.stoweteam.dev/profile/last-act/${encodedUsername}?number=${encodedTag}`;
            const response = await axios.get(apiUrl);
            console.log(response.data);
            if (response.data.player) {
            const embed = new MessageEmbed()
                .setColor(0x0099FF)
                .setTitle(`${response.data.player} Information`)
                .setDescription(`${response.data.act} Competitive Data Information`)
                .addFields(
                    { name: 'Current rank', value: `${response.data.currentRank}`, inline: true },
                    { name: 'Peak Rank', value: `${response.data.peakRank}` , inline: true },
                    { name: 'Match played', value: `${response.data.matchesPlayed}`},
                    { name: 'Matches won', value: `${response.data.matchesWon}`,inline: true },
                    { name: 'Matches lost', value: `${response.data.matchesLost}`, inline: true },
                    { name: 'Winrate', value: `${response.data.winrate}`,  },
                    { name: 'Time played', value: `${response.data.timeplayed}`,inline: true},
                    { name: 'killsPerRound', value: `${response.data.killsPerRound}`},
                    { name: 'K/D', value: `${response.data.kdRatio}`, inline: true },
                    { name: 'K/D/A Ratio', value: `${response.data.kdaRatio}`, inline: true },
                    { name: 'DD/Δ', value: `${response.data.damageDeltaPerRound}`, inline: true },
                    { name: '% Head shot', value: `${response.data.headshotrate}` },
                    { name: 'Ace', value: `${response.data.ace}`, inline: true },
                    { name: 'Clutch', value: `${response.data.clutch}`, inline: true }
 
                )
                interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                .setColor("RED")
                .setTitle('Player not found or profile is private')
                .setDescription('If you want check a player contain special characher this bot can not checked it, or the player may have set their profile to private.');

            interaction.reply({ embeds: [embed] });
            }
            
        } catch (error) {
            console.error("Error fetching player information:", error);
            interaction.reply("There was an error fetching player information. Please try again later.");
        }
    });
    

module.exports = command;
