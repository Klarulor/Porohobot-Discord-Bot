const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Команда, яка знайомить вас с ботом.'),
    async execute(interaction) {

        const embed = new MessageEmbed()
            .setTitle("📄 Список комманд")
            .setColor('#ff9cfe')
            .setDescription("Бот ще в розробці але команд вже достатньо\n__Якщо є питання або пропозиції:__ \`\`Boy From God#2772\`\`")
            .setFooter({text: "Bot by Boy From God#2772", iconURL: "https://cdn.discordapp.com/avatars/390561515054563328/a7aaa462df02317dbcf4c0a649fe6321.webp?size=128"})
            .addFields(
                {name: '\u200B', value: '\u200B'},
                {name: "🧾 Стандартні команди", value:`
                \`\`/profile\`\` - ваш профіль зі статистикою.
                \`\`/help\`\` - допомога.
                \`\`/getdeadrussian\`\` - скидує рандомний труп росіянина або можете вибрати по айді.`},
                {name: '\u200B', value: '\u200B'},
                {name: "🍌 Команди DickGame",value:`
                \`\`/dick\`\` - рандомне додавання до вашого маленького друга.
                \`\`/dickleaderboard\`\` - світовий рейтинг маленьких дружків.
                \`\`/mydick\`\` - показати вашого маленького дружка.`},
                {name: '\u200B', value: '\u200B'},
                {name: "💿 Музичні команди",value:`
                \`\`/play\`\` - Починає програвати вибранний плейліст.
                \`\`/skip\`\` - Скіпує пісню.
                \`\`/shuffle\`\` - Перемішую чергу.
                \`\`/quit\`\` - Закінчити програвання музики.
                \`\`/loop\`\` - Зациклює трек.
                \`\`/loopqueue\`\` - Зациклює чергу.
                \`\`/musicinfo\`\` - Список заготовленних плейлістів.
                \`\`/nowplaying\`\` - Показує що зараз грає.
                \`\`/queue\`\` - Показує чергу пісень.
                `},);
        interaction.reply({embeds:[embed]})
    }
}

