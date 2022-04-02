import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    const session = await getSession({ req });
    if (session) {
      const body = JSON.parse(req.body);

      try {
        const profile = await prisma.profile.upsert({
          where: {
            id: session.user.id,
          },
          update: {
            bio: body.bio,
          },
          create: {
            id: session.user.id,
            userId: session.user.id,
            bio: body.bio,
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

export default update;
