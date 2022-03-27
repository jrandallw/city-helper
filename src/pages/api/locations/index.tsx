import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

const locations = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ status: 'Method Not Allowed' });
    return;
  } else {
    try {
      const locations = await prisma.location.findMany();
      res.status(200).json({ ...locations, success: true });
    } catch (error) {
      console.error(error);
      res
        .status(405)
        .json({ message: 'Error reading from database...', success: false });
    }
  }
};

export default locations;
