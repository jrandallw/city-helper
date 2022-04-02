import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { API_MESSAGES } from 'lib/api/constants';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ status: API_MESSAGES.methodNotAllowed });
    return;
  } else {
    const session = await getSession({ req });
    if (session) {
      res.status(200).json({ user: session.user, success: true });
    } else {
      res
        .status(401)
        .json({ message: 'User not signed in...', success: false });
    }
  }
};

export default user;
