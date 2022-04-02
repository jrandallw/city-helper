import { NextApiRequest, NextApiResponse } from 'next';

import { API_MESSAGES } from 'lib/api/constants';
import { prisma } from 'lib/prisma';

const location = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ message: API_MESSAGES.methodNotAllowed, success: false });
    return;
  } else {
    try {
      const location = await prisma.location.create({
        data: {
          name: req.body.name,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          bathroomCode: req.body.bathroomCode,
        },
      });

      res.status(200).json({ data: location, success: true });
    } catch (error) {
      console.error(error);
      res
        .status(405)
        .json({ message: 'Error writing to database...', success: false });
    }
  }
};

export default location;
