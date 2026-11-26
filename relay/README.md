# Looking Glass relay

A small Cloudflare Worker that lets Looking Glass read news feeds and data sources that block browsers. Free plan: 100,000 requests a day.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/jhalsey09-netizen/looking-glass/tree/main/relay)

1. Click the button and sign in to Cloudflare (or create a free account).
2. Click **Deploy**. Cloudflare copies this folder into your GitHub and publishes it.
3. Copy the address it shows, like `https://looking-glass-relay.yourname.workers.dev`.
4. In Looking Glass, open **Setup → Connections → Relay**, paste it and click **Save & test**.

To relay your own paid sources, add their hostnames (comma separated) to the `EXTRA_HOSTS` variable in the worker's Settings → Variables.
