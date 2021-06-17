var minute;
const path = require('path');
const fs = require('fs');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var customCommandName = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];




var x;




function isNumeric(num) {
    return !isNaN(num);
}




var userID = 0;




var numb = 1;




const Discord = require('discord.js');




const client = new Discord.Client();




const prefix = "&";




client.once('ready', () => {
    console.log('Online');
});




const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Use &help [command] to view how to use it.')
    .setAuthor('Help Menu')
    .addFields({
        name: 'Command',
        value: `
    &customcommand\n
    &gaymeter\n
    &furrymeter\n
    &hotmeter\n
    &susmeter\n
    &simpmeter\n
    &starttyping\n
    &stoptyping\n
    &stopbot\n
    &repeat\n
    &eat\n
    &help\n
    &murder\n
    &diceroll\n
    &purge\n
    &insult\n
    &mute\n
    &play\n
    &pfp`,
        inline: true
    }, )
    .setTimestamp()




client.on('message', message => {
    const chat = message.content.toLowerCase();
    if (chat.startsWith('im')) {
        //var slce = chat.slice(3);
        //message.channel.send('Hi ' + slce + ', I\'m Dad!');
    } else if (chat.startsWith('i\'m')) {
        //var slce = chat.slice(4);
        //message.channel.send('Hi ' + slce + ', I\'m Dad!!! Wait.. no im not.. sorry-');
    }
    if (chat.includes('fuck') || chat.includes('shit') || chat.includes('bitch') || chat.includes('ass')) {
        //if(message.author.bot){} else {
        //message.channel.send('watch ur language plss'); message.react('❌');
        //}
    }
    if (chat.includes('loona')) {
        if (!message.author.bot) {
            message.react('🧎');
        }
    }
    if (chat.startsWith(prefix + 'changenickname ')) {
        if (message.content.replace(prefix + 'changenickname', '').length > 32) {
            message.channel.send('Sorry! You can only have a username under 32 characters. Use `&help changenickname` for help.');
        } else
            message.member.setNickname(message.content.replace(prefix + 'changenickname ', ''));
    }
    if (chat.startsWith(prefix + 'changestatus ')) {
        client.user.setActivity(chat.replace(prefix + 'changestatus ', ''), {
            type: "PLAYING",
        });
    }

    if (chat.startsWith(prefix + 'furrymeter')) {
        if (chat.startsWith(prefix + 'furrymeter ')) {
            message.channel.send(message.content.replace(prefix + 'furrymeter ', '') + '\'s furry meter is at ' + Math.floor(Math.random() * 101) + '.');
        } else {
            message.channel.send('Your furry meter is at ' + Math.floor(Math.random() * 101) + '.');
        }
    }

    if (chat.startsWith(prefix + 'hotmeter')) {
        if (chat.startsWith(prefix + 'hotmeter ')) {
            message.channel.send(message.content.replace(prefix + 'hotmeter ', '') + '\'s hot meter is at ' + Math.floor(Math.random() * 101) + '.');
        } else {
            message.channel.send('Your hot meter is at ' + Math.floor(Math.random() * 101) + '.');
        }
    }

    if (chat.startsWith(prefix + 'gaymeter')) {
        if (chat.startsWith(prefix + 'gaymeter ')) {
            message.channel.send(message.content.replace(prefix + 'gaymeter ', '') + '\'s gay meter is at ' + Math.floor(Math.random() * 101) + '.');
        } else {
            message.channel.send('Your gay meter is at ' + Math.floor(Math.random() * 101) + '.');
        }
    }

    if (chat.startsWith(prefix + 'simpmeter')) {
        if (chat.startsWith(prefix + 'simpmeter ')) {
            message.channel.send(message.content.replace(prefix + 'simpmeter ', '') + '\'s simp meter is at ' + Math.floor(Math.random() * 101) + '.');
        } else {
            message.channel.send('Your simp meter is at ' + Math.floor(Math.random() * 101) + '.');
        }
    }


    if (chat.startsWith(prefix + 'susmeter')) {
        if (chat == '&susmeter') {
            let susMeterVar = Math.floor(Math.random() * 101);
            if (susMeterVar == 100) {
                message.channel.send('Ok, umm, I hate to break it to you, but you\'re SO sus that we\'re gonna have to throw you out. Your sus level is at **100**.');
                message.react('🏆');
            } else if (susMeterVar > 69) {
                message.channel.send('On a scale of 1 to 100, I rate your sus level at ' + susMeterVar + '. Pretty sus?!?!');
            } else {
                message.channel.send('On a scale of 1 to 100, I rate your sus level at ' + susMeterVar + ".");
            }
        } else {
            let personLet = message.content.replace(prefix + 'susmeter ', '');
            let susMeterVar = Math.floor(Math.random() * 101);
            if (susMeterVar == 100) {
                message.channel.send('Ok, umm, I hate to break it to you, but ' + personLet + 'is SO sus that we\'re gonna have to throw them out. Their sus level is at ***100***.');
                message.react('🏆');
            } else if (susMeterVar > 69) {
                message.channel.send('On a scale of 1 to 100, ' + personLet + '\'s sus level is ' + susMeterVar + '. Pretty sus?!?!');
            } else {
                message.channel.send('On a scale of 1 to 100, ' + personLet + '\'s sus level is ' + susMeterVar + '.')
            }
        }

    }
    if (chat.startsWith(prefix + 'starttyping')) {
        message.channel.startTyping();
    }
    if (chat.startsWith(prefix + 'stoptyping')) {
        message.channel.stopTyping();
    }
    if (chat.startsWith(prefix + 'repeat ')) {
        if (message.channel.type == 'dm') {
            message.channel.send('Sorry! I can\'t do that command in DMs.');
        } else {
            message.delete();
            message.channel.send(message.content.replace(prefix + 'repeat ', ''));
        }
    }
    if (chat.startsWith(prefix + 'eat ')) {
        message.channel.send('*eats ' + chat.replace(prefix + 'eat ', '') + '*');
    }
    if (chat.startsWith(prefix + 'help')) {
        if (chat.startsWith(prefix + 'help ')) {
            if (chat == '&help customcommand') {
                message.channel.send('**Creating Commands**\n\nThe \`customcommand\` function is used to create **custom commands.** It has ten available slots to put commands into. To make a command, do \`&customcommand [command name]; [command output]; [slot number]\`. For an example: Let\'s say you want a command that you say &ban, it says \"the ban hammer has spoken,\" in slot 1. You would do \`&customcommand ban; the ban hammer has spoken; 1\`. Now you could do &ban, and the bot would say "the ban hammer has spoken."\n\n**Deleting Commands**\n\nTo delete a single command, do \`&deleteslot [command slot]\`. For example: If I wanted to delete slot 2, I would do \`&deletecommand 2\`. You can also delete all of the commands by doing \`&deleteslot all\`. If you need help, message grey the gravy#7989.\n')
            } else if (chat == '&help gaymeter') {
                message.channel.send('Tells you how gay you are. To test someone else, do `&gaymeter [mention person]`.');
            } else if (chat == '&help furrymeter') {
                message.channel.send('The same as the gay meter, except furries.');
            } else if (chat == '&help hotmeter') {
                message.channel.send('The same as the gay meter, except hotness.');
            } else if (chat == '&help susmeter') {
                message.channel.send('The same as the gay meter, except sus.');
            } else if (chat == '&help simpmeter') {
                message.channel.send('The same as the gay meter, except tells you how sus you are.');
            } else if (chat == '&help starttyping') {
                message.channel.send('Makes it look like the bot is typing in the channel you said the message in.');
            } else if (chat == '&help stoptyping') {
                message.channel.send('If you used &starttyping, it makes the bot stop typing.');
            } else if (chat == '&help repeat') {
                message.channel.send('When you say &repeat [sentence], it deletes your message and repeats [sentence].');
            } else if (chat == '&help eat') {
                message.channel.send('Eats whatever you say after &eat.');
            } else if (chat == '&help help') {
                message.channel.send('Shows a help screen. Also, you can do `&help [command]` to see a command in more detail. e.g. `&help customcommand`.');
            } else if (chat == '&help murder') {
                message.channel.send('murders the player you mention after &mention.');
            } else if (chat == '&help diceroll') {
                message.channel.send('Rolls a die. You can choose the amount of sides you want by putting a number after &diceroll. The default number if you don\'t put one in is **6**.');
            } else if (chat == '&help purge') {
                message.channel.send('Moderation command. Removes the specified amount of recent messages after &purge.');
            } else if (chat == '&help insult') {
                message.channel.send('Insults the user you mention after &insult. \(Currently `42` insults.\)');
            } else if (chat == '&help mute') {
                message.channel.send('Moderation command. Removes chatting privelages from the user until you use `&unmute \[user\]`.');
            } else if (chat == '&help play' || chat == '&help music') {
                message.channel.send('Lets you play music. Use `&play [youtube link]` to play a song. Use `&play [youtube link]` while you\'re listening to a song to add it to a queue. Use `&stop` to make the bot leave the voice chat.');
            } else if (chat == '&help pfp') {
                message.channel.send('Gives you your profile picture if you don\'t mention a user after `&pfp`, or gives you someone else\'s if you do mention a user.');
            } else if (chat == '&help uploadfile') {
                message.channel.send('Lets you save files through the bot. To upload a file, use `&uploadfile [name]`. e.g. if I wanted to upload a gif of a blob dancing, I would say `&uploadfile blob`(the name doesn\'t have to be \'blob\') and upload a dancing blob image along with that message. \n\nTo view the file, use `&getfile [name of file]`. e.g. Let\'s say I wanted to view the dancing blob gif. I would use `&getfile blob`. \n\nTo delete a file, use `&deletefile [name of file]`. e.g. Let\'s say I wanted to delete the gif of the blob dancing. I would do `&deletefile blob`.');
            } else {
                message.channel.send('That\'s not a command. Do `&help help` for help.')
            }
        }
        if (chat == '&help') {
            message.channel.send(exampleEmbed);
        }
    }
    if (chat.startsWith(prefix + 'murder ')) {
        if (chat.startsWith(prefix + 'murder <@!770376016342024222>')) {
            message.channel.send('       n      o        ')
        } else if (chat.replace(prefix + 'murder ', '') == '<@!' + message.author + '>') {
            message.channel.send('<:wtf:840380839498088459>');
        } else {
            message.channel.send('*murders ' + chat.replace(prefix + 'murder ', '') + '*');
        }
    }
    if (chat.startsWith(prefix + 'diceroll')) {
        if (chat.startsWith(prefix + 'diceroll ')) {
            if (!isNaN(parseInt(chat.replace(prefix + 'diceroll ', '')))) {
                message.channel.send('You rolled a ' + chat.replace(prefix + 'diceroll ', '') + ' sided die and got a ' + Math.floor(Math.random() * parseInt(chat.replace(prefix + 'diceroll ', ''))))
            } else {
                message.channel.send('Sorry, `' + message.content.replace(prefix + 'diceroll ', '') + '` is not a valid number.');
            }


        }
        if (chat == '&diceroll') {
            var kkk = Math.floor(Math.random() * 6) + 1;
            message.channel.send('You rolled a 6 sided die and got a ' + kkk + '.');
        }
    }

    if (chat.startsWith('cock and ball torture')) {
        message.channel.send('no');
    }

    if (chat.startsWith(prefix + 'customcommand ')) {
        customCommandName[message.content.replace(prefix + 'customcommand ', '').slice(-1)] = message.content.replace(prefix + 'customcommand ', '');
        if (!isNaN(parseInt(message.content.replace(prefix + 'customcommand ', '').slice(-1)))) {
            if ((message.content.replace(prefix + 'customcommand ', '').match(/;/g) || []).length == 2) {
                message.channel.send('Custom command `&' + message.content.replace(prefix + 'customcommand ', '').split('; ')[0] + '` has been added to slot `' + message.content.replace(prefix + 'customcommand ', '').split('; ')[2] + '`.');
            } else {
                message.channel.send('Sorry, that\'s not a valid command. Do `&help customcommand` for help.');
            }
        } else {
            message.channel.send('Sorry, that\'s not a valid command. Do `&help customcommand` for help.');
        }
    }

    if (customCommandName[0] != undefined && chat.startsWith(prefix + '' + customCommandName[0].split('; ')[0])) {
        message.channel.send(customCommandName[0].split('; ')[1]);
    }
    if (customCommandName[1] != undefined && chat.startsWith(prefix + '' + customCommandName[1].split('; ')[0])) {
        message.channel.send(customCommandName[1].split('; ')[1]);
    }
    if (customCommandName[2] != undefined && chat.startsWith(prefix + '' + customCommandName[2].split('; ')[0])) {
        message.channel.send(customCommandName[2].split('; ')[1]);
    }
    if (customCommandName[3] != undefined && chat.startsWith(prefix + '' + customCommandName[3].split('; ')[0])) {
        message.channel.send(customCommandName[3].split('; ')[1]);
    }
    if (customCommandName[4] != undefined && chat.startsWith(prefix + '' + customCommandName[4].split('; ')[0])) {
        message.channel.send(customCommandName[4].split('; ')[1]);
    }
    if (customCommandName[5] != undefined && chat.startsWith(prefix + '' + customCommandName[5].split('; ')[0])) {
        message.channel.send(customCommandName[5].split('; ')[1]);
    }
    if (customCommandName[6] != undefined && chat.startsWith(prefix + '' + customCommandName[6].split('; ')[0])) {
        message.channel.send(customCommandName[6].split('; ')[1]);
    }
    if (customCommandName[7] != undefined && chat.startsWith(prefix + '' + customCommandName[7].split('; ')[0])) {
        message.channel.send(customCommandName[7].split('; ')[1]);
    }
    if (customCommandName[8] != undefined && chat.startsWith(prefix + '' + customCommandName[8].split('; ')[0])) {
        message.channel.send(customCommandName[8].split('; ')[1]);
    }
    if (customCommandName[9] != undefined && chat.startsWith(prefix + '' + customCommandName[9].split('; ')[0])) {
        message.channel.send(customCommandName[9].split('; ')[1]);
    }




    if (chat.startsWith(prefix + 'deleteslot ')) {
        if (!isNaN(parseInt(chat.replace(prefix + 'deleteslot ', '')))) {
            customCommandName[parseInt(chat.replace(prefix + 'deleteslot ', ''))] = undefined;
            message.channel.send('Message slot ' + chat.replace(prefix + 'deleteslot ', '') + ' was deleted succesfully.');
        } else if (chat.replace(prefix + 'deleteslot ', '') == 'all') {
            customCommandName = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
            message.channel.send('All slots deleted succesfully.');
        } else {
            message.channel.send('That is not a command. Do `&help customcommand` for help.');
        }
    }




    if (chat.startsWith(prefix + 'openslots')) {
        message.channel.send(customCommandName[0] + ' | ' + customCommandName[1] + ' | ' + customCommandName[2] + ' | ' + customCommandName[3] + ' | ' + customCommandName[4] + ' | ' + customCommandName[5] + ' | ' + customCommandName[6] + ' | ' + customCommandName[7] + ' | ' + customCommandName[8] + ' | ' + customCommandName[9]);
    }

    if (chat.startsWith(prefix + 'purge ')) {
        //if (message.member.roles.cache.some(role => role.name === 'chat mod') || message.member.roles.cache.some(role => role.name === 'admin')){
        //    if (message.channel.type == 'dm'){
        //        message.channel.send('Sorry! I can\'t do that command in DMs.');
        //    } else {
        //        message.channel.bulkDelete(message.content.replace(prefix + 'purge ', '') + 1).then(() => {
        //            message.channel.send('Succesfully deleted `' + message.content.replace(prefix + 'purge ', '') + '` messages.').then(msg => msg.delete({timeout: 3000 }));
        //        });
        //    }
        //}
    }

    if (chat.startsWith(prefix + 'insult')) {
        if (chat.startsWith(prefix + 'insult ')) {
            const userN = message.content.replace(prefix + 'insult ', '');
            let randomInsult = Math.floor(Math.random() * 42) + 1;
            if (randomInsult == 1) {
                message.channel.send('You are so ugly that when your mom dropped you off at school, she got a ticket for littering.')
            } else if (randomInsult == 2) {
                message.channel.send('If I gave you a penny for your each of your smart ideas, I\'d get change.')
            } else if (randomInsult == 3) {
                message.channel.send('If I said anything to offend you it was purely intentional.')
            } else if (randomInsult == 4) {
                message.channel.send('As an outsider, what do you think of the human race?')
            } else if (randomInsult == 5) {
                message.channel.send('I\'m not offended by what you say. I\'m just glad that you\'re stringing words into sentences now.')
            } else if (randomInsult == 6) {
                message.channel.send('Light travels faster than sound. This is why some people appear bright until you hear them speak.')
            } else if (randomInsult == 7) {
                message.channel.send('You look like something I\'d draw with my left hand.')
            } else if (randomInsult == 8) {
                message.channel.send('You started at the bottom and it\'s been downhill ever since.')
            } else if (randomInsult == 9) {
                message.channel.send('I\'d love to help you out. Which way did you come in?')
            } else if (randomInsult == 10) {
                message.channel.send('If you had one more brain cell, it would be lonely.')
            } else if (randomInsult == 11) {
                message.channel.send('If stupidity was painful, you\'d be in agony.')
            } else if (randomInsult == 12) {
                message.channel.send('Someday you\'ll find yourself, and will you be disappointed.')
            } else if (randomInsult == 13) {
                message.channel.send('Do you want people to accept you as you are or do you want them to like you?')
            } else if (randomInsult == 14) {
                message.channel.send('You must be the arithmetic person -- you add trouble, subtract pleasure, divide attention, and multiply ignorance.')
            } else if (randomInsult == 15) {
                message.channel.send('If I throw a stick, will you go away?')
            } else if (randomInsult == 16) {
                message.channel.send('I\'d explain it to you, but I don\'t have any crayons with me.')
            } else if (randomInsult == 17) {
                message.channel.send('Anybody who told you to just be yourself couldn\'t have given you worse advice.')
            } else if (randomInsult == 18) {
                message.channel.send('Mirrors can\'t talk. Luckily for you, they can\'t laugh either.')
            } else if (randomInsult == 19) {
                message.channel.send('I get so emotional when you\'re not around. That emotion is happiness.')
            } else if (randomInsult == 20) {
                message.channel.send('Did the mental hospital test too many drugs on you today?')
            } else if (randomInsult == 21) {
                message.channel.send('If you have something to say, raise your hand and place it over your mouth.')
            } else if (randomInsult == 22) {
                message.channel.send('Your face looks like you\'ve been using it as a doorstop.')
            } else if (randomInsult == 23) {
                message.channel.send('You have so many gaps in your teeth it looks like your tongue is in jail.')
            } else if (randomInsult == 24) {
                message.channel.send('I haven\'t seen you run that fast since Twinkies went on sale.')
            } else if (randomInsult == 25) {
                message.channel.send('You\'re a gray sprinkle on a rainbow cupcake.')
            } else if (randomInsult == 26) {
                message.channel.send('If your brain was dynamite, there wouldn\'t be enough to blow your hat off.')
            } else if (randomInsult == 27) {
                message.channel.send('You are more disappointing than an unsalted pretzel.')
            } else if (randomInsult == 28) {
                message.channel.send('We were happily married for one month, but unfortunately, we\'ve been married for 10 years.')
            } else if (randomInsult == 29) {
                message.channel.send('Your secrets are always safe with me. I never even listen when you tell me them.')
            } else if (randomInsult == 30) {
                message.channel.send('I\'ll never forget the first time we met. But I\'ll keep trying.')
            } else if (randomInsult == 31) {
                message.channel.send('Hold still. I\'m trying to imagine you with a personality.')
            } else if (randomInsult == 32) {
                message.channel.send('It\'s impossible to underestimate you.')
            } else if (randomInsult == 33) {
                message.channel.send('Don\'t be ashamed of who you are. That\'s your parents\' job.')
            } else if (randomInsult == 34) {
                message.channel.send('I thought of you today. It reminded me to take out the trash.')
            } else if (randomInsult == 35) {
                message.channel.send('You are the human version of period cramps.')
            } else if (randomInsult == 36) {
                message.channel.send('You are like a cloud. When clouds disappear, it\'s a beautiful day.')
            } else if (randomInsult == 37) {
                message.channel.send('I love what you\'ve done with your hair. How do you get it to come out of your nostrils like that?')
            } else if (randomInsult == 38) {
                message.channel.send('***OH MY GOD! IT SPEAKS!***')
            } else if (randomInsult == 39) {
                message.channel.send('Is your ass jealous of the amount of shit that comes out of your mouth?')
            } else if (randomInsult == 40) {
                message.channel.send('You just might be why the middle finger was invented in the first place.')
            } else if (randomInsult == 41) {
                message.channel.send('You have miles to go before you reach mediocre.')
            } else if (randomInsult == 42) {
                message.channel.send('When you look in the mirror, say hi to the clown you see in there for me, would ya?')
            }
        }
    }


    if (chat.startsWith(prefix + 'mute ')) {
        let mentionV = message.mentions.members.first();
        if (message.member.roles.cache.some(role => role.name === 'chat mod') || message.member.roles.cache.some(role => role.name === 'admin')) {
            if (mentionV) {
                if (mentionV.roles.cache.some(role => role.name === 'time out')) {
                    message.channel.send('This member is already muted!');
                } else {
                    const mutedRole = message.guild.roles.cache.get('786971160352129074');
                    const target = message.mentions.members.first();
                    target.roles.add(mutedRole);
                    message.channel.send('Muted ' + mentionV.displayName + '.');
                }
            } else {
                message.channel.send('Sorry! That is an invalid command. Do `&help mute` for help.');
            }
        } else {
            message.channel.send('You don\'t have the correct permissions to do that!');
        }
    }


    if (chat.startsWith(prefix + 'unmute ')) {
        let mentionV = message.mentions.members.first();
        if (message.member.roles.cache.some(role => role.name === 'chat mod') || message.member.roles.cache.some(role => role.name === 'admin')) {
            if (mentionV) {
                if (mentionV.roles.cache.some(role => role.name === 'time out')) {
                    message.mentions.members.first().roles.remove(message.guild.roles.cache.get('786971160352129074'));
                    message.channel.send('Unmuted ' + mentionV.displayName + '.');
                } else {
                    message.channel.send('This member isn\'t muted!');
                }
            } else {
                message.channel.send('Sorry! That is an invalid command. Do `&help mute` for help.');
            }
        } else {
            message.channel.send('You don\'t have the correct permissions to do that!');
        }
    }


    if (chat.startsWith(prefix + 'pfp')) {
        if (chat.startsWith(prefix + 'pfp ')) {
            let mentionV = message.mentions.members.first();
            if (mentionV) {
                if (message.mentions.users.first().avatarURL() == null) {
                    message.channel.send('Sorry, this person doesn\'t have a profile picture.');
                } else {
                    message.channel.send(message.mentions.users.first().avatarURL());
                }
            } else {
                message.channel.send('Sorry, that\'s not a valid user. Use `&help pfp` for help.');
            }
        }
        if (chat == '&pfp') {
            if (message.author.avatarURL() == null) {
                message.channel.send('Sorry, you don\'t have a profile picture.');
            } else {
                message.channel.send(message.author.avatarURL());
            }
        }
    }


    //if (chat.startsWith(prefix + 'uploadfile ')){
    //    const spcChannel = client.channels.cache.get('850761928586428477');
    //    const Attachment = (message.attachments);
    //    if (Attachment){
    //        if (Attachment[1] == undefined){


    //            var download = function(uri, filename, callback){
    //                request.head(uri, function(err, res, body){
    //                    console.log('content-type:', res.headers['content-type']);
    //                    console.log('content-length:', res.headers['content-length']);

    //                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    //                });
    //            };

    //            if (message.content.replace(prefix + 'uploadfile ', '') == 'index.js'){
    //                message.channel.send('Nuh uh uh!! I see what you\'re doing.');
    //            } else {
    //                download(Attachment.array()[0].url, message.content.replace(prefix + 'uploadfile ', ''), function(){
    //                    console.log('downloaded');
    //                });
    //            }


    //            
    //        } else {
    //            message.channel.send('Sorry! You can only send one file at a time. Use `&help uploadfile` for help.');
    //        }
    //    } else {
    //        message.channel.send('Sorry! You have to send a file. Use `&help uploadfile` for help.');
    //    }
    //}


    //if (chat.startsWith(prefix + 'getfile ')){
    //const path = message.content.replace(prefix + 'getfile ', '');


    //try {
    //if (fs.existsSync(path)) {
    //    message.channel.send("Here is your file.", { files: [message.content.replace(prefix + 'getfile ', '')] });
    //} else {
    //    message.channel.send('Sorry, that file doesn\'t exist.');
    //}
    //} catch(err) {
    //    console.error(err)
    //}



    //}


    if (chat.startsWith(prefix + 'uploadfile ')) {
        if (message.content.includes('/') || message.content.includes('\\')) {
            message.channel.send('Sorry, you can\'t use slashes in your file name.');
        } else {
            const Attachment = (message.attachments);
            if (message.attachments.size > 0) {
                fs.writeFile("./files/" + message.content.replace(prefix + 'uploadfile ', ''), Attachment.array()[0].url, function(err) {
                    if (err) {
                        return console.log(err);
                    }
                    message.channel.send('The file was saved. Do `&getfile ' + message.content.replace(prefix + 'uploadfile ', '') + '` to view your file.');
                    console.log("The file was saved!");
                });
            } else {
                message.channel.send('You need to upload a file.');
            }
        }
    }
    if (chat.startsWith(prefix + 'getfile ')) {
        if (fs.existsSync('./files/' + message.content.replace(prefix + 'getfile ', ''))) {
            fs.readFile('./files/' + message.content.replace(prefix + 'getfile ', ''), 'utf8', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                message.channel.send(data);
            })
        } else {
            message.channel.send('Sorry, that file doesn\'t exist.');
        }
    }
    if (chat.startsWith(prefix + 'allfiles')) {
        let allFile = '';
        fs.readdir('./files/', (err, files) => {
            files.forEach(file => {
                message.channel.send(file);
            });
        });
    }
    if (chat.startsWith(prefix + 'deletefile ')) {
        if (fs.existsSync('./files/' + message.content.replace(prefix + 'deletefile ', ''))) {
            fs.unlink('./files/' + message.content.replace(prefix + 'deletefile ', ''), function(err) {
                if (err) {
                    return console.log(err);
                }
                message.channel.send('File succesfully deleted.');
                console.log('File deleted');
            });
        } else {
            message.channel.send('Sorry, that file doesn\'t exist.');
        }
    }
    if (chat.startsWith(prefix + 'timer ')) {
        if (minute == undefined || minute == null) {
            if (/\d/.test(chat)) {
                if (chat.includes('minutes') == false && chat.includes('seconds') == false) {
                    message.channel.send('Sorry! You have to send a unit of time. Use `&help timer` for help.');
                } else {
                    if (chat.includes('minutes') && chat.includes('seconds')) {
                        message.channel.send('Sorry! You can only send one unit of time. Use `&help timer` for help.');
                        return;
                    }
                    if (chat.includes(' minutes')) {
                        if (!isNaN(message.content.replace(prefix + 'timer ', '').replace(' minutes', ''))) {
                            let authr = message.author;
                            minute = message.content.replace(prefix + 'timer ', '').replace(' minutes', '');
                            message.channel.send('Your ' + minute + ' minute timer has been set.');
                            setTimeout(() => {
                                if (minute == undefined || minute == null) {} else {
                                    message.channel.send(authr.toString() + ', your ' + minute + ' minute timer is up!');
                                    minute = undefined;
                                }
                            }, minute * 60000);
                        } else {
                            message.channel.send('Sorry! You need to order the strings correctly. Use `&help timer` for help.');
                        }
                    }
                    if (chat.includes(' seconds')) {
                        if (!isNaN(message.content.replace(prefix + 'timer ', '').replace(' seconds', ''))) {
                            let authr = message.author;
                            minute = message.content.replace(prefix + 'timer ', '').replace(' seconds', '');
                            message.channel.send('Your ' + minute + ' second timer has been set.');
                            setTimeout(() => {
                                if (minute == undefined || minute == null) {} else {
                                    message.channel.send(authr.toString() + ', your ' + minute + ' second timer is up!');
                                    minute = undefined;
                                }
                            }, minute * 1000);
                        } else {
                            message.channel.send('Sorry! You need to order the strings correctly. Use `&help timer` for help.');
                        }
                    }
                }
            } else {
                message.channel.send('Sorry! You have to send a number. Use `&help timer` for help.');
            }
        } else {
            message.channel.send('Sorry! There\'s already a timer active. Use `&help timer` for help.');
        }
    }
    if (chat.startsWith(prefix + 'removetimer')) {
        if (minute == undefined || minute == null) {
            message.channel.send('Sorry! There is no timer set. Use `&help timer` for help.');
        } else {
            minute = undefined;
            message.channel.send('Timer removed.');
        }
    }
    if (chat.startsWith(prefix + 'eval ')) {
        if (message.author.id == "619336368811802624") {
            eval(message.content.replace(prefix + 'eval ', ''))
        } else {
            message.channel.send('Sorry! You don\'t have the correct permissions to do that!');
        }
    }

    if (chat.startsWith(prefix + 'getemoji ')) {
        var bean = message.guild.emojis.cache.find(emoji => emoji.name == message.content.replace(prefix + 'getemoji ', '').replace(/[0-9]/g, '').replace('<:', '').replace(':>', ''));
        message.channel.send('https://cdn.discordapp.com/emojis/' + bean + '.png');
    }
    if (message.channel.id == '851632882237046814') {} else {
        if (message.content.length > 0) {
            client.channels.cache.get('851632882237046814').send('**' + message.guild.name + '** \| ' + message.channel.name + '] `' + message.author.username + '`: ' + message.content)
        } else {}
        if (message.attachments.size > 0) {
            var i;
            for (i = 0; i < message.attachments.size; i++) {
                client.channels.cache.get('851632882237046814').send((message.attachments.array())[i].url);
            }
        }
    }
    if (chat.startsWith('&m')){
        if (chat == '&m'){
            fs.readFile('./m/enrolledUsers.fdrf', function (err, data) {
                if (err) throw err;
                if (data.includes(message.author.id)){
                    message.channel.send('To be able to use commands such as `&m gamble`, please use `&m enroll`.');
                }
            });
        }
    }
    console.log(message.content);
});




client.login('NzcwMzc2MDE2MzQyMDI0MjIy.X5cqkw.6HVNgTYNvvpjLcX3RbSjpbeZWXs');