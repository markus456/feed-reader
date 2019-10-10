# Simple RSS Feed Reader

Minimalistic command line RSS feed reader.

## Configuration

Create a `config.json` file with the following structure and replace the URL with the RSS feed you want to read:

```json
{
  "url": "https://www.reddit.com/.rss"
}
```

For feeds that require authentication, pass the credentials in the URL:

```
https://user:password@www.my-site-that-i-am-logging-into.com/rss-feed
```
