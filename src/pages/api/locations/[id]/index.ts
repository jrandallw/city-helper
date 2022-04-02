import { NextApiRequest, NextApiResponse } from 'next';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const location = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    try {
      const location = await prisma.location.findUnique({
        where: {
          id: Number(req.query.id),
        },
      });
      res.status(200).json({ ...location, success: true });
    } catch (error) {
      console.error(error);
      res.status(405).json({
        message: API_MESSAGES.errorReadingFromDatabase,
        success: false,
      });
    }
  }
};

export default location;
