const {Client, MessageEmbed} = require('discord.js');

const bot = new Client();

const ytdl = require("ytdl-core")

const cheerio = require('cheerio')

const request = require('request')

const ms = require('ms')

const PREFIX = 'v!';

var version = '1.0.1';

var servers = {};

const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('Bot online');
    bot.user.setActivity('v!help', {type: 'WATCHING'}).catch(console.error);
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server: ', message.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            .setFooter('lululullu')
            message.channel.send(embed);
        break;

    }

    switch(args[0]){
        case 'kick':

            const user = message.mentions.users.first();

            if(!message.member.roles.cache.find(r => r.name >= "cool sein")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));

            if(user){
                const member = message.guild.member(user);

                if(member){
                    member.kick('You were kicked!').then(() =>{
                        message.reply('Succesfully kicked the member')
                    }).catch(err =>{
                        message.reply('Unable to kick member');
                        console.log(err);
                    });
                }else{
                    message.channel.send("Unable to find member");
                }
                    
            }else{
                message.channel.send("Please specify a person.");
            }

         break;
    }


    switch(args[0]){
        case 'ban':

        const user = message.mentions.users.first();

        if(!message.member.roles.cache.find(r => r.name = "cool sein")) return message.channel.send('no permission.')
        .then(msg => msg.delete(5000));

        if(user){
            const member = message.guild.member(user);

            if(member){
                member.ban({ression: 'you were banned!'}).then(()=>{
                    message.channel.send('banned the user')
                })
            }else{
                message.channel.send("unable to find member");
            }
        }else{
            message.channel.send('please specify a user.')
        }

        break;
    }

    switch(args[0]){
        case 'ping':
            if(!message.member.roles.cache.find(r => r.name >= "bot")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));
            message.channel.send('pong!')
        break;

    }

    switch(args[0]){
        case 'timer':
            
                message.channel.send('Timer start.');

                setTimeout(function(){
                    message.channel.send("Timer stop.");
                }, 5000);

                
            

        break;
    }

    switch(args[0]){
        case 'react':
             message.react('👍');
        break;
    }

    switch(args[0]){
        case 'warn':
        let person = message.guild.member(message.mentions.users.first() )
        if(!message.member.roles.cache.find(r => r.name >= "bot")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));
        if(!person) return message.channel.send("unable to find member")

        message.author.send("you have warned a user");
        
        

        message.channel.send("user has been warned.");

        

        break;
    }

    switch(args[0]){
        case 'help':
            const Embed = new Discord.MessageEmbed()
            .setTitle("Helper Embed")
            .setColor(0xFF0000)
            .setDescription("v!warn, v!react, v!kick, v!ban, v!cooldown (5sek Cooldown test), v!ping (permissions test), v!info (your user Info)");

            message.author.send(Embed);
    }

    switch(args[0]){
        case 'poll':
            if(!message.member.roles.cache.find(r => r.name >= "cool sein")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));
            const Embed = new MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('Initiate Poll')
            .setDescription('v!poll for a question');

            if(!args[1]){
                message.channel.send(Embed);
            break;
            }

            let msgArgs = args.slice(1).join(" ");

            if(!message.member.roles.cache.find(r => r.name >= "cool sein")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));

            message.channel.send("**" + msgArgs + "**").then(messageReaction =>{
                messageReaction.react("👍");
                messageReaction.react("👎");
                messageReaction.react("🤔");
            });

        break;
    }

    switch(args[0]){
        case 'mc':

            message.channel.send("what do you wanna know? (v!mc-help)");
        break
    }

    switch(args[0]){
        case 'mc-help':

            message.channel.send("what server do you wanna know about? (mc-help-(server))");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel':

            message.channel.send("Hypixel is a Minecraft server created in 2012 by Hypixel Inc., formerly a team of game developers. They are based in Quebec, Canada. After its initial launch in 2012, the Hypixel server substantially grew due to the variety of popular mini-games featured on it, along with frequent spotlights from popular YouTubers. The server features a multitude of designed and coded mini-games. There are 4 main teams that manage the server: the Administrator Team, the Event Team, the Build Team.(mc-help-hypixel-walls,mega walls,skywars,cops-and-crims,turbo-cart-Racers,warlords,arena-brawl,blitz-sg,tnt-games,uhc-champions,vampireZ,quakecraft,paintball,smash-heroes,arcade-games)");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-walls':

            message.channel.send("Four teams or six fight each other for victory after 15 minutes of preparation. During preparation, the players will work as a team to collect resources, so he/she can build large fortifications as well as craft armor and weapons. Players get 11 maps to choose from. This game also features perks that can be bought from the store while players are in a lobby.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-mega-walls':

            message.channel.send("In Mega Walls, there are a total of 100 players, separated into 4 teams of 25. Players spend the first 10 minutes gathering resources, and building defenses for the team. Once the wall drops, the battle begins. Like Walls, diamonds can be found in the very center. Players can defend their Wither (Minecraft Mob, modified to allow players to respawn) that resides in the castle, attack enemy teams' withers or attack and kill other players. Once the team's wither is dead, players no longer respawn when they die. Kill the withers, and defeat the enemies. The player must be the last team standing to win the game. Once all withers are dead (A team can win if their wither is still alive), death match is initiated. During deathmatch, players not in the center of the map will receive the hunger effect, eventually starving to death or being forced to venture to the center.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-skywars':

            message.channel.send("Each player/team spawns on their own island. The aim of Sky Wars is to be the last player or team alive. Kill players using a weapon or by knocking them off the map, into the void. With each kill players will be rewarded with a soul. Souls are spent at the Soul Well, and are used to unlock different kits and perks.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-cops-and-crims':

            message.channel.send("Cops and Crims is based off the popular eSports shooter Counter Strike: Global Offensive. Using a custom resource pack, both teams arm themselves with guns, pistols, and even grenades. The player must either defend the bomb sites or infiltrate the sites and plant the bomb. At the beginning of each round the player can buy him/herself new weapons.");
        break
    }

    switch(args[0]){
        case 'mc-help-turbo-cart-racers':

            message.channel.send("Turbo Kart Racers is a fully fledged racing game inside Minecraft which puts the player in the driver seat in a race against 11 other players. During the game the player can pick up boxes that give him/her certain advantages in the race.The game has 15 different kart skins to choose from and the player can also customize his/her kart with different particle trails, sounds, engines and more.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-warlords':

            message.channel.send("Warlords takes Minecraft minigames to the next level, featuring Hypixel's very own custom 3D textured weapons, custom sounds, and many other features within the custom resource pack. This minigame offers three different gamemodes. After battles have ended players can his/her weapons to attempt to gain one of custom 3D textured legendary weapons.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-arena-brawl':

            message.channel.send("In this game the player gets to fight the opponent with a sword which has a special skill attached to help him/her take down his/her enemy. The player also needs to survive using special skills to boost his/her heal ability and some perks to defeat his/her opponent.Players can choose to refine skills in 2v2 and rank up to find harder opponents or go for an all-out brawl in 4v4.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-blitz-sg':

            message.channel.send("This is a free for all '''survival game''' with many maps varying between 16 and 32 players per round. In this game, the player uses a kit to take out his/her enemies in a fight for victory. The is a slight alteration: after 5 minutes the Blitz Star will be released. The one who finds it can use its power to use one of the many '''Blitz Attacks'''. In the end only 1 person can win and survive. If all opponents are not killed by a time limit, the game goes into '''deathmatch''' mode. There are three game types available: Solo (Kits), Solo (No Kits), and Teams (Kits). In team games, teams will be made of two players. Each team had their own label, being “[DIST 1-16]”.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-tnt-games':

            message.channel.send("The TNT Games are a casual gamemode involving fun and unique games to play; these games involve TNT.Play with friends in Wizards to capture points or shoot them down in Bow Spleef. TNT Run which tests endurance and [[parkour]] skills. And lastly, TNT Tag brings the classic game of '''Hot Potato''' into Minecraft.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-uhc-champions':

            message.channel.send("UHC Champions is a team-based game consisting of 3 players per team. Here, natural regeneration is off and the player can only heal by golden apples, potions, and by ingesting the heads of slain players.This gamemode involves custom crafting recipes and perks to help survive in this hardcore world.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-vampireZ':

            message.channel.send("In this Hypixel game, the player will become either a vampire or a survivor in a map. As a vampire, the player chases the survivors and turn them into another vampire, and as a survivor, the player has to survive and run away from vampires.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-quakecraft':

            message.channel.send("In Quakecraft, the player's goal is to be the first to 25 points. When he/she reaches 25 points, he/she wins. The player must use his/her railgun and blast fireworks at the enemies to kill them. The players will gain coins and can use the coins to upgrade the railgun trigger to reduce the trigger cool down period. The player can also change how his/her railgun looks with different cases, the color, and size of the firework. Hats and different armor are also available to players.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-paintball':

            message.channel.send("Players are divided into two teams of varying colors which can be chosen by typing '/team (color)' in the waiting room. These teams have a varying number of starting lives, usually 120 (these are influenced by the godfather perk) , and the first team to reduce the other team's lives to 0, wins. There are multiple perks to buy and plenty of powerups players can purchase in-game. Every kill gives the player gold nuggets, which are the currencies of the powerups.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-smash-heroes':

            message.channel.send("In this game, the player becomes one of many unique heroes and must unleash attacks in a Team or Solo battle to defeat all rivals. The player must smash his/her rivak     out of the arena in order to win.");
        break
    }

    switch(args[0]){
        case 'mc-help-hypixel-arcade-games':

            message.channel.send("The Arcade Games lobby offers players a wide range of minigames which are played in a fast-paced style. Surviving hordes of zombies, fighting against the enemy team using beam swords or building the best plot.A list of Arcade Games: Build Battle - Galaxy Wars - Farm Hunt - Creeper Attack - Dragon Wars - Bounty Hunters - Ender Spleef - Party Games I - Party Games II - Party Games III - Blocking Dead - Throw Out - Hypixel Says - Hole in the wall - Pixel Painters");
        break
    }

    switch(args[0]){
        case 'clear':
            if(!message.member.roles.cache.find(r => r.name >= "cool sein")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));
            if(!args[1]) return message.channel.send("I need a secong args please")
            message.channel.bulkDelete(args[1]);
        break;
    }

    switch(args[0]){

        case 'say':

            const Embed = new MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('I say everything!')
            .setDescription('v!say and I say it!');

            if(!args[1]){
                message.channel.send(Embed);
            break;
            }

            let msgArgs = args.slice(1).join(" ");

            if(!message.member.roles.cache.find(r => r.name >= "bot")) return message.channel.send('no permission.')
            .then(msg => msg.delete(5000));

            message.channel.send("**" + msgArgs + "**").then(messageReaction =>{
            });

        break;
        
        
    }
});





bot.login(process.env.token);