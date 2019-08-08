import microAuthSpotify from 'microauth-spotify';

export default microAuthSpotify({
  clientId: '***',
  clientSecret: '***',
  path: '/api/auth/login',
  callbackUrl: 'http://localhost:3000/api/auth/callback',
});
