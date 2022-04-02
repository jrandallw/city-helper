import { NextApiRequest, NextApiResponse } from 'next';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const remove = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    try {
      const { key } = req.query as { key: string };
      await prisma.flag.delete({
        where: {
          key: key,
        },
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(405).json({
        message: API_MESSAGES.errorReadingFromDatabase,
        success: false,
      });
    }
  }
};

export default remove;
