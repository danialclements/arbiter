//import util from 'util';
//import bot from 'fancy-groupme-bot';
var bot = require('fancy-groupme-bot');

// local configuration read from env.
const token = process.env['TOKEN']; // your groupme api token
const groupId = process.env['GROUP']; // the room you want to join
const botName = process.env['NAME']; // the name of your bot
const url = process.env['URL']; // the domain you're serving from, should be accessible by Groupme.
const config = { token: token, group: groupId, name: botName, url: url };

var mybot = bot(config);

class Trait {
  name: string;
  bot: any;
  constructor(bot: any) {
    this.bot = bot;
    this.bot.on('botMessage', this.onMessage.bind(this));
    this.onRegister();
  }
  onMessage(message: any) {
    
  }
  onRegister() {

  }
}

class HelloTrait extends Trait {
  name: "HelloTrait";
  onMessage(message) {
    this.bot.message(`You said ${message.text}`);
  }
  onRegister() {
    this.bot.message(`Hello, I am ${this.name}`);
  }
}

mybot.on('botRegistered', function(bot) {
  let traits = [HelloTrait]

  traits.forEach((trait) => new trait(bot))

  console.log('i am registered');
});

console.log("i am serving");
mybot.serve(8000);