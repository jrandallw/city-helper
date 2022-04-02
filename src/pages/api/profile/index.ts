import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    const session = await getSession({ req });
    if (session) {
      try {
        const profile = await prisma.profile.findFirst({
          where: {
            id: session.user.id,
          },
        });
        res.status(200).json({ profile, success: true });
      } catch (error) {
        console.error(error);
        res.status(405).json({
          message: API_MESSAGES.errorReadingFromDatabase,
          success: false,
        });
      }
    } else {
      res
        .status(401)
        .json({ message: API_MESSAGES.notSignedIn, success: false });
    }
  }
};

export default remove;
