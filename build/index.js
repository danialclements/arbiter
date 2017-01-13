var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//import util from 'util';
//import bot from 'fancy-groupme-bot';
var bot = require('fancy-groupme-bot');
// local configuration read from env.
var token = process.env['TOKEN']; // your groupme api token
var groupId = process.env['GROUP']; // the room you want to join
var botName = process.env['NAME']; // the name of your bot
var url = process.env['URL']; // the domain you're serving from, should be accessible by Groupme.
var config = { token: token, group: groupId, name: botName, url: url };
var mybot = bot(config);
var Trait = (function () {
    function Trait(bot) {
        this.bot = bot;
        this.bot.on('botMessage', this.onMessage.bind(this));
        this.onRegister();
    }
    Trait.prototype.onMessage = function (message) {
    };
    Trait.prototype.onRegister = function () {
    };
    return Trait;
}());
var HelloTrait = (function (_super) {
    __extends(HelloTrait, _super);
    function HelloTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloTrait.prototype.onMessage = function (message) {
        this.bot.message("You said " + message.text);
    };
    HelloTrait.prototype.onRegister = function () {
        this.name = "HelloTrait";
        this.bot.message("Hello, I am " + this.name);
    };
    return HelloTrait;
}(Trait));
mybot.on('botRegistered', function (bot) {
    var traits = [HelloTrait];
    traits.forEach(function (trait) { return new trait(bot); });
    console.log('i am registered');
});
console.log("i am serving");
mybot.serve(8000);
//# sourceMappingURL=index.js.map