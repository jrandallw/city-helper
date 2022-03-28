import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

const flags = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed', success: false });
    return;
  } else {
    try {
      const flags = await prisma.flag.findMany();
      res.status(200).json({ flags, success: true });
    } catch (error) {
      console.error(error);
      res
        .status(405)
        .json({ message: 'Error reading from database...', success: false });
    }
  }
};

export default flags;
