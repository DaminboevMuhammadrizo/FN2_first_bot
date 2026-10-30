const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Start
bot.start(ctx => {
  ctx.reply(`Welcome ${ctx.from.first_name} to my first bot`,
    Markup.keyboard([
      ["Salomlashish"],
      ["Boshlash", "Help"],
    ]).resize())
})

bot.help(ctx => ctx.reply(`Yordam berish taqiqlanadi !?`))

// Salomlashish
bot.hears('Salomlashish', ctx => {
  ctx.reply(` Hello ${ctx.from.first_name}`)
})

module.exports = bot
