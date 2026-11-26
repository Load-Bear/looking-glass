import relay from '../../relay/src/index.js';
export default (req) => relay.fetch(req, { EXTRA_HOSTS: process.env.EXTRA_HOSTS || '' });
export const config = { path: '/relay' };
