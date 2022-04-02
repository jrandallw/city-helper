import { NextApiRequest, NextApiResponse } from 'next';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const locations = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ status: API_MESSAGES.methodNotAllowed });
    return;
  } else {
    try {
      const locations = await prisma.location.findMany();
      res.status(200).json({ locations, success: true });
    } catch (error) {
      console.error(error);
      res.status(405).json({
        message: API_MESSAGES.errorReadingFromDatabase,
        success: false,
      });
    }
  }
};

export default locations;
