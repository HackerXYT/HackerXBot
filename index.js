const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello world!")
})

app.listen(3000, () => {
  console.log("HackerX Bot Is Online!")
})
let Discord = require("discord.js")
let client = new Discord.Client()

client.on('ready', () => {
 client.user.setActivity("HackerX's Videos!", { type: 'WATCHING' })
 client.user.setPresence({ activity: { name: "HackerX Bot V2.0! Commands List: !xcommands" }, status: "dnd" })
 client.user.setActivity("HackerX's Videos!", { type: 'WATCHING' })
})
client.on("guildMemberAdd", member => {
  if(member.guild.id === "803961416008728576") {
    client.channels.cache.get("803961416549007365").send(`Welcome ${member}!`)
  }
})

client.on("message", message => {
if(message.content === "adobepremiere2020free") {
  message.channel.send("preparing...")
  client.user.setPresence({ activity: { name: "unavailable" }, status: "idle" })
  message.channel.send("done!")
  message.channel.send("sending url..")
  message.channel.send("https://getintopc.com/softwares/video-editing/adobe-premiere-pro-cc-2020-free-download-1425133/")
  client.user.setPresence({ activity: { name: "HackerX's Cave! For Commands Type !xcommands" }, status: "dnd" })
}
if(message.content.startsWith("!default")) {
	client.user.setActivity("HackerX's Videos!", { type: 'WATCHING' })
}
if(message.content.startsWith("-thank")) {
let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to thank.")
 else{
 message.channel.send(`${victim} Was thanked by ${message.author}!`)

 }
 }
if(message.channel.id === "803961417056780333") 
if (message.content === "hi") {
	message.channel.send("hey")
}
if(message.content.startsWith("!status;dnd")) {
  client.user.setPresence({ activity: { name: "HackerX Bot V2.0! Commands List: !xcommands" }, status: "dnd" })
	message.channel.send("done!")
}
if(message.content.startsWith(`-dm`)){
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
if(message.content.startsWith("!mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to mute!")
 else {
 member.roles.add("YOUR MUTED ROLE ID HERE")
 message.channel.send("Member has been succesfully muted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content.startsWith("!unmute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
 member.roles.remove("Muted role id here")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content.startsWith("!warn")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("mention someone to warn.")
 else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Warnings")
 .setDescription(`${victim} got warned by ${message.author}!`)
 .setColor("RANDOM")
 .setFooter(`Moderater : ${message.author.username}`)
 .setTimestamp()
 
 message.channel.send(embed)
 }
}
if (message.content === '!pp') {
 let pp = [
 '',
 '=',
 '==',
 '===',
 '====',
 '=====',
 '======',
 '=======',
 '==========',
 '================='
 ];
 message.reply(
 `Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`
 );
 }
if (message.content === "hackerxdiscordbotupdate:2007") {
  message.channel.send("updating...")
  client.user.setPresence({ activity: { name: "updating.." }, status: "idle" })
  message.channel.send("Downtime Has Started!")
   }
if (message.content === "botinfo") {
  let embed = new Discord.MessageEmbed()
  .setTitle("HackerX Bot Info")
  .setDescription("Version 2.0.0")
  .setColor("RED")
  .setFooter("Coded By HackerX")
  message.channel.send(embed)
}
if(message.content.toLowerCase().startsWith("!whois")) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("#C724B1")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};
if (message.content === "!xcommands") {
  let embed = new Discord.MessageEmbed()
  .setTitle("HackerX Bot Commands")
  .setDescription("botinfo, adobepremiere2020free, status;invisible, !sendlogo, !deadmeme, πες μου κατι καλο, !say hi, !kickmember, !ping, ?ping, nameme, !kill, hi (only available in channel #σπηλιά), -thank, !warn, -dm, !mute, !pp, !unmute, !whois, >rps")
  .setColor("RANDOM")
  .setFooter("Made By HackerX")
  message.channel.send(embed)
}
if (message.content === "status;invisible") {
  client.user.setPresence({ activity: { name: "HackerX's Cave! For Commands Type !xcommands" }, status: "dnd" })
}
if (message.content === "!sendlogo") {
  let image = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/799187036648898590/808398344165916763/Original_HACKER_X_LOGO_png_BRIGHTEN-removebg-preview.png", "hackerxlogo.png")
  message.channel.send(image)
}
if (message.content === "!deadmeme") {
  let image = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/740119847463288953/808401286176702556/unknown.png", "hackerxmemes.png")
  message.channel.send(image)
}
if (message.content === ">rps" || message.content === ">Rps" || message.content === ">RPS") {
 message.channel.send(":x: | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****>rps rock**** | :x:")
 }

 if (message.content === ">rps rock" || message.content === ">Rps rock" || message.content === ">RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK***, I CHOSE ***PAPER***. ****PAPER**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***SCISSORS***. ****ROCK**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***ROCK***. IT'S A TIE!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === ">rps paper" || message.content === ">Rps paper" || message.content === ">RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER***, I CHOSE ***ROCK***. ****PAPER**** WINS!", "YOU CHOSE ***PAPER***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!", "YOU CHOSE ***PAPER***, I CHOSE ***PAPER***. IT'S A TIE!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === ">rps scissors" || message.content === ">Rps scissors" || message.content === ">RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS***, I CHOSE ***ROCK***. ****ROCK WINS!****", "YOU CHOSE ***SCISSORS***, I CHOSE ***PAPER***. ****SCISSORS WIN!***", "YOU CHOSE ***SCISSORS***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }
if (message.content === "πες μου κατι καλο") {
  message.channel.send("ummm")
	let image = new Discord.MessageAttachment("https://www.wikihow.com/images/5/50/Make-Sweet-Potato-Chips-Final.jpg", "potatolivesmatter.png")
  message.channel.send(image)
	message.channel.send("you are a successfull potato :)")
   }
	 
if (message.content === "!say hi") {
  message.channel.send("hi")
}
if (message.content.startsWith('-ban')) {
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply("Successfully banned ${user.tag}");
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
 }
 }
}
if (message.content === "?ping") {
message.channel.send(`⏱| **${client.ws.ping}ms** Latency!`)
}
if(message.content === "nameme") {
	let nicknames = ["cutie", "extra cute", "idiot", "dumbass", "Einstein:)", "good guy", "extra extra cute", "stoopid"]
	message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name!`)
}
if (message.content.startsWith("_kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 if(message.content.startsWith("!kill")) {
	 let victim = message.mentions.users.first()
	 if(!victim) message.reply("Κάνε Mention Κάποιον Για Να Σκοτώσεις")
	 else {
		 message.channel.send(`${victim} Died lol`)
	 }
 }
 if (message.content === "ping") {
  message.channel.send("pong!")
   }
   if (message.content === "status") {
  message.channel.send("@everyone")
	message.channel.send("available")
  message.channel.send("VERSION 2.0.0")
  message.channel.send("Test new commands by typing !xcommands !")
  message.channel.send("Stay Tuned For More Updates!")
   }
})

client.login(process.env.token)