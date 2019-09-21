module.exports.run = (client, message, args) => {
const Apex = require('apex-api');
const apex = new Apex('API key');

apex.user('termk47', 'xbox').then((res) => {
   console.log(`${res.data.children[0].stats[0].metadata.key} : ${res.data.children[0].stats[0].value}`);
})
.catch((err) => {
   if (err) { 
return console.error(err.message);
 }
});
 }
module.exports.config = {
    name: "apexstats",
    aliases: []
}
