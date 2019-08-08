import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { send } from 'micro';
import withSpotifyOAuth from './withSpotifyOAuth';
import redirect from 'micro-redirect';

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res, name, value, options = {}) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  // if ('maxAge' in options) {
  //   options.expires = new Date(Date.now() + options.maxAge);
  //   options.maxAge /= 1000;
  // }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
};

// const withCookie = handler => (request, response) => {};

const handler = (req: NextApiRequest, res: NextApiResponse, auth: any) => {
  console.log('auth callback', auth);

  if (!auth) {
    return send(res, 404, 'Not Found');
  }

  if (auth.err) {
    // Error handler
    console.error(auth.err);
    return send(res, 403, 'Forbidden');
  }

  // cookie name must be "token" to use next-cookies
  cookie(res, 'token', auth);

  redirect(res, 302, '/?linked=spotify');
};

export default withSpotifyOAuth(handler);
