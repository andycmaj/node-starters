import { NextApiRequest, NextApiResponse } from 'next';
import withSpotifyOAuth from './withSpotifyOAuth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('auth handler');
};

export default withSpotifyOAuth(handler);
