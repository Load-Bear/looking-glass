// One Cloudflare Worker that serves the whole site and the relay at /relay.
import relay from './index.js';
export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    if (u.pathname === '/relay' || u.pathname === '/relay/') return relay.fetch(req, env);
    if (u.pathname === '/') return env.ASSETS.fetch(new Request(new URL('/Looking%20Glass.html', u), req));
    return env.ASSETS.fetch(req);
  }
};
