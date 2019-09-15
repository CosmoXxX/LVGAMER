module.exports.run = (client, message, args) => {
    const  Fortnite  =  require("fortnite-9812")
    const  fortnite  =  new  Fortnite.Client({
    TRN: "b9e7a845-2b70-40d0-8ffc-07045f2836f7"
    //fnbrToken: "<fnbr API key if you have one>" Not required for this example
    })//from now, you can use all the function that require the client
     
    fortnite.TRNShop()
    .then(shop  => {
        console.log(shop)
        message.channel.send(shop[0])
    })
    .catch(err  =>  console.error(err))
}
module.exports.config = {
    name: "s",
    aliases: []
}