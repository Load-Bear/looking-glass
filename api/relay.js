import relay from '../relay/src/index.js';
export const config = { runtime: 'edge' };
export default (req) => relay.fetch(req, { EXTRA_HOSTS: process.env.EXTRA_HOSTS || '' });
