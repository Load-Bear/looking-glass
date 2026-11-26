# Looking Glass

A live 3D globe of what is happening in the world: conflict, protests, earthquakes, storms, space weather, flights, shipping, markets and news from hundreds of public sources. It runs entirely in your web browser. No account, no tracking.

## Try it right now (1 minute)

1. Click the green **Code** button on this page, then **Download ZIP**.
2. Open the ZIP (double-click it).
3. Double-click **index.html**.

That's it. It opens in your browser and starts working.

## One click: site and relay together (free, recommended)

These put the app online **and** set up the relay for you. Nothing to copy or paste: the app finds its relay by itself.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Load-Bear/looking-glass) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Load-Bear/looking-glass) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Load-Bear/looking-glass)

Pick one, sign in with GitHub, click **Deploy**. Cloudflare's free plan is the most generous (100,000 relay requests a day). Railway and Render also work but are not free for always-on use.

## Put it on the web so you can open it anywhere (2 minutes, free)

**Easiest: Netlify Drop**

1. Go to **app.netlify.com/drop**.
2. Drag the unzipped folder onto the page.
3. You get a web address straight away. Make a free account when asked if you want to keep it.

**Or with GitHub Pages**

1. On this page, click **Fork** (top right) to copy it to your own GitHub account.
2. In your copy, open **Settings → Pages**.
3. Under *Source*, choose **Deploy from a branch**, pick **main**, and click **Save**.
4. After a minute your site is live at `yourname.github.io/looking-glass`.

## Use it on iPad or iPhone

1. Put it on the web (GitHub Pages or Netlify, above).
2. Open the address in **Safari**.
3. Tap the **Share** button, then **Add to Home Screen**.

It gets its own icon, opens full screen like an app, and updates itself whenever you update GitHub. Pinch to zoom the globe, drag to spin it.

## Optional: turn on more (both free)

When you first open Looking Glass, a **Quick start** page walks you through these. You can also find it any time under **Setup → Quick start**.

**AI analyst (2 minutes).** Lets you ask questions in plain English.
Go to aistudio.google.com/apikey, sign in with Google, click **Create API key**, copy it, and paste it into Quick start.

**More news and data (3 minutes).** Some sources block websites from reading them. A free helper on Cloudflare passes them through.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Load-Bear/looking-glass/tree/main/relay)

Click the button, sign in to Cloudflare, click **Deploy**, then paste the address it gives you (ending in `.workers.dev`) into Quick start.

## Questions

**Does it cost anything?** No. Google's AI and Cloudflare both have free plans that cover normal use. If you prefer Claude or ChatGPT, add your own key under **Setup → Connections**.

**Where do my keys go?** They are saved in your own browser and sent only to the service they belong to.

**Something isn't loading.** Some sources are temporarily down or limited. The dot in the top right shows how many are live. Setting up the free helper above fixes most of the rest.

## Data sources

Looking Glass reads public data directly from these providers. Each keeps its own terms; please respect their rate limits.

- **Earth & hazards:** USGS Earthquake Hazards Program, NASA EONET and FIRMS, GDACS, US National Weather Service, Open-Meteo, ReliefWeb
- **Space:** NOAA Space Weather Prediction Center, NASA DONKI, SDO and SOHO imagery, CelesTrak, Tomsk State University SOS-70 (Schumann resonance)
- **News & events:** GDELT Project, The Guardian Open Platform, and 250+ publisher RSS feeds listed in feeds.json
- **Infrastructure:** Cloudflare Radar, OpenSky Network, ADSB.lol, Fintraffic Digitraffic (AIS), gpsjam.org, Wikidata
- **Economy & markets:** FRED, World Bank, US BLS, FDIC, Polymarket, Manifold
- **Maps:** Esri World Imagery, NASA Blue Marble

Translations use Google Translate's public endpoint. Nothing is stored on any server we run; there isn't one.

## License

MIT. See LICENSE.
