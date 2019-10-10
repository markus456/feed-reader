const fs = require('fs')
const htmlToText = require('html-to-text');
const Parser = require('rss-parser')
var parser = new Parser()
var term = require('terminal-kit').terminal
term.fullscreen(true)

config = JSON.parse(fs.readFileSync('config.json'))

async function readFeed() {
    var feed = await parser.parseURL(config.url);

    feed.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))

    term.clear()

    feed.items.forEach(item => {
        var d = new Date(item.pubDate)
        var text = htmlToText.fromString(item.title, {wordwrap: 1200}).replace(/\[[^\]]*\] /, '')
        term(d.toLocaleString() + ': ' + text + '\n')
    });

};


setInterval(() => readFeed(), 5000)
readFeed()

process.stdin.on('data', () => {})
