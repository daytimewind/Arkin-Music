const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel first!');
    if (message.guild.me.voiceChannel) return message.channel.send('Sorry! The bot is already connected!')
}