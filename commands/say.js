module.exports={
    name: "say",
    description: "speak after me",
    usage: "<msg>",
    run: async(bot,message,args)=>{
        let MSG = message.content.split(`${bot.prefix}say`).join("")
        if(!MSG) return message.channel.send('I need the message you want')
        message.channel.send(MSG);
        message.delete()
    }
}