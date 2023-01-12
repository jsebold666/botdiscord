const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log('Ready!');
});

client.on("ready", () => {
    const channel = client.channels.cache.get("1045023886837821492");
    
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
    }).catch(e => {

        // Oh no, it errored! Let's log it to console :)
        console.error(e);
    });
});

client.on('message', (message) => {
    const channel = client.channels.cache.get("1045023886837821492");

    if(message.content ==='/estasOn'){
        message.reply('Sim mestre!')
    }
    if(message.content ==='/flavio'){

            message.reply('Aiii flavinhooooo')
            channel.join().then(r => {
                r.play('./flavio.mp3');
            }).catch(e => {
                console.log(e)
            })        
    }
    if(message.content ==='/mallmann'){

        message.reply('Aiii flavinhooooo')
        channel.join().then(r => {
            r.play('./mallmann.mp3');
        }).catch(e => {
            console.log(e)
        })        
    }

    
    // if (message.content.substring(0, 1) === config.prefix) {
    //     let args = message.content.substring(1).split(' ');
    //     const cmd = args[0];

    //     args = args.splice(1);
    //     if (cmd == 'info') {
    //         let embed = new Discord.MessageEmbed()
    //             .setColor("0x006400")
    //             .setTitle("info")
    //             .addField("prefix", `\`${config.prefix}\``)
    //             .addField("info", `get this menu`)
    //             .addField("play", `play **FLAVIO**`)
    //             .addField("pause", `pause music`)
    //             .addField("resume", `resume music`)
    //             .addField("leave", `leave channel`)
    //             .addField("quit", `stop music`)
    //             .setTimestamp();
    //         message.channel.send(embed);
    //     } else if (cmd == 'play') {
    //         if (message.member.voice.channel) {
    //             message.reply('Твою мать!')
    //             message.member.voice.channel.join().then(r => {
    //                 message.reply('Твою мать!2')
    //                 r.play('./flavio.mp3');
    //             }).catch(e => {
    //                 console.log(e)
    //             })
    //             message.channel.send("");
    //         }
    //         else {
    //             message.reply('join a voice channel!');
    //         }
    //     } else if (cmd == "pause") {
    //         if (message.member.voice.channel && message.guild.voice.connection && message.member.voice.channel === message.guild.voice.connection.channel) {
    //             if (message.guild.voice.connection.dispatcher) {
    //                 message.guild.voice.connection.dispatcher.pause();
    //                 message.channel.send("paused.");
    //             }
    //         } else {
    //             message.reply('join a voice channel!');
    //         }
    //     } else if (cmd == "stop" || cmd == "quit") {
    //         if (message.member.voice.channel && message.guild.voice.connection && message.member.voice.channel === message.guild.voice.connection.channel) {
    //             if (message.guild.voice.connection.dispatcher) {
    //                 message.guild.voice.connection.dispatcher.end();
    //                 message.member.voice.channel.leave();
    //                 message.channel.send("stopped.");
    //             }
    //         } else {
    //             message.reply('join a voice channel!');
    //         }
    //     } else if (cmd == "resume") {
    //         if (message.member.voice.channel && message.guild.voice.connection && message.member.voice.channel === message.guild.voice.connection.channel) {
    //             if (message.guild.voice.connection.dispatcher) {
    //                 message.guild.voice.connection.dispatcher.resume();
    //                 message.channel.send("resuming.");
    //             }
    //         } else {
    //             message.reply('join a voice channel!');
    //         }
    //     } else if (cmd == "leave") {
    //         if (message.member.voice.channel && message.guild.voice.connection && message.member.voice.channel === message.guild.voice.connection.channel) {
    //             message.guild.voice.channel.leave();
    //             message.channel.send("leaving.");
    //         } else {
    //             message.reply('join a voice channel!');
    //         }
    //     }
    // }
});

client.login(config.token)
