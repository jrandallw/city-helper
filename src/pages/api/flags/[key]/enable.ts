import { NextApiRequest, NextApiResponse } from 'next';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const enable = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    try {
      const { key } = req.query as { key: string };
      const flag = await prisma.flag.upsert({
        where: {
          key: key,
        },
        update: {
          key: key,
          enabled: true,
        },
        create: {
          key: key,
          enabled: true,
        },
      });
      res.status(200).json({ flag, success: true });
    } catch (error) {
      console.error(error);
      res.status(405).json({
        message: API_MESSAGES.errorReadingFromDatabase,
        success: false,
      });
    }
  }
};

export default enable;
